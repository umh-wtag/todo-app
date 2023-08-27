import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { isAdding } from "redux/actions"
import { useSelector } from "react-redux"

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
