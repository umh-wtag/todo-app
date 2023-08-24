import React from "react"
import PropTypes from "prop-types"
import "components/buttons/imageButton/imageButton.scss"

function ImageButton({ icon, buttonAltText , onClick}) {

  return (
    <button className="image_button" onClick={onClick}>
      <img src={icon} alt={buttonAltText} />
    </button>
  )
}

ImageButton.defaultProps = {
  onClick: ()=>{}
}

ImageButton.propTypes = {
  icon: PropTypes.string.isRequired,
  buttonAltText: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ImageButton
