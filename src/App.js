import NavBar from "components/navBar"
import TodoList from "components/todoList"
import Header from "components/header"
import "app.scss"
import { Fragment } from "react"

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="app_container">
        <Header />
        <TodoList />
      </div>
    </Fragment>
  )
}

export default App
