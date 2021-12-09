import React, { Component } from "react";

import classes from "./TodoInput.module.css";
import styles from "./Button.module.css";

export default class TOdoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem, error } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className={`${classes["form-control"]}`}>
          <label>Todo</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="add todo item..."
            value={item}
            error={error}
          />
        </div>
        <button
          type="submit"
          disabled={item ? false : true}
          className={styles.button}
        >
          {editItem ? "Edit Todo Item" : "Add Todo Item"}
        </button>
      </form>
    );
  }
}
