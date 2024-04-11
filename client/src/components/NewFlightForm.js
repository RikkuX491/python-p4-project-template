import {useState} from "react"
import { useOutletContext, useNavigate } from "react-router-dom";

function NewFlightForm(){

    const [formData, setFormData] = useState({
        airline: "",
        image: ""
    })

    const {addFlight} = useOutletContext()
    const navigate = useNavigate()

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        addFlight(formData)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Flight</h1>
            <input onChange={updateFormData} type="text" name="airline" placeholder="Airline name" value={formData.airline}/>
            <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image}/>
            <input type="submit" value="Add Flight"/>
        </form>
    )
}

export default NewFlightForm;