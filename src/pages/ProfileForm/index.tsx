import classes from './index.module.scss'
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import GlobalLogisticsImage from '@images/Global-logistics-delivery-network.svg';
import formStepsJSON from './formSteps'
import { Checkbox, Heading, TextInputField, Paragraph, Pane } from 'evergreen-ui'
import { useMemo, useCallback } from 'react';

const ProfileForm = () => {
  const { currentStep } = useParams()
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = React.useState(formStepsJSON[0].question.label)
  const [currentAnswersLabel, setCurrentAnswersLabel] = React.useState(formStepsJSON[0].answer)
  const [checked, setChecked] = React.useState(true)

  function handleFirstAccess() {
    if (currentStep === '1') return
    redirectToInitialStep()
  }

  function redirectToInitialStep() {
    navigate('/profile-form/1')
  }

  useMemo(() => console.log(currentQuestion), [currentQuestion]);

  useCallback(() => {
    handleFirstAccess()
  }, [])

/*   useCallback(() => {
    console.log('navigate')
    navigate('/profile-form/2')
  }, [currentQuestion]) */

  return (
    <Pane className={classes['profile-form-page']}>
      <form className={classes['form-container']}>
        <Heading className={classes['heading']} fontSize="30px">{currentQuestion}</Heading>
        <Pane className={classes['content-container']}>
          {currentAnswersLabel.map((answerLabel) => (
            <Pane key={answerLabel} className={classes['content']}>
              <Checkbox
                className={classes['checkbox']}
                label={answerLabel}
                value={answerLabel}
                checked={checked}
                onChange={e => setCurrentQuestion(e.target.value)}
              />
            </Pane>
          ))}
        </Pane>
      </form>
      <img src={GlobalLogisticsImage} alt="Logística global" className={classes.image}/>
    </Pane>
  )
}

export default ProfileForm