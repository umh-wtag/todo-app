import "app.scss"
import NavBar from "components/navBar"
import TodoList from "components/todoList"
import Header from "components/header"

function App() {
  return (
    <main>
      <NavBar />
      <section className="app_container">
        <Header />
        <TodoList />
      </section>
    </main>
  )
}

export default App
