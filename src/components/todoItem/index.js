import React from "react"
import PropTypes from "prop-types"
import ImageButton from "components/buttons/imageButton"
import "components/todoItem/todoItem.scss"
import {
  COMPLETE_BUTTON_ALT,
  DELETE_BUTTON_ALT,
  EDIT_BUTTON_ALT,
  IMAGE_PATHS,
} from "utils/constants"

function TodoItem({ todo }) {
  
  return (
    <div className="item_card">
      <h2>{todo.text}</h2>
      <div className="item_card__bottom">
        <p className="item_card__time"> Created At : {todo.createdAt}</p>
        <div className="item_card__actions">
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
