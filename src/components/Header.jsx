import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    return (
        <h1>Employee Directory<span className="add-employee" onClick={() => navigate('/new')}>+</span></h1>
    )
}

export default Header