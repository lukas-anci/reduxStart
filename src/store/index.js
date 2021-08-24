import { createStore } from 'redux';

const initialCounterState = { counter: 0 };

// reducer fn
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case 'UP':
      return {
        counter: state.counter + 1,
      };
    case 'DOWN':
      return {
        counter: state.counter - 1,
      };
    case 'UP_BY':
      return {
        counter: state.counter + action.amount,
      };

    default:
      return state;
  }
};
// store
const store = createStore(counterReducer);

export default store;
