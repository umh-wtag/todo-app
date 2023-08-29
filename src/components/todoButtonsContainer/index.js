import React from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, markCompleted } from "redux/actions"
import PropTypes from "prop-types"
import ImageButton from "components/buttons/imageButton"
import {
  COMPLETE_BUTTON_ALT,
  DELETE_BUTTON_ALT,
  EDIT_BUTTON_ALT,
  IMAGE_PATHS,
} from "utils/constants"
import { calculateDate } from "utils/calculateDate"
import "components/todoButtonsContainer/todoButtonsContainer.scss"

function TodoButtonsContainer({ todo }) {
  const dispatch = useDispatch()
  let daysCount = calculateDate(todo.createdAt, new Date())

  return (
    <div className="item_card__actions">
      {todo.completed === false && (
        <div className="item_card__actions--incomplete">
          <ImageButton
            icon={IMAGE_PATHS.CHECK}
            buttonAltText={COMPLETE_BUTTON_ALT}
            onClick={() => dispatch(markCompleted(todo))}
          />
          <ImageButton
            icon={IMAGE_PATHS.EDIT}
            buttonAltText={EDIT_BUTTON_ALT}
          />
        </div>
      )}
      <div className="item_card__actions--completed">
        <ImageButton
          icon={IMAGE_PATHS.DELETE}
          buttonAltText={DELETE_BUTTON_ALT}
          onClick={() => dispatch(deleteTodo(todo))}
        />
        {todo.completed === true && (
          <p>Completed in {daysCount < 1 ? "1 day" : `${daysCount} days`}</p>
        )}
      </div>
    </div>
  )
}

TodoButtonsContainer.prototypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoButtonsContainer
