import styles from "./App.module.css"
import AppBar from "./components/appBar"
import TodoList from "./components/todoList"
import Header from "./components/header/Header"

function App() {
  return (
    <main>
      <AppBar />
      <section className={styles.container}>
        <Header />
        <TodoList />
      </section>
    </main>
  )
}

export default App
