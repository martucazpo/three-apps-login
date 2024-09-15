import React, { createRef } from "react";
import ShoppingForm from "./ShoppingForm";
import ShoppingList from "./ShoppingList";

class Shopping extends React.Component {
  modalRef = createRef();
  render() {
    return (
      <React.Fragment>
        <h3>Shopping List</h3>
        <details ref={this.modalRef}>
          <summary>Add to List</summary>
          <ShoppingForm name="product" modalRef={this.modalRef} />
        </details>
        <ShoppingList />
      </React.Fragment>
    );
  }
}

export default Shopping;
