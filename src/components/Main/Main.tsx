import { Routes, Route } from 'react-router-dom';

import Auth from '@pages/Auth';
import ProfileForm from '@pages/ProfileForm';
import NotFound from '@pages/NotFound';
import Dashboard from '@pages/Dashboard';

const Main = () => {
  return (
    <Routes>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/forgot-password' element={<Auth/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/profile-form' element={<ProfileForm/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  );
}

export default Main;