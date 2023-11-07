import React, { useState } from 'react'

const Mode = () => {
    const [mode , setMode] = useState(true);
    const handel = () => {
        setMode(!mode)
    }
  return (
    <>
        <div style={{backgroundColor : mode ? 'White' : 'black' , height : '40rem'}}>
            <button onClick={handel}>{mode ? "light" : "Dark"}</button>
        </div>   
    </>
  )
}

export default Mode