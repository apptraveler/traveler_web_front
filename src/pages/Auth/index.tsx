import classes from './index.module.scss'
import AuthInfo from '@components/AuthInfo'
import BoyHikingImage from '@images/Boy-enjoying-hiking.svg';

const Auth = () => {
  return (
    <div className={classes['login-page']}>
      <AuthInfo title='Seja bem vindo ao Traveler!' />
      <img src={BoyHikingImage} alt="Garoto escalando" className={classes.image}/>
    </div>
  )
}

export default Auth