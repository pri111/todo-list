import React from 'react';
import './App.css';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';

export class App extends React.Component<{}, {toDoItems: ToDoItem[]}> {
  private toDoItems: ToDoItem[] = [];
  private ITEMS_KEY = "toDoItems";

  constructor() {
    super({});
    this.toDoItems = JSON.parse(window.localStorage.getItem(this.ITEMS_KEY) as string);
    this.state = {toDoItems: this.toDoItems};
  }

  render() {
    return (
      <ToDoList totalTasks={0} toDoItems={this.state.toDoItems} addTask={this.addTask} ></ToDoList>
    );
  }

  public addTask = (value: string) => {
    this.toDoItems = this.toDoItems.concat(new ToDoItem({value, uuid: crypto.randomUUID()}));
    window.localStorage.setItem(this.ITEMS_KEY, JSON.stringify(this.toDoItems));
    this.setState({toDoItems: this.toDoItems});
  }
}

export default App;
