import React, { Component } from "react";
import "./Item.css";

export default class TodoItem extends Component {
  state = {
    id: Math.random().toString(),
    isChecked: false,
  };

  // handleDone = (id) => {
  //   let todoArray = [...this.state.items];
  //   const selectedItem = this.state.items.find((item) => item.id === id);
  //   if (!todoArray.includes(selectedItem.id)) {
  //     this.setState(
  //       {
  //         items: todoArray,
  //         item: "",
  //         id: id,
  //         editItem: false,
  //         isDone: true,
  //       },
  //       () => console.log(this.state)
  //     );
  //   }
  // };

  handleChecked = (id) => {
    this.setState({
      isChecked: true,
    });
  };

  render() {
    const { title, handleDelete, handleEdit, handleDone, isDone } = this.props;
    return (
      <li className={!isDone ? "todo-item" : "todo-item-done"}>
        <h6>{title}</h6>
        <div className="btn-div">
          <input type="checkbox" onClick={this.handleChecked} />
          <button
            disabled={isDone ? true : false}
            className="button-is-done"
            onClick={handleDone}
          >
            {isDone ? "finished" : "is done"}
          </button>
          <button className="button-edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="button-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}
