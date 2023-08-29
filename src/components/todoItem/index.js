import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import PropTypes from "prop-types"
import EditTodoForm from "components/editTodoForm"
import ItemPreview from "components/itemPreview"
import "components/todoItem/todoItem.scss"


function TodoItem({ todo }) {
  const isEditing = (state) => state.todos.isEditing
  const toggleEdit = useSelector(isEditing)

  return (
    <div>
      {toggleEdit ? (
        <EditTodoForm todo={todo} />
      ) : (
        <ItemPreview todo={todo} editing={toggleEdit} />
      )}
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
