import React, { Component } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: Math.random().toString(),
    item: "",
    editItem: false,
    isDone: false,
    error: "",
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    let todoArray = [...this.state.items];

    if (!todoArray.includes(newItem)) {
      todoArray.push(newItem);
      this.setState(
        {
          items: todoArray,
          item: "",
          id: Math.random().toString(),
          editItem: false,
          error: "",
        },
        () => console.log(this.state)
      );
    } else {
      this.setState({ error: "ასეთი თასქი უკვე არსებობს" });
    }
    // const updatedItems = [...this.state.items, newItem];

    // this.setState({
    //   items: updatedItems,
    //   item: "",
    //   id: Math.random().toString(),
    //   editItem: false,
    // },()=>console.log(this.state));
  };
  handleDone = (id) => {
    let todoArray = [...this.state.items];
    const selectedItem = this.state.items.find((item) => item.id === id);
    if (!todoArray.includes(selectedItem.id)) {
      this.setState(
        {
          items: todoArray,
          item: "",
          id: id,
          editItem: false,
          isDone: true,
        },
        () => console.log(this.state)
      );
    }
  };
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState(
      {
        items: filteredItems,
        item: selectedItem.title,
        id: id,
        editItem: true,
        isDone: false,
      },
      () => console.log(this.state)
    );
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  clearDoneItem = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id === id);
    if (this.state.isDone === true) {
      this.setState({
        items: filteredItems,
      });
    }
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };
  render() {
    return (
      <div>
        <section id="todos-form">
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
            error={this.state.error}
          />
        </section>

        <section id="todos">
          <TodoList
            items={this.state.items}
            isDone={this.state.isDone}
            handleDelete={this.handleDelete}
            handleDone={this.handleDone}
            handleEdit={this.handleEdit}
            clearList={this.clearList}
            clearDoneItem={this.clearDoneItem}
          />
        </section>
      </div>
    );
  }
}

export default App;
