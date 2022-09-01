import { Routes, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';

const Main = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signUp' element={<SignUp/>}></Route>
    </Routes>
  );
}

export default Main;