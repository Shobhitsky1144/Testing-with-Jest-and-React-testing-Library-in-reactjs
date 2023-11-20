import React, { useState } from 'react'

const ButtonTesting = () => {
    const [data, setData] = useState("")
  return (
    <div><h2>Button testing</h2>
    <h2>{data}</h2>
    <button onClick={()=>setData("updated")}>Update data</button></div>
  )
}

export default ButtonTesting