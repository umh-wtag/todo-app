import React from "react"
import PropTypes from "prop-types"
import classnames from 'classnames'
import TodoButtonsContainer from "components/todoButtonsContainer"
import "components/todoItem/todoItem.scss"

function TodoItem({ todo }) {
  
  return (
    <div className="item_card">
      <h2 className={classnames({'completed': todo.completed})}>
        {todo.text}
      </h2>
      <div className="item_card__bottom">
        <p className="item_card__time">
          Created At : {todo.createdAt}
        </p>
        <TodoButtonsContainer todo={todo} />
      </div>
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
