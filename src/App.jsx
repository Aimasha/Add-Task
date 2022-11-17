import "./styles.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./component/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid()
      },
      tasks: []
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: uniqid()
      }
    });
    console.log(this.state.task);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid()
      }
    });
    console.log(this.state.tasks);
  };

  handleDelete = (id) => {
    const filtered = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: filtered
    });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={task.text} type="text" />
          <button type="submit">Add task</button>
        </form>
        <Overview tasks={tasks} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
