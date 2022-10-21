import classes from './index.module.scss'
import formStepsJSON from './formSteps'
import { Heading, Pane, Button, toaster } from 'evergreen-ui'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { IPutProfileInfoResponse, PutProfileInfo } from '@services/traveler';
import ContentSlideXAnimation from '@animations/ContentSlideX'
import { useSelector } from 'react-redux';

const ProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(formStepsJSON[0].question)
  const [currentAnswers, setCurrentAnswers] = useState(formStepsJSON[0].answer)
  const [stepsCounter] = useState(formStepsJSON.length)
  const [formResponse, setFormResponse] = useState<any>({})
  const navigate = useNavigate()

  const authToken = useSelector((state: any) => state.auth.token)

  const limitForwardNavigation = currentStep >= stepsCounter - 1
  const limitBackNavigation = currentStep <= 0
  const isCurrentStepMultipleAnswer = currentQuestion.type === 'multiple'

  const [isLoading, setIsLoading] = useState(false)

  function checkDisabledForward() {
    let conditionToDisable

    if (isCurrentStepMultipleAnswer) {
      conditionToDisable = formResponse[`step-${currentStep}`]?.length > 0
    } else {
      conditionToDisable = formResponse[`step-${currentStep}`]
    }

    return conditionToDisable
      ? false
      : true
  }

  function handleClickAnswer(value: any, isMultiple: boolean) {
    isMultiple
      ? checkAnswer(value)
      : clickAnswer(value)
  }

  function clickAnswer(value: any) {
    if (formResponse[`step-${currentStep}`]?.indexOf(value) > -1) {
      setFormResponse({
        ...formResponse,
        [`step-${currentStep}`]: ''
      })
    } else {
      setFormResponse({
        ...formResponse,
        [`step-${currentStep}`]: value
      })
    }
  }

  function checkAnswer(value: string) {
    if (formResponse[`step-${currentStep}`]?.indexOf(value) > -1) {
      setFormResponse({
        ...formResponse,
        [`step-${currentStep}`]: formResponse[`step-${currentStep}`].filter((item: string) => item !== value)
      })
    } else {
      setFormResponse({
        ...formResponse,
        [`step-${currentStep}`]: [...formResponse[`step-${currentStep}`] || [], value]
      })
    }
  }

  function updateQuestionAndAnswer(destinationStep: number) {
    setCurrentQuestion(formStepsJSON[destinationStep].question)
    setCurrentAnswers(formStepsJSON[destinationStep].answer)
  }

  function navigateQuiz(direction: string) {
    let destinationStep
    if (direction === 'forward') {
      if(!limitForwardNavigation) {
        destinationStep = currentStep + 1
        setCurrentStep(destinationStep)
        updateQuestionAndAnswer(destinationStep)
      }
      else {
        setIsLoading(true)
        const userProfileData = {
          profileId: formResponse['step-0'],
          locationTagsIds: formResponse['step-1'],
          averageSpendId: formResponse['step-2']
        }
        PutProfileInfo(userProfileData, authToken)
          .then((response: IPutProfileInfoResponse) => {
            if (response.success) {
              toaster.success('Formulário realizado com sucesso', { duration: 3 })
              navigate('/dashboard')
            }
          })
          .finally(() => {
            setIsLoading(false)
          })
      }
    }
    if (direction === 'back' && !limitBackNavigation) {
      destinationStep = currentStep - 1
      setCurrentStep(destinationStep)
      updateQuestionAndAnswer(destinationStep)
    }
  }

  return (
    <Pane
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100%'
    >
      <ContentSlideXAnimation>
        <Pane elevation={3} className={classes['form-container']}>
          <Heading className={classes['heading']}>{currentQuestion.label}</Heading>
          <Pane className={classes['content-container']}>
            {currentAnswers.map((answer, index) => (
              <Pane key={answer.label} className={classes['content']}>
                {isCurrentStepMultipleAnswer ? (
                  <Button
                    className={classes['button']}
                    type='button'
                    value={answer.value}
                    appearance={formResponse[`step-${currentStep}`]?.indexOf(String(answer.value)) > -1 ? 'primary' : 'default'}
                    size='large'
                    onClick={(e: any) => handleClickAnswer(e.target.value, true)}
                  >
                    {answer.label}
                  </Button>
                ) : (
                  <Button
                    className={classes['button']}
                    type='button'
                    value={answer.value}
                    appearance={formResponse[`step-${currentStep}`]?.indexOf(String(answer.value)) > -1 ? 'primary' : 'default'}
                    size='large'
                    onClick={(e: any) => handleClickAnswer(e.target.value, false)}
                  >
                    {answer.label}
                  </Button>
                )}
              </Pane>
            ))}
          </Pane>
          <Pane
            className={classes['content-actions']}
            marginTop='1rem'
          >
            {!limitBackNavigation && 
              <Button
                size='large'
                type='button'
                marginRight={16}
                onClick={() => navigateQuiz('back')}
              >
                Voltar
              </Button>
            }
            <Button
              size='large'
              type='button'
              marginRight={16}
              appearance="primary"
              isLoading={isLoading}
              disabled={checkDisabledForward()}
              onClick={() => navigateQuiz('forward')}
            >
              {!limitForwardNavigation ? 'Avançar' : 'Concluir'} 
            </Button>
          </Pane>
        </Pane>
      </ContentSlideXAnimation>
    </Pane>
  )
}

export default ProfileForm