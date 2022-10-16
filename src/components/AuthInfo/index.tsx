import classes from './index.module.scss'
import { Pane, Tablist, Tab } from 'evergreen-ui'
import React from 'react'
import SignIn from '@components/AuthInfo/SignIn'
import SignUp from '@components/AuthInfo/SignUp'
import ForgotPassword from './ForgotPassword'
import BirdLogoImage from '@images/bird-logo.svg';

import ContentSlideXAnimation from '@animations/ContentSlideX'
import HeightSlideAnimation from '@animations/HeightSlide'

interface AuthInfoProps {
  title?: string
  description?: string
  isForgotPasswordRoute: boolean
}

function AuthInfo (props: AuthInfoProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState(['Login', 'Cadastre-se'])

  return (
    <HeightSlideAnimation duration={250}>
      <Pane elevation={4} className={classes.card}>
        {props.title && <h1 className={classes.title}>{props.title}</h1>}
        <img className={classes.logo} src={BirdLogoImage} alt="bird-logo" />
        {props.description && <h2 className={classes.description}>{props.description}</h2>}
        {!props.isForgotPasswordRoute &&
          <Pane width='100%' textAlign='initial'>
            <Tablist marginBottom={16} textAlign='center'>
              {tabs.map((tab, index) => (
                <Tab
                  key={tab}
                  id={tab}
                  onSelect={() => setSelectedIndex(index)}
                  isSelected={index === selectedIndex}
                  aria-controls={`panel-${tab}`}
                  appearance='primary'
                  className={classes.tab}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
            <ContentSlideXAnimation duration={250}>
              {selectedIndex === 0 && <SignIn />}
              {selectedIndex === 1 && <SignUp />}
            </ContentSlideXAnimation>
          </Pane>
        }
        {props.isForgotPasswordRoute &&
          <Pane
            className={classes['tab-pane']}
            role="tabpanel"
          >
            <ForgotPassword />
          </Pane>
        }
      </Pane>
    </HeightSlideAnimation>
  )
}

export default AuthInfo