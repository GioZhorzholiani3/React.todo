import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default class TodoList extends Component {
  render() {
    const {
      items,
      clearList,
      handleDelete,
      handleEdit,
      clearDoneItem,
      handleDone,
      isDone,
      clearCheckedItem,
    } = this.props;
    return (
      <ul className="todo-list">
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              isDone={isDone}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              handleDone={() => handleDone(item.id)}
              
            />
          );
        })}

        <div className="clear-btn-div">
          <button className="btn-clear-list" type="button" onClick={clearList}>
            Clear List
          </button>
        </div>
        <div className="clear-btn-div">
          <button
            className="btn-clear-done-item"
            type="button"
            onClick={clearDoneItem}
          >
            Clear Done Item
          </button>
        </div>

        <div className="clear-btn-div">
          <button
            className="btn-clear-checked-item"
            type="button"
            onClick={clearCheckedItem}
          >
            Clear Checked Item
          </button>
        </div>
      </ul>
    );
  }
}
