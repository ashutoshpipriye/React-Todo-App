import React from 'react'

function Todo(props){
    const completedStyle={
        color: "#cdcdcd",
        textDecorartion:"line-through"
    }
    return(
        <div className="todo-item">
            <input type="checkbox" 
            onChange={()=>props.handleChange(props.item.id)}
            checked = {props.item.complete}></input>
            <p style={props.item.complete ? completedStyle: null}>{props.item.text}</p>
        </div>
    )
}

export default Todo
