import React from 'react'
const ToDoItem =props => {
    return (
    <div className={`card ${props.element.isCompleted? 'completed' :''}`} key={props.element.id}>
        <h2>{props.element.title}</h2>
        <button onClick={()=>props.markClicked(props.element.id)}>Zakończone</button>
        
    </div>
)} 
export default ToDoItem