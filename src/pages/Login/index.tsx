import classes from './index.module.scss'
import Auth from '@components/Auth'
import BoyHikingImage from '@images/Boy-enjoying-hiking.svg';

const Login = () => {
  return (
    <div className={classes['login-page']}>
      <Auth title='Seja bem vindo ao Traveler!' />
      <img src={BoyHikingImage} alt="Garoto escalando" className={classes.image}/>
    </div>
  )
}

export default Login