import { Link } from "react-router-dom"

function EmployeeListItem({ name, title, id, imageId }) {


    return (
        <div className="item">
            
            <Link to={`/employee/${id}`}><img src={`../images/headshot${imageId}.jpeg`} alt="" /></Link>

            <div className="emp">
                <div className="emp-name">{name}</div>
                <div className="emp-title">{title}</div>
            </div>

        </div>
    )
}

export default EmployeeListItem
