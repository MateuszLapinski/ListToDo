import React from "react";
import ToDoItem from './ToDoItem'

class ToDo extends React.Component{

    state= {
        elements: [
            {id: '1', isCompleted: true, title: 'Zrobić Zakupy'},
            {id: '2', isCompleted: false, title: 'Zrobić pranie'}
        ],
        inputValue: ''
    }

    markCompleted(id){
        const index =this.state.elements.findIndex(x => x.id ==id);
        const newElements =this.state.elements
                newElements[index].isCompleted=true;

        this.setState({elements:newElements})
    }

    addItem(){
        const item= {
            id: Math.random(),
            title: this.state.inputValue
        }
        const newElements=[item, ...this.state.elements]
        this.setState({elements:newElements})
    }
    inputHander(event) {
        const newValue=event.target.value
        this.setState({inputValue: newValue})
    }
    render(){
        const elements =this.state.elements.map(e =>{
            return <ToDoItem element={e} markClicked={this.markCompleted.bind(this)}/>
        })
        return(
            <div>
                ToDo app
                <input type="text" value={this.state.inputValue} onChange={this.inputHander.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
                {elements}
            </div>
        )
    }
}
export default ToDo;