#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Flight, Booking

# Views go here!
class AllFlights(Resource):

    def get(self):
        response_body = [flight.to_dict(only=('id', 'airline', 'image')) for flight in Flight.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        try:
            new_flight = Flight(airline=request.json.get('airline'), image=request.json.get('image'))
            db.session.add(new_flight)
            db.session.commit()
            response_body = new_flight.to_dict(only=('id', 'airline', 'image'))
            return make_response(response_body, 201)
        except:
            response_body = {
                "error": "Flight must have an airline and an image!"
            }
            return make_response(response_body, 400)

api.add_resource(AllFlights, '/flights')

class AllBookings(Resource):

    def get(self):
        response_body = [booking.to_dict(rules=('-flight.bookings',)) for booking in Booking.query.all()]
        return make_response(response_body, 200)

    def post(self):
        try:
            new_booking = Booking(price=request.json.get('price'), destination=request.json.get('destination'), flight_id=request.json.get('flight_id'))
            db.session.add(new_booking)
            db.session.commit()
            response_body = new_booking.to_dict(rules=('-flight.bookings',))
            return make_response(response_body, 201)
        except:
            response_body = {
                "error": "Booking must have a price, destination, and flight_id!"
            }
            return make_response(response_body, 400)

api.add_resource(AllBookings, '/bookings')

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

if __name__ == '__main__':
    app.run(port=5555, debug=True)

