import React, { Fragment, useState } from "react"
import { useSelector } from "react-redux"
import TodoItem from "components/todoItem"
import AddTodoForm from "components/addTodoForm"
import Button from "components/buttons"
import { IMAGE_PATHS, ADD_FIRST_TASK, MAX_TODOS } from "utils/constants"
import "components/todoList/todoList.scss"

const TodoList = () => {
  const selectTodos = (state) => state.todos.todoItems
  const todos = useSelector(selectTodos)
  const selectIsAdding = (state) => state.todos.isAdding
  const toggleIsAdding = useSelector(selectIsAdding)
  const [taskOnBoard, setTaskOPnBoard] = useState(MAX_TODOS)
  
  function loadMore() {
    if (todos.length <= taskOnBoard + MAX_TODOS){
      setTaskOPnBoard((prev) => prev + Math.abs(todos.length - MAX_TODOS))
    } else if (todos.length > taskOnBoard + MAX_TODOS) {
     setTaskOPnBoard((prev) => prev +  MAX_TODOS)
    }
  }
 
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
        {todos?.slice(0, taskOnBoard).map((item) => (
          <TodoItem todo={item} key={item.id} />
        ))}
      </div>
      <div className="load">
        {todos.length > 8 && <Button text="Load more" onClick={loadMore} />}
        {( todos.length === taskOnBoard && todos.length > 8) ? <Button text="Load less" onClick={loadMore} /> : ''}
      </div>
    </Fragment>
  )
}

export default TodoList
