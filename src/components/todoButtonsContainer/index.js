import React from "react"
import { useDispatch } from "react-redux"
import { deleteTodo} from "redux/actions"
import PropTypes from "prop-types"
import ImageButton from "components/buttons/imageButton"
import {
  COMPLETE_BUTTON_ALT,
  DELETE_BUTTON_ALT,
  EDIT_BUTTON_ALT,
  IMAGE_PATHS,
} from "utils/constants"
import "components/todoButtonsContainer/todoButtonsContainer.scss"

function TodoButtonsContainer({ todo }) {
  const dispatch = useDispatch()
  
  return (
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
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
    </div>
  )
}

TodoButtonsContainer.prototypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoButtonsContainer
