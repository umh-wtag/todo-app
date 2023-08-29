import React from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { deleteTodo, isEditing, markCompleted } from "redux/actions"
import ImageButton from "components/buttons/imageButton"
import {
  COMPLETE_BUTTON_ALT,
  DELETE_BUTTON_ALT,
  EDIT_BUTTON_ALT,
  IMAGE_PATHS,
} from "utils/constants"
import { calculateDate } from "utils/calculateDate"
import "components/todoButtonsContainer/todoButtonsContainer.scss"

function TodoButtonsContainer({ todo, editing }) {
  const dispatch = useDispatch()
  let daysCount = calculateDate(todo.createdAt, new Date())

  function dispatchDelete() {
    dispatch(deleteTodo(todo.id))
  }

  function dispatchEdit() {
    dispatch(isEditing(todo, !editing))
  }

  function dispatchCompleted() {
    dispatch(markCompleted(todo))
  }

  return (
    <div className="item_card__actions">
      {todo.completed === false && (
        <div className="item_card__actions--incomplete">
          <ImageButton
            icon={IMAGE_PATHS.CHECK}
            buttonAltText={COMPLETE_BUTTON_ALT}
            onClick={dispatchCompleted}
          />
          <ImageButton
            icon={IMAGE_PATHS.EDIT}
            buttonAltText={EDIT_BUTTON_ALT}
            onClick={dispatchEdit}
          />
        </div>
      )}
      <div className="item_card__actions--completed">
        <ImageButton
          icon={IMAGE_PATHS.DELETE}
          buttonAltText={DELETE_BUTTON_ALT}
          onClick={dispatchDelete}
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
