import React from "react";

export default function Arrow(props) {
  return <div style={{
    display: "flex",
    justifyContent: "center",
    background: "white"
  }}>
    <i style={{fontSize: "50px", color: props.color}}
       className="fas fa-arrow-down"/>
  </div>
}
