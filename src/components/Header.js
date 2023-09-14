import classes from './Header.module.css';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
  const isLogged = useSelector(state => state.auth.isAuth);
  const dispatch=useDispatch();
  const logoutHandler =()=>{
    console.log(isLogged);
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {isLogged && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
