import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from './../store/counterRedux';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); // automatiskai sukuria subscribe
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.up()); // grazina {type:'automatiskai sugenertuotas pavadinimas, payload:undefinder'}
  };
  const decrementHandler = () => {
    dispatch(counterActions.down());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(6));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle(4));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>Up</button>
            <button onClick={increaseHandler}>Up by...</button>
            <button onClick={decrementHandler}>Down</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
