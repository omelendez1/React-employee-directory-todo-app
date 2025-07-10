### React Employee Directory + Todo App

A full-featured React application combining an employee directory with a personal todo list — built using modern React tools including Redux Toolkit, React Router, and useReducer.

## 🚀 Features

### 🧑‍💼 Employee Directory
- View a list of employees fetched from an external API.
- Search employees by name.
- View individual employee details (name, company, contact).
- Add new employees via a form (Redux-powered).

### ✅ Todo List
- Add, edit, and delete tasks.
- Mark tasks as complete with a checkbox.
- Disable deletion of incomplete tasks.
- Inline editing and saving.
- Built using `useReducer` and controlled inputs.

## 🛠️ Tech Stack

- React 19
- Redux Toolkit
- React Router v7
- Vite (build tool)
- JavaScript (ES Modules)
- useReducer for Todo list
- CSS for styling

## 📁 Project Structure

src/
│
├── App.jsx # Application routes
├── main.jsx # App entry with Redux and Router
├── components/ # Reusable UI components
├── pages/ # Page-level components (Home, Todo, etc.)
├── store.js # Redux store config
├── employeeSlice.js # Redux slice for employee state
└── styles/ # CSS files

bash
Copy
Edit

## 🚦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/react-employee-directory-todo-app.git
cd react-employee-directory-todo-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Development Server
bash
Copy
Edit
npm run dev
```
Visit http://localhost:5173/ in your browser.

📸 Screenshots
Add screenshots here once deployed or running locally.

🧪 Scripts
npm run dev – start development server
npm run build – build for production
npm run preview – locally preview production build
npm run lint – lint the code

🧠 Future Improvements
Validation for form inputs
Persisting todo list with localStorage
Add filters (All, Active, Completed) to the Todo List
Edit functionality for employee data# React-employee-directory-todo-app
