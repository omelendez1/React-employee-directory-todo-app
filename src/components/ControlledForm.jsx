import { useState } from "react"

// Controlled Form

const initialForm = {
    name: '',
    title: ''
}

export default function Form({ setEmployees }) {

    const [form, setForm] = useState(initialForm)

    function handleChange(e) {
        setForm({ 
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const employee = {
            name: form.name,
            title: form.title,
            image: '0'
        }

        // adds the new employee to the employees data
        setEmployees((employees) => {
            return [...employees, employee]
        })

        // resets the form 
        setForm(initialForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    name="name" 
                    type="text" 
                    onChange={handleChange} 
                    value={form.name} 
                />
            </label>
            
            <label>
                Title:
                <input 
                    name="title" 
                    type="text" 
                    onChange={handleChange} 
                    value={form.title} 
                />
            </label>
            
            <button>Submit</button>
        </form>
    )
}