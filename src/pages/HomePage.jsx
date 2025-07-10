import { useState, useEffect, useReducer } from "react"

import EmployeeList from "../components/EmployeeList"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

import { useDispatch, useSelector } from "react-redux"
import { setEmployees } from "../employeeSlice"

function HomePage({ }) {

    // access the global state 
    const employees = useSelector((state) => state.employees)

    console.log('employees (redux)', employees)

    // updating the global state
    const dispatch = useDispatch()

    // const value = useContext(Context)

    let [text, setText] = useState('')

    useEffect(() => {

        // if we already got the employee data, don't fetch again
        if (employees.length) return

        async function getEmployeeData() {
            try {
                let url = 'https://jsonplaceholder.typicode.com/users'
                const response = await fetch(url) 
                const data = await response.json()
                
                // update the global state (redux store)
                dispatch(setEmployees(data))
            } catch (e) {
                console.log(e)
            }
        } 
        getEmployeeData()
    }, [])

    console.log(employees)

    return (
        <div id='homepage'>
            <Header />
            <SearchBar 
                text={text} 
                setText={setText} 
            /> 
            <EmployeeList  
                employees={employees}
                text={text}
            /> 

        </div>
    )
}

export default HomePage

