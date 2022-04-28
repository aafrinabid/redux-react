import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile'


function App() {
  const isAuthenicated=useSelector(state=>state.auth.isAuthenicated);
  return (
    <Fragment>
      <Header />
      {!isAuthenicated&&<Auth />}
      {isAuthenicated&& <UserProfile />}
    <Counter />
    </Fragment>
  );
}

export default App;
