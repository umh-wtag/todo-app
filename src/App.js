import "app.scss"
import NavBar from "components/navBar"
import TodoList from "components/todoList"
import Header from "components/header"

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
