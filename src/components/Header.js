import { useSelector,useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authAction } from '../store';

const Header = () => {
  const isAuthenicated=useSelector((state)=>state.auth.isAuthenicated)
  const dispatch=useDispatch();
  const logoutHandler=()=>{
    console.log('logout');
    dispatch(authAction.logoutApp())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
         {isAuthenicated &&
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
         <li>
         <button onClick={logoutHandler}>Logout</button>
       </li>
        </ul>
       } 
      </nav>
    </header>
  );
};

export default Header;
