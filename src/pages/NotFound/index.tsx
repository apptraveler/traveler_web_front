import { Pane, Paragraph } from 'evergreen-ui';
import classes from './index.module.scss'
import StressImage from '@images/Stress.svg';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Pane className={classes['not-found-page']}>
      <Pane>
        <Paragraph className={classes.destak}>
          404
        </Paragraph>
        <Paragraph className={classes.title}>
          Página não encontrada, clique aqui para <NavLink to="/auth">voltar</NavLink>
        </Paragraph>
      </Pane>
      <img src={StressImage} alt="Garota estressada" className={classes.image}/>
    </Pane>
  )
}

export default NotFound;