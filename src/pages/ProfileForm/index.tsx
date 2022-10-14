import classes from './index.module.scss'
import GlobalLogisticsImage from '@images/Global-logistics-delivery-network.svg';
import formStepsJSON from './formSteps'
import { Checkbox, Heading, Pane, Button, toaster } from 'evergreen-ui'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { IPutProfileInfoResponse, PutProfileInfo } from '@services/traveler';

const ProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(formStepsJSON[0].question)
  const [currentAnswers, setCurrentAnswers] = useState(formStepsJSON[0].answer)
  const [stepsCounter] = useState(formStepsJSON.length)
  const [formResponse, setFormResponse] = useState<any>({})
  const navigate = useNavigate()

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

  function handleClickAnswer(value: any) {
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

  function handleCheckAnswer(value: string) {
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
        PutProfileInfo(formResponse)
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
    <Pane className={classes['profile-form-page']}>
      <form className={classes['form-container']}>
        <Heading className={classes['heading']} fontSize="25px">{currentQuestion.label}</Heading>
        <Pane className={classes['content-container']}>
          {currentAnswers.map((answer, index) => (
            <Pane key={answer.label} className={classes['content']}>
              {isCurrentStepMultipleAnswer ? (
                <Checkbox
                  className={classes['checkbox']}
                  label={answer.label}
                  value={String(answer.value)}
                  checked={formResponse[`step-${currentStep}`]?.indexOf(String(answer.value)) > -1}
                  onChange={e => handleCheckAnswer(e.target.value)}
                />
              ) : (
                <Button
                  className={classes['button']}
                  type='button'
                  value={answer.value}
                  appearance={formResponse[`step-${currentStep}`]?.indexOf(String(answer.value)) > -1 ? 'primary' : 'default'}
                  size='large'
                  onClick={(e: any) => handleClickAnswer(e.target.value)}
                >
                  {answer.label}
                </Button>
              )}
            </Pane>
          ))}
        </Pane>
        <Pane className={classes['content-actions']}>
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
      </form>
      <img src={GlobalLogisticsImage} alt="Logística global" className={classes.image}/>
    </Pane>
  )
}

export default ProfileForm