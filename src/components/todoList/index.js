import React from "react"
import { useSelector } from "react-redux"
import TodoItem from "../todoItem"
import styles from "./todoList.module.css"
import Form from '../form'

const selectTodos = (state) => state.todos.todoItems

const TodoList = ({ isAdding, setIasAdding }) => {
  const todos = useSelector(selectTodos)

  const renderedListItems = todos
    .slice(0)
    .reverse()
    .map((todo) => {
      return <TodoItem key={todo.text} todo={todo} />
    })

  return (
    <div className={styles.todoList}>
      {isAdding && <Form setIasAdding={setIasAdding} />}
      {renderedListItems}
    </div>
  )
}

export default TodoList
