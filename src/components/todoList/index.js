import React from "react"
import { useSelector } from "react-redux"
import TodoItem from "../todoItem"
import styles from "./todoList.module.css"
import AddTodoForm from "../addTodoForm"

const selectTodos = (state) => state.todos.todoItems

const TodoList = () => {
  const todos = useSelector(selectTodos)
  const selectIsAdding = (state) => state.todos.isAdding
  const toggleIsAdding = useSelector(selectIsAdding)

  const renderedListItems = todos
    .slice(0)
    .reverse()
    .map((todo) => {
      return <TodoItem key={todo.text} todo={todo} />
    })

  return (
    <div className={styles.todoList}>
      {toggleIsAdding && <AddTodoForm />}
      {renderedListItems}
    </div>
  )
}

export default TodoList
