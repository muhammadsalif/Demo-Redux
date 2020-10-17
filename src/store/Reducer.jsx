let initialState = {
  counter: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, counter: state.counter + 1 };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case "INCREMENT_BY": {
      return { ...state, counter: state.counter + Number(action.payload.val) };
    }
    case "DECREMENT_BY": {
      return { ...state, counter: state.counter - Number(action.payload.val) };
    }

    default: {
      return state;
    }
  }
};
