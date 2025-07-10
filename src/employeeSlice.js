import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        setEmployees: (state, action) => {
            return action.payload
        },
        addEmployee: (state, action) => {

            // give new employees a unique id and a random image id
            action.payload.id = state[state.length - 1].id + 1
            action.payload.imageId = Math.floor(Math.random() * 10)

            state.push(action.payload)
        }
    }
})

export const { setEmployees, addEmployee } = employeeSlice.actions

export default employeeSlice.reducer


// global state:  { employees: {} }