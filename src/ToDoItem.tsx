import React from "react";

export interface ToDoProps {
    value: string;
    uuid: string;
}

export interface ToDoState {
    isComplete: boolean
}

export class ToDoItem extends React.Component<ToDoProps, ToDoState> {
    constructor(props: ToDoProps) {
        super(props);
        this.state = {isComplete: false};
    }
    render() {
        return (
            <div className="toDoItem" key={this.props.uuid} >
                <input
                    type={"checkbox"}
                    checked={this.state.isComplete}
                    onChange={this.onToggle}
                    className="checkboxToDoItem"
                />
                <p className={this.state.isComplete? "textToDoItemCompleted": "textToDoItemActive"}>{this.props.value}</p>
            </div>
        )
    }

    onToggle = (event: any) => {
        this.setState({isComplete: !this.state.isComplete})
    }
}