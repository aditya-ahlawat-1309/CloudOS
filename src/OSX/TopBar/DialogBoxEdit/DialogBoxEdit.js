import React from 'react'

const DialogBox = () => {
  return (
    <div    style={{
        zIndex: 6,
        position: "absolute",
        background: "rgba(255, 255, 255, 1)",
        borderRadius: "16px",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        border: "5px solid rgba(0, 0, 0, 0)",
        position: "fixed",
        left: "14%",
        transform: "translate(-35%,40%)",
        width: "15%",
        height: "100px",
        color:"black"}}>

<div style={{marginTop:"20px",marginLeft:"15px"}}>
Work in Progress
</div>
        </div>
  )
}

export default DialogBox