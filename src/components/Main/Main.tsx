import { Routes, Route } from 'react-router-dom';

import Auth from '../../pages/Auth';

const Main = () => {
  return (
    <Routes>
      <Route path='/auth' element={<Auth/>}></Route>
    </Routes>
  );
}

export default Main;