import React from "react";
import { ToDoItem } from "./ToDoItem";

export interface ToDoListProps  {
    totalTasks: number;
    completedTasks?: number;
    toDoItems: ToDoItem[]
    addTask: (value: string) => void;
}

export interface ToDoListState {
    addTaskValue: string;
}
  
export class ToDoList extends React.Component<ToDoListProps, ToDoListState> {
    constructor(props: ToDoListProps) {
        super(props);
        this.state = {addTaskValue: ""};
    }

    render() {
        return (
            <div className="App">
                <div className="toDoHeader">TO-DO LIST</div>
                <input 
                    type="text" 
                    placeholder='Add Task'
                    value={this.state.addTaskValue}
                    onKeyDown={this.onKeyDownHandler} 
                    onChange={this.onAddTaskChange}
                    className="newTaskInput"
                />
                {this.props.toDoItems.map(element => {
                    return(<ToDoItem value={element.props.value} uuid={element.props.uuid}/>);
                })}
            </div>
        )
    }

    onAddTaskChange = (event: any) => {
        this.setState({addTaskValue: event.target.value});
    }

    onKeyDownHandler = (event: any) => {
        if(event.key !== 'Enter'){
            return;
        }
        event.preventDefault();
        this.props.addTask(event.target.value);
        this.setState({addTaskValue: ""});
    }
}