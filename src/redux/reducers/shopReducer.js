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

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_LIST_CHANGE:
      let { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    case types.ADD_ITEM_TO_LIST:
      let newItem = {
        id: crypto.randomUUID(),
        product: state.product,
      };
      return {
        ...state,
        user: {
          ...state.user,
          list: [newItem, ...state.user.list],
        },
        product: "",
      };
    case types.REMOVE_ITEM_FROM_LIST:
      let allTheOthers = state.user.list.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        user: {
          ...state.user,
          list: allTheOthers,
        },
      };
    case types.PREPARE_TO_EXCHANGE_ITEM:
      return {
        ...state,
        editProduct: action.payload.product,
        editId: action.payload.id,
        isEdit: true,
      };
    case types.EXCHANGE_ITEM:
      let youveChanged = state.user.list.map((item) => {
        if (item.id === state.editId) {
          item.product = state.editProduct;
        }
        return item;
      });
      return {
        ...state,
        user: {
          ...state.user,
          list: youveChanged,
        },
        editProduct: "",
        isEdit: false,
        editId: "",
      };
    default:
      return state;
  }
};

export default shopReducer;
