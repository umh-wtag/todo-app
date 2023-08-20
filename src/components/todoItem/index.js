import React from "react"
import "components/todoItem/todoItem.css"
import pencil from "assets/pencil.png"
import trash from "assets/trash.png"
import check from "assets/checkmark.png"

function TodoItem({ todo }) {
  return (
    <main className="todo_card">
      <h1>{todo.text}</h1>
      <p className="todo_card__time"> Created At : {todo.createdAt}</p>
      <div className="todo_card__actions">
        <img src={check} alt="Done" className="todo_card__actions__img" />
        <img src={pencil} alt="Edit" className="todo_card__actions__img" />
        <img src={trash} alt="Delete" className="todo_card__actions__img" />
      </div>
    </main>
  )
}

export default TodoItem
