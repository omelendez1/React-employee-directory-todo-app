import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addEmployee } from "../employeeSlice"

// Uncontrolled Form

export default function UncontrolledForm() {

    const dispatch = useDispatch()

    const nameRef = useRef(null)
    const titleRef = useRef(null)

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const employee = {
            name: nameRef.current.value,
            email: nameRef.current.value.toLowerCase() + '@gmail.com',
            phone: '000-000-0000',
            company: {
                name: titleRef.current.value || 'Company Inc'
            },
            address: {
                street: 'Easy Street'
            },
            id: null,
            imageId: null
        }

        // adds the new employee to the employees data

        // dispatch({ type: 'add', payload: employee })
        dispatch(addEmployee(employee))

        // resets the form 
        nameRef.current.value = ''
        titleRef.current.value = ''

        alert('Employee added!')

        navigate('/')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    name="name" 
                    type="text" 
                    ref={nameRef}
                />
            </label>
            
            <label>
                Company:
                <input 
                    name="title" 
                    type="text" 
                    ref={titleRef}
                />
            </label>
            
            <button>Submit</button>
        </form>
        </>
    )
}