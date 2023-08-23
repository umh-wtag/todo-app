import React, { Fragment } from "react"
import { useSelector } from "react-redux"
import TodoItem from "components/todoItem"
import AddTodoForm from "components/addTodoForm"
import "components/todoList/todoList.scss"
import { IMAGE_PATHS, ADD_FIRST_TASK } from "utils/constants"


const TodoList = () => {
  const selectTodos = (state) => state.todos.todoItems
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
    <Fragment>
      {todos.length < 1 && toggleIsAdding === false && (
        <div className="add">
          <img src={IMAGE_PATHS.ADD} alt={ADD_FIRST_TASK} />
          <h1>You didn't add any task. Please, add one.</h1>
        </div>
      )}
      <div className="todoList">
        {toggleIsAdding && <AddTodoForm />}
        {renderedListItems}
      </div>
    </Fragment>
  )
}

export default TodoList
