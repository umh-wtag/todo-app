import React from "react"
import { BRAND_LOGO, SEARCH_ALT, LOGO, ICON_SEARCH } from "utils/constants"
import "components/navBar/navBar.scss"

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container__logo">
        <img src={BRAND_LOGO} alt={LOGO} />
        <h1>Todos</h1>
      </div>
      <div>
        <img src={ICON_SEARCH} alt={SEARCH_ALT} />
      </div>
    </div>
  )
}

export default NavBar
