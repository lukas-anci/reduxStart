import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter); // automatiskai sukuria subscribe

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'UP' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'DOWN' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Up</button>
        <button onClick={decrementHandler}>Down</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
