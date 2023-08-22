import React from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, markCompleted } from "redux/actions"
import PropTypes from "prop-types"
import "components/todoButtonsContainer/todoButtonsContainer.scss"
import {
  COMPLETE_BUTTON_ALT,
  DELETE_BUTTON_ALT,
  EDIT_BUTTON_ALT,
  IMAGE_PATHS,
} from "utils/constants"
import { calculateDate } from "utils/calculateDate"

function TodoButtonsContainer({ todo }) {
  const dispatch = useDispatch()
  const days = calculateDate(todo.createdAt)

  return (
    <div className="item_card__actions">
      {todo.completed === false && (
        <div className="item_card__actions--incomplete">
          <img
            src={IMAGE_PATHS.CHECK}
            alt={COMPLETE_BUTTON_ALT}
            className="item_card__actions__img"
            onClick={() => dispatch(markCompleted(todo.text))}
          />
          <img
            src={IMAGE_PATHS.EDIT}
            alt={EDIT_BUTTON_ALT}
            className="item_card__actions__img"
          />
        </div>
      )}
      <div className="item_card__actions--completed">
        <img
          src={IMAGE_PATHS.DELETE}
          alt={DELETE_BUTTON_ALT}
          className="item_card__actions__img"
          onClick={() => dispatch(deleteTodo(todo.text))}
        />
        {todo.completed === true && (
          <p>
            Completed in {days} {days > 1 ? "days" : "day"}{" "}
          </p>
        )}
      </div>
    </div>
  )
}

TodoButtonsContainer.prototypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoButtonsContainer
