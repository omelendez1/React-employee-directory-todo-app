import { useNavigate } from 'react-router-dom'
import Form from '../components/UncontrolledForm'

function AddEmployeePage() {

    const navigate = useNavigate()

    return (
        <>
            <h1>Add Employee<span className='back' onClick={() => navigate('/')}>{'<'}</span></h1>
            <Form />
        </>
    )
}

export default AddEmployeePage