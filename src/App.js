
import {v4 as uuidv4} from "uuid"
import TodoItem from './Components/TodoItem';
import ErrorModal from "./Components/ErrorModal";
import React,{useState} from "react"
import './App.css';


function App() {
const [todo,setTodo]=useState([])
const [text,setText]=useState("")
const [date,setDate]=useState("")
const [time,setTime]=useState("")
const [error,setError]=useState("")
const [active,setActive]=useState(false)




const onChangeDate=(event)=> {
  setDate(event.target.value)
}

const onChangeTime=(event)=> {
  setTime(event.target.value)
}




const onChangeTextElement=(event)=> {
  setText(event.target.value)
}

const onSubmitButton=(event)=>{
  event.preventDefault()
  
 if (text.trim().length===0 ||date.trim().length===0 || time.trim().length===0 ){
  setError( {
    title: 'Invalid input',
    message: 'Please enter a valid name and date and time (non-empty values).',
  });
  return;
} else {
  setActive(true)
}
  
  
  const newTodoList={
    id:uuidv4() , 
    text:text ,
    date:date,
    time:time
  }
  setTodo(prevState=>(
    [...prevState,newTodoList]

  ))
  setText("")
  setDate("")
  setTime("")
}

const deleteItem=(id)=>{
  setTodo(todo.filter(eachItem=>(
    eachItem.id!==id
  )))
}

const errorHandler = () => {
  setError(null);
};


  return (
    <div className="container">
      <center> 
        {error && 
        <ErrorModal title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />  
      }
        
        <h1 className="title">TODO LIST</h1> <br/>
      <p className="paragraph">Each day I will accomplish one thing on my to do list <br/> - <span className='span'>Lailah Gifty Akita</span> </p>
      <form onSubmit={onSubmitButton} className='form'>
      <label className='labelText' htmlFor='inputText'>Tasks</label> <br/>
      
  <input className="textInput" id = "inputText" type="text" placeholder='Enter Task Here' style={{width:"300px" , height:"30px" , borderRadius:"10px", borderWidth:"0px"}} onChange={onChangeTextElement} value={text} /> <br/>
      <input className='dateInput'  onChange={onChangeDate} type="date" style={{width:"300px" , height:"30px" , borderRadius:"10px", borderWidth:"0px",marginTop:"10px",marginLeft:"50px"}}  value={date} />
      <input className='timeInput'  onChange={onChangeTime} type="time" style={{width:"300px" , height:"30px" , borderRadius:"10px", borderWidth:"0px",marginTop:"10px",marginLeft:"50px"}}  value={time} />
      <button className='butttonElement button-85'  role="button" type="submit">ADD</button>
      </form>
      </center>
      <h1 className='heading'>Your Tasks</h1>
      
      <ul className='todo-list'>
     {active &&
       todo.map(eachTodo => (
          <TodoItem key={eachTodo.id}
          eachTodoDetails={eachTodo}
          deleteItem={deleteItem} />
        ))
        }
      
      
        
      </ul>
    </div>
  );



  

      }
export default App;
