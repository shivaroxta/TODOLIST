import React from 'react'
import "./index.css"


 const TodoItem = (props) => {
    const {eachTodoDetails,deleteItem}=props 
    const{id,text,date,time}=eachTodoDetails

const onClickDelete=()=>{
    deleteItem(id)
}


  return (
    


    <li className='bg-container corners corners--slanted'>
       <div className='taskValue'>
       <div class="checkbox-wrapper-15">
 

 <input className="inp-cbx" id="cbx-15" type="checkbox" style={{display: "none"}}/>
<label className="cbx" htmlFor="cbx-15">
<span>
 <svg width="12px" height="9px" viewbox="0 0 12 9">
   <polyline points="1 5 4 8 11 1"></polyline>
 </svg>
</span>
<span>

 {text}
</span>
</label>
</div>
       
         <button type="button" className='buttonDelete' onClick={onClickDelete} ><img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png " alt="delete" className="imgDelete" /></button>
         </div>
        <p className="date">{date}</p>
        <p className="time">{time}</p>
       

    </li>
  )
}
export default TodoItem