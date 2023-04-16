import {
  RESET_HOME_CONTENT,
  SET_HOME_CONTENT,
  SET_LIKED,
  SET_RANDOM_QUERY,
  UNSET_LIKED,
} from "../action/userAction";

const initialState = {
  firstName: "Antonio",
  lastName: "Cancemi",
  searchQuery: "",
  likedSongs: [0, 985745702],
  homeContent: [[], [], []],
  randomArtists: {
    rockArtists: [
      "queen",
      "u2",
      "thepolice",
      "eagles",
      "thedoors",
      "oasis",
      "thewho",
      "bonjovi",
    ],
    popArtists: [
      "maroon5",
      "coldplay",
      "onerepublic",
      "jamesblunt",
      "katyperry",
      "arianagrande",
    ],
    hipHopArtists: [
      "eminem",
      "snoopdogg",
      "lilwayne",
      "drake",
      "kanyewest",
      "XXXTENTACION",
    ],
  },
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKED:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };
    case UNSET_LIKED:
      return {
        ...state,
        likedSongs: [
          ...state.likedSongs.slice(0, action.payload),
          ...state.likedSongs.slice(action.payload, state.likedSongs.length),
        ],
      };
    case SET_HOME_CONTENT:
      return {
        ...state,
        homeContent: [...state.homeContent, action.payload],
      };
    case RESET_HOME_CONTENT:
      return {
        ...state,
        homeContent: action.payload,
      };
    case SET_RANDOM_QUERY:
      return {
        ...state,
        randomQuery: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
