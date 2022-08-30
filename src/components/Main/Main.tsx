import { Routes, Route } from 'react-router-dom';

import Login from '../../pages/Login';

const Main = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signUp' element={<Login/>}></Route>
    </Routes>
  );
}

export default Main;