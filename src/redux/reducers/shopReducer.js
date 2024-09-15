import types from "../types";

let initialState = {
  product: "",
  user: {
    list: [],
  },
  editProduct: "",
  isEdit: false,
  editId: "",
};

// this.handleChange = this.handleChange.bind(this);
// this.addItemToList = this.addItemToList.bind(this);
// this.removeItemFromList = this.removeItemFromList.bind(this);
// this.prepareToExchangeItem = this.prepareToExchangeItem.bind(this);
// this.exchangeItem = this.exchangeItem.bind(this);

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
