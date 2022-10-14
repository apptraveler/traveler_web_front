import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@routeGuard/PrivateRoute';
import AuthRoute from '@routeGuard/AuthRoute';

import Auth from '@pages/Auth';
import ProfileForm from '@pages/ProfileForm';
import NotFound from '@pages/NotFound';
import Dashboard from '@pages/Dashboard';

import { useSelector } from 'react-redux'

const Main = () => {
  const authToken = useSelector((state: any) => state.auth.token)

  return (
    <Routes>
      <Route
        path='/auth'
        element={
          <AuthRoute token={authToken}>
            <Auth/>
          </AuthRoute>
        }
      />
      <Route
        path='/forgot-password'
        element={
          <AuthRoute token={authToken}>
            <Auth/>
          </AuthRoute>
        }
      />
      <Route
        path='/dashboard'
        element={
          <PrivateRoute token={authToken}>
            <Dashboard/>
          </PrivateRoute>
        }
      />
      <Route
        path='/profile-form'
        element={
          <PrivateRoute token={authToken}>
            <ProfileForm/>
          </PrivateRoute>
        }
      />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default Main;