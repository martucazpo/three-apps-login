import types from "../types";

let initialState = {
  user: {
    foods: {
      proteins: [],
      sides: [],
      vegetables: [],
    },
  },
  protein: "",
  side: "",
  vegetable: "",
  sentence: "",
  alprotein: "",
  alvegetable: "",
  alside: "",
};

const addlibReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_LIBS_CHANGE:
      let { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    case types.ADD_FOOD:
      let key = action.payload.target.childNodes[1].name;
      return {
        ...state,
        user: {
          ...state.user,
          foods: {
            ...state.user.foods,
            [key + "s"]: [state[key], ...state.user.foods[key + "s"]],
          },
        },
        [key]: "",
      };
    case types.MAKE_SENTENCE:
      let random =
        action.payload[Math.floor(Math.random() * action.payload.length)];
      random = random
        .replace("XXproteinXX", state.alprotein)
        .replace("XXvegetableXX", state.alvegetable)
        .replace("XXsideXX", state.alside);
      return {
        ...state,
        sentence: random,
      };
    default:
      return state;
  }
};

export default addlibReducer;

// this.handleChange = this.handleChange.bind(this);
// this.addFood = this.addFood.bind(this);
// this.makeSentence = this.makeSentence.bind(this);
