import classes from './index.module.scss'
import Auth from '@components/Auth'
import BoyHikingImage from '@images/Boy-enjoying-hiking.svg';

const Login = () => {
  return (
    <div className={classes['login-page']}>
      <Auth title='Seja bem vindo ao Traveler!' description='Seu parceiro de viagens' />
      <img src={BoyHikingImage} alt="" />
    </div>
  )
}

export default Login