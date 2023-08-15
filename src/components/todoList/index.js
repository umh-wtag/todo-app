import React from "react"
import { useSelector } from "react-redux"
import TodoItem from "../todoItem"
import styles from './todoList.module.css'
import Form from '../form'

const selectTodos = (state) => state.todos.todoItems

const TodoList = ({isAdding}) => {
  const todos = useSelector(selectTodos)

  const renderedListItems = todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />
  })

  return (
    <div className={styles.todoList}>
      {isAdding && <Form />}
      {renderedListItems}
    </div>
  )
}

export default TodoList
