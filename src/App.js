import NavBar from "components/navBar"
import TodoList from "components/todoList"
import Header from "components/header"
import "app.scss"

function App() {
  return (
    <fragment>
      <NavBar />
      <div className="app_container">
        <Header />
        <TodoList />
      </div>
    </fragment>
  )
}

export default App
