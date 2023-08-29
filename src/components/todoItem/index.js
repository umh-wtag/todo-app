import React from "react"
import PropTypes from "prop-types"
import EditTodoForm from "components/editTodoForm"
import ItemPreview from "components/itemPreview"
import "components/todoItem/todoItem.scss"


function TodoItem({ todo }) {
  
  return (
    <div className="todoList">
      {
        todo.editing ? (
          <EditTodoForm key={todo.id} todo={todo} />
        ) : (
          <ItemPreview key={todo.id} todo={todo} editing={todo.editing} />
        )
      }
    </div>
  )

}

TodoItem.prototypes = {
  todo: PropTypes.shape({
     id: PropTypes.string.isRequired,
     text: PropTypes.string.isRequired,
     createdAt: PropTypes.string.isRequired,
     completed: PropTypes.bool.isRequired
  }).isRequired,
}

export default TodoItem
