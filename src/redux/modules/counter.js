// 초기 상태값
const initialState = {
  number: 0,
};

// const PLUS_ONE = "PLUS_ONE";
// const MINUS_ONE = "MINUS_ONE";
const ADD_NUMBER = "ADD_NUMBER";
const REMOVE_NUMBER = "REMOVE_NUMBER";

export const addNumber = payload => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const removeNumber = payload => {
  return {
    type: REMOVE_NUMBER,
    payload,
  };
};

// 리듀서(함수) - 변화를 일으키는 함수(값을 변화시키는 등등..)
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case REMOVE_NUMBER:
      return {
        number: state.number - action.payload,
      };

    default:
      return state;
    // break;
  }
};
export default counter;
