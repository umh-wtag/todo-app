import TodoButtonsContainer from "components/todoButtonsContainer"

function ItemPreview({ todo, editing }) {

  return (
    <div className="item_card">
      <h2 className={todo.completed === true ? "completed" : ""}>
        {todo.text}
      </h2>
      <div className="item_card__bottom">
        <p className="item_card__time">Created At : {todo.createdAt}</p>
        <TodoButtonsContainer todo={todo} editing={editing} />
      </div>
    </div>
  )
    
}

export default ItemPreview
