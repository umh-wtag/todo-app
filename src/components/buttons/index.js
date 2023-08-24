import React from "react"
import { useDispatch } from "react-redux"
import { isAdding } from "redux/actions"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"

function Button({ text }) {
  const dispatch = useDispatch()
  const selectIsAdding = (state) => state.todos.isAdding
  const toggleIsAdding = useSelector(selectIsAdding)

  function handleClick() {
    if (text === "Create") {
      dispatch(isAdding(!toggleIsAdding))
    }
  }
  
  return <button onClick={handleClick}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button
