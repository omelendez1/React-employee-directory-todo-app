import EmployeeListItem from "./EmployeeListItem"

function EmployeeList({ text, employees }) {

    // use the text to filter the data
    const filteredEmployees = employees.filter((employee) => {
        if (!text) {
            return true
        }
        if (employee.name.toLowerCase().includes(text.toLowerCase())) {
            return true
        } else {
            return false
        }
    })

    let employeeComponents = filteredEmployees.map((employee) => 
        <EmployeeListItem  
            key={employee.id}
            id={employee.id}
            imageId={employee.imageId ? employee.imageId : employee.id}
            name={employee.name} 
            title={employee.company.name} 
        />
    )

    return (
        <div id="list">
            {employeeComponents}
        </div>
    )
}

export default EmployeeList

