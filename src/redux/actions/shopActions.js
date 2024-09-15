import types from "../types";

const shopActions = {
  handleListChange: (target) => ({
    type: types.HANDLE_LIST_CHANGE,
    payload: target,
  }),
  addItemToList: () => ({ type: types.ADD_ITEM_TO_LIST }),
  removeItemFromList: (item) => ({
    type: types.REMOVE_ITEM_FROM_LIST,
    payload: item.id,
  }),
  prepareToExchangeItem: (item) => ({
    type: types.PREPARE_TO_EXCHANGE_ITEM,
    payload: item,
  }),
  exchangeItem: () => ({ type: types.EXCHANGE_ITEM }),
};

export default shopActions;
