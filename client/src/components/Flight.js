function Flight({flight}){
    return (
        <div>
            <img src={flight.image} alt={flight.airline}/>
            <h1>{flight.airline}</h1>
        </div>
    )
}

export default Flight;