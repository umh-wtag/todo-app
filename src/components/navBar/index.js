import React from "react"
import vector from "assets/Vector.png"
import "components/navBar/navBar.scss"
import search from "assets/search.png"
function NavBar() {
  return (
    <fragment className="container">
      <div className="container__logo">
        <img src={vector} alt="vector"/>
        <h1>Todos</h1>
      </div>
      <div>
        <img src={search} alt="search" />
      </div>
    </fragment>
  )
}

export default NavBar
