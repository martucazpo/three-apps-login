import types from "../types";
import sentences from "../../add-libs/sentences";

const addlibActions = {
  handleLibsChange: (target) => ({
    type: types.HANDLE_LIBS_CHANGE,
    payload: target,
  }),
  addFood: (event) => ({ type: types.ADD_FOOD, payload: event }),
  makeSentence: () => ({ type: types.MAKE_SENTENCE, payload: sentences }),
};

export default addlibActions;
