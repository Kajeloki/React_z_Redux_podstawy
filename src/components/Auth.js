import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import { Fragment } from 'react';

const Auth = () => {
  const isLogged = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch();
  const submitHandler = (event)=>{
    event.preventDefault();
    console.log(isLogged);
    dispatch(authActions.login());
  };


 
  return <main className={classes.auth}>
      <section>
        <form >
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={submitHandler}>Login</button>
        </form>
      </section>
    </main>
    

  };
export default Auth;
