import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector, useDispatch } from 'react-redux';


function App() {
const isLogged=useSelector(state => state.auth.isAuth)

  return (
    <Fragment>
      <Header />
      {!isLogged && <Auth />}
      {isLogged && <UserProfile/>}
    <Counter />
    </Fragment>
    
  );
}

export default App;
