import React from "react"
import { useDispatch } from "react-redux"
import { deleteTodo } from "redux/actions"
import PropTypes from "prop-types"
import ImageButton from "components/buttons/imageButton"
import {
  COMPLETE_BUTTON_ALT,
  DELETE_BUTTON_ALT,
  EDIT_BUTTON_ALT,
  IMAGE_PATHS,
} from "utils/constants"
import "components/todoItem/todoItem.scss"

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  return (
    <div className="item-card">
      <h2>{todo.text}</h2>
      <div className="item-card__content">
        <p className="item-card__time"> Created At : {todo.createdAt}</p>
        <div className="item-card__actions">
          <ImageButton
            icon={IMAGE_PATHS.CHECK}
            buttonAltText={COMPLETE_BUTTON_ALT}
          />
          <ImageButton
            icon={IMAGE_PATHS.EDIT}
            buttonAltText={EDIT_BUTTON_ALT}
          />
          <ImageButton
            icon={IMAGE_PATHS.DELETE}
            buttonAltText={DELETE_BUTTON_ALT}
            onClick={() => dispatch(deleteTodo(todo.text))}
          />
        </div>
      </div>
    </div>
  )
}

TodoItem.prototypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem
