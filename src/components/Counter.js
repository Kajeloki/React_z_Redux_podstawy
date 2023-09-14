import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showC = useSelector(state => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
    console.log(showC);
  };
  const incHandler = () =>{
    dispatch(counterActions.increment());
  }
  const decHandler = () =>{
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () =>{
    dispatch(counterActions.increase(5));
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showC===true &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>Dodaj</button>
        <button onClick={increaseHandler}>Dodaj kilka</button>
        <button onClick={decHandler}>Odejmij</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
