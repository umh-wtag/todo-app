import React, { Fragment } from "react"
import { useSelector } from "react-redux"
import TodoItem from "components/todoItem"
import AddTodoForm from "components/addTodoForm"
import { ICON_ADD, ADD_FIRST_TASK } from "utils/constants"
import "components/todoList/todoList.scss"


const TodoList = () => {
  const selectTodos = (state) => state.todos.todoItems
  const todos = useSelector(selectTodos)
  const selectIsAdding = (state) => state.todos.isAdding
  const toggleIsAdding = useSelector(selectIsAdding)
  
  return (
    <Fragment>
      {todos.length < 1 && toggleIsAdding === false && (
        <div className="add">
          <img src={ICON_ADD} alt={ADD_FIRST_TASK} />
          <h1>You didn't add any task. Please, add one.</h1>
        </div>
      )}
      <div className="todoList">
        {toggleIsAdding && <AddTodoForm />}
        {todos.map((item) =><TodoItem todo={ item } />)}
      </div>
    </Fragment>
  )
}

export default TodoList
