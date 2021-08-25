import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// naudojant toolkit mes kuriam createSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    up(state) {
      state.counter++; // automatiskai paverciama i nemutuojancia sintakse naudojant immer
    },
    down(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
