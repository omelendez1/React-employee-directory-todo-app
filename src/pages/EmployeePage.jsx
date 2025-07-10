import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function EmployeePage() {

    // access our employees from the redux store
    const employees = useSelector((state) => state.employees)

    const { id } = useParams()
    const [employee, setEmployee] = useState({})
    const navigate = useNavigate()

    useEffect(() => {

        const employee = employees.find((e) => e.id == id)

        // if the employee is already in state, return to avoid fetching again
        if (employee) return setEmployee(employee)

        async function getEmployeeData() {
            try {
                let url = `https://jsonplaceholder.typicode.com/users/${id}`
                const response = await fetch(url)
            
                // if the request was unsuccessful, throw an error
                if (!response.ok) throw new Error('no such employee found')

                const data = await response.json()
                console.log(data)
                setEmployee(data)
            } catch (e) {
                console.log(e.message)
                navigate('/')
            }
        }
        getEmployeeData()
    }, [])

    return (
        <>
            <h1>
                <span className="back" onClick={() => navigate('/')}>{'<'}</span>
                Employee
            </h1>
            <div className="item page">
                <img src={`../images/headshot${employee.imageId ? employee.imageId : id}.jpeg`} alt="emp" />

                <div className="emp">
                    <div className="emp-name">{employee.name}</div>
                    <div className="emp-title">{employee.company?.name}</div>
                </div>

            </div>
            <section>
                <div>
                    <p>Email</p>
                    <p>{employee.email}</p>
                </div>
                <div>
                    <p>Phone</p>
                    <p>{employee.phone}</p>
                </div>
                <div>
                    <p>Address</p>
                    <p>{employee.address?.street}</p>
                </div>
            </section>
        </>
    )
}

export default EmployeePage