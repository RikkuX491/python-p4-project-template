from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

# Models go here!
class Flight(db.Model, SerializerMixin):
    __tablename__ = 'flights'

    id = db.Column(db.Integer, primary_key=True)
    airline = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)

    bookings = db.relationship('Booking', back_populates='flight')

    @validates('airline', 'image')
    def validate_airline_and_image(self, attr, value):
        if (not isinstance(value, str)) or (len(value) == 0):
            raise ValueError(f'Airline must have an {attr}')
        else:
            return value
        
class Booking(db.Model, SerializerMixin):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float, nullable=False)
    destination = db.Column(db.String, nullable=False)

    flight_id = db.Column(db.Integer, db.ForeignKey('flights.id'))
    
    flight = db.relationship('Flight', back_populates='bookings')

    @validates('flight_id')
    def validate_flight_id(self, attr, value):
        if not value:
            raise ValueError(f"Booking must have a {attr}!")
        else:
            return value