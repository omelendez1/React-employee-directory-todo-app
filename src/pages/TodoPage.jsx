import { useReducer, useState } from 'react'
import './TodoPage.css'

const initialState = []

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        { id: Date.now(), title: action.payload, completed: false, editing: false },
        ...state
      ]
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
    case 'delete':
      return state.filter(todo => todo.id !== action.payload)
    case 'edit':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, editing: true } : todo
      )
    case 'save':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title, editing: false }
          : todo
      )
    default:
      return state
  }
}

function TodoPage() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [input, setInput] = useState('')
  const [editText, setEditText] = useState('')

  return (
    <div className='todo-container'>
      <h1>Todo List</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (input.trim()) {
            dispatch({ type: 'add', payload: input })
            setInput('')
          }
        }}
      >
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Add a new task...'
        />
        <button type='submit'>Add</button>
      </form>

      <ul>
        {state.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.editing ? (
              <>
                <input
                  type='text'
                  value={editText || todo.title}
                  onChange={e => setEditText(e.target.value)}
                />
                <button
                  onClick={() => {
                    dispatch({ type: 'save', payload: { id: todo.id, title: editText } })
                    setEditText('')
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
                />
                <span>{todo.title}</span>
                <button onClick={() => dispatch({ type: 'edit', payload: todo.id })}>
                  Edit
                </button>
                <button
                  onClick={() => dispatch({ type: 'delete', payload: todo.id })}
                  disabled={!todo.completed}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoPage