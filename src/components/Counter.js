import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showC = useSelector(state => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({type: 'toogle'})
    console.log(showC);
  };
  const incHandler = () =>{
    dispatch({type: 'inc'});
  }
  const decHandler = () =>{
    dispatch({type: 'dec'});
  }
  const increaseHandler = () =>{
    dispatch({type: 'ince', amount: 5});
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
