import React from 'react'
import "./index.css"

 const ErrorModal = (props) => {
  return (
    <div className='error backdrop card modal ' onClick={props.onConfirm}>
        <h2>{props.title}</h2>
       
        <div className="error-messagae">
          <p>{props.message}</p>
        </div>
        
          <button className="button" type="button" onClick={props.onConfirm}>Okay</button>
       

    </div>
  )
}
export default ErrorModal