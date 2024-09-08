import React, { createRef } from "react";
import ShoppingForm from "./ShoppingForm";
import ShoppingList from "./ShoppingList";

class Shopping extends React.Component {
  modalRef = createRef();
  constructor() {
    super();
    this.state = {
      product: "",
      user: {
        list: [],
      },
      editProduct: "",
      isEdit: false,
      editId: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItemToList = this.addItemToList.bind(this);
    this.removeItemFromList = this.removeItemFromList.bind(this);
    this.prepareToExchangeItem = this.prepareToExchangeItem.bind(this);
    this.exchangeItem = this.exchangeItem.bind(this);
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }
  addItemToList(e) {
    e.preventDefault();
    this.modalRef.current.open = false;
    let newItem = {
      id: crypto.randomUUID(),
      product: this.state.product,
    };
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        list: [newItem, ...this.state.user.list],
      },
      product: "",
    });
  }
  removeItemFromList(item) {
    let allTheOthers = this.state.user.list.filter(
      (prod) => prod.id !== item.id,
    );
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        list: allTheOthers,
      },
    });
  }
  prepareToExchangeItem(item) {
    this.setState({
      ...this.state,
      editId: item.id,
      editProduct: item.product,
      isEdit: true,
    });
  }
  exchangeItem(e) {
    e.preventDefault();
    let youveChanged = this.state.user.list.map((item) => {
      if (item.id === this.state.editId) {
        item.product = this.state.editProduct;
      }
      return item;
    });
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        list: youveChanged,
      },
      editId: "",
      editProduct: "",
      isEdit: false,
    });
  }
  render() {
    return (
      <React.Fragment>
        <h3>Shopping List</h3>
        <details ref={this.modalRef}>
          <summary>Add to List</summary>
          <ShoppingForm
            handleChange={this.handleChange}
            handleSubmit={this.addItemToList}
            state={this.state}
            name="product"
          />
        </details>
        <ShoppingList
          handleChange={this.handleChange}
          prepareToExchangeItem={this.prepareToExchangeItem}
          handleSubmit={this.exchangeItem}
          removeItemFromList={this.removeItemFromList}
          state={this.state}
        />
      </React.Fragment>
    );
  }
}

export default Shopping;
