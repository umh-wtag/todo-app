import React from "react";

function Button({ text, create }) {
    return (
        <button onClick={()=>create()}>{text}</button>
    )
}
export default Button