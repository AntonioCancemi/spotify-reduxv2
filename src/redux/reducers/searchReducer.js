import {
  ADD_TO_HISTORY,
  SET_KEYWORD,
  SET_RESULTS,
} from "../action/searchAction";

const initialState = {
  keyWord: "",
  history: [],
  results: [],
};
const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return {
        ...state,
        keyWord: action.payload,
      };
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};
export default SearchReducer;
