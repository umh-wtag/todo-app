import React from "react"
import vector from "../../utils/Vector.png"
import styles from "./appBar.module.css"
import search from "../../utils/search.png"
function NavBar() {
  return (
    <main className={styles.container}>
      <div className={styles.logo}>
        <img src={vector} alt="vector" className={styles.img} />
        <h1>Todos</h1>
      </div>
      <div>
        <img src={search} alt="search" />
      </div>
    </main>
  )
}

export default NavBar
