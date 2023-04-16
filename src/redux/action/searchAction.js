export const SET_KEYWORD = "SET_KEYWORD";
export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const SET_RESULTS = "ADD_TO_HISTORY";

export const setKeyWord = (word) => {
  return {
    type: SET_KEYWORD,
    payload: word,
  };
};
export const addToHistory = (partial) => {
  return {
    type: ADD_TO_HISTORY,
    payload: partial,
  };
};
export const setResults = (results) => {
  return {
    type: SET_RESULTS,
    payload: results,
  };
};
