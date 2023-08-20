import styles from "App.module.css"
import NavBar from "components/navBar"
import TodoList from "components/todoList"
import Header from "components/header"

function App() {
  return (
    <main>
      <NavBar />
      <section className={styles.container}>
        <Header />
        <TodoList />
      </section>
    </main>
  )
}

export default App
