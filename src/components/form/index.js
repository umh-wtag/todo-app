import React from "react";
import styles from "./form.module.css"
import check from "../../utils/checkmark.png"

function Form() {
    return (
      <main className={styles.card}>
        <form className={styles.container}>
          <input type="text"/>
          <div className={styles.actions}>
            <img src={check} alt="Done" className={styles.img} />
          </div>
        </form>
      </main>
    )
}

export default Form