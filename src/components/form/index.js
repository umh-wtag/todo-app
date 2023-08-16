import React ,{useState} from "react";
import styles from "./form.module.css"
import check from "../../utils/checkmark.png"
import { useDispatch} from "react-redux";
import { AddNewTodo } from "../../redux/actions";

function Form() {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(AddNewTodo(task))
    setTask('')
  }
    return (
      <main className={styles.card}>
        <form className={styles.container}>
          <input type="text"
            name="body"
            placeholder="Add Todo"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
          />
          <div className={styles.actions} onClick={handleSubmit}>
            <img src={check} alt="Done" className={styles.img} />
          </div>
        </form>
      </main>
    )
}

export default Form