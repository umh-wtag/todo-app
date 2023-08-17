import React from "react";
import styles from './FilterButton.module.css'

function FilterButtons() {
    return (
      <div className={styles.filterButtons}>
        <button>All</button>
        <button>Incomplete</button>
        <button>Complete</button>
      </div>
    )
}
export default FilterButtons