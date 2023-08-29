import TodoButtonsContainer from "components/todoButtonsContainer"
import "components/itemPreview/itemPreview.scss"

function ItemPreview({ todo, editing }) {

  return (
    <div className="item_card_preview">
      <h2 className={todo.completed === true ? "completed" : ""}>
        {todo.text}
      </h2>
      <div className="item_card_preview__bottom">
        <p className="item_card_preview__time">Created At : {todo.createdAt}</p>
        <TodoButtonsContainer todo={todo} editing={editing} />
      </div>
    </div>
  ) 
}

export default ItemPreview
