import styles from "./App.module.css"
import AppBar from "./components/appBar"
import TodoList from "./components/todoList"
import { useState } from "react"


function App() {
  const [isAdding, setIasAdding] = useState(false)
  return (
    <main>
      <AppBar />

      <section className={styles.container}>
        <div className={styles.body}>
          <h1>Add Task</h1>
          <div className={styles.buttons}>
            <button onClick={() => setIasAdding((prev) => !prev)}>
              Add Task
            </button>
            <div className={styles.filterButtons}>
              <button>All</button>
              <button>Incomplete</button>
              <button>Complete</button>
            </div>
          </div>
        </div>

        <div>
          <TodoList isAdding={isAdding} setIasAdding={setIasAdding} />
        </div>
      </section>
    </main>
  )
}

export default App
