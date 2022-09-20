import classes from './index.module.scss'
import AuthInfo from '@components/AuthInfo'
import BoyHikingImage from '@images/Boy-enjoying-hiking.svg';
import React from 'react'
import { useLocation } from 'react-router-dom';

const Auth = () => {
  const [authTitle, setAuthTitle] = React.useState('')
  const [authDescription, setAuthDescription] = React.useState('')
  const location = useLocation()
  const isForgotPasswordRoute = location.pathname === '/forgot-password'

  function setAuthTexts() {
    const authTitle = isForgotPasswordRoute
      ? 'Recupere sua senha'
      : 'Seja bem vindo ao Traveler!'
    
    const authDescription = isForgotPasswordRoute
      ? 'Digite as informações abaixo e um link para alteração de senha será enviado no seu e-mail'
      : ''

    setAuthTitle(authTitle)
    setAuthDescription(authDescription)
  }

  React.useEffect(() => {
    setAuthTexts()
  });

  return (
    <div className={classes['auth-page']}>
      <AuthInfo title={authTitle} description={authDescription} isForgotPasswordRoute={isForgotPasswordRoute}/>
      <img src={BoyHikingImage} alt="Garoto escalando" className={classes.image}/>
    </div>
  )
}

export default Auth