import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import EmployeePage from './pages/EmployeePage'
import HomePage from './pages/HomePage'
import AddEmployeePage from './pages/AddEmpPage'
import TodoPage from './pages/TodoPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/employee/:id' element={<EmployeePage />} />
      <Route path='/new' element={<AddEmployeePage />} />
      <Route path='/todo' element={<TodoPage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App