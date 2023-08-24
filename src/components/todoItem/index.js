import React from "react"
import PropTypes from "prop-types"
import TodoButtonsContainer from "components/todoButtonsContainer"
import "components/todoItem/todoItem.scss"

function TodoItem({ todo }) {
  
  return (
    <div className="item_card">
      <h2 className={todo.completed === true ? "completed" : ""}>
        {todo.text}
      </h2>
      <div className="item_card__bottom">
        <p className="item_card__time">
          Created At : {todo.createdAt.creationDate}
        </p>
        <TodoButtonsContainer todo={todo} />
      </div>
    </div>
  )
}

TodoItem.prototypes = {
  todo: PropTypes.object.isRequired,
}
export default TodoItem
