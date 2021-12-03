import { TOGGLE_USER_NAME_ACTION } from "./constants";

const initialState = {
  showUserName: false,
  userName: "Ashot",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_USER_NAME_ACTION: {
      return {
        ...state,
        showUserName: !state.showUserName,
      };
    }
    default:
      return state;
  }
};
