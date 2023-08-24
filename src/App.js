import { Fragment } from "react"
import NavBar from "components/navBar"
import TodoList from "components/todoList"
import Header from "components/header"
import "app.scss"

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="app-container">
        <Header />
        <TodoList />
      </div>
    </Fragment>
  )
}

export default App
