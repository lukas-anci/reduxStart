import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import counterReducer from './counterRedux';
import authReducer from './authRedux';

// reducer fn
// const counterReducer = (state = initialCounterState, action) => {
//   switch (action.type) {
//     case 'UP':
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case 'DOWN':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case 'UP_BY':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case 'TOGGLE':
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };

//     default:
//       return state;
//   }
// };
// store
// const store = createStore(counterReducer);

// export store for use
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
// console.log(counterSlice.actions); // visi musu aprasyti veiksmai

export default store;
