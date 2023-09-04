import React from "react"
import PropTypes from "prop-types"
import "components/buttons/imageButton/imageButton.scss"

function ImageButton({ icon, buttonAltText , onClick}) {

  return (
    <button className="image-button" onClick={onClick}>
      <img src={icon} alt={buttonAltText} />
    </button>
  )
}

ImageButton.defaultProps = {
  onClick: function(){}
}

ImageButton.propTypes = {
  icon: PropTypes.string.isRequired,
  buttonAltText: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ImageButton
