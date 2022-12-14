import { Pane, Pagination, Paragraph, DollarIcon, Button, HeartIcon, ListDetailViewIcon, TemperatureIcon, Tooltip, SideSheet } from 'evergreen-ui'
import StressImage from '@images/Stress.svg';
import { useState } from 'react'
import classes from './index.module.scss'
import ButtonScaleAnimation from '@animations/ButtonScale';
import ContentSlideYAnimation from '@animations/ContentSlideY';
import { useNavigate } from 'react-router-dom';

interface IDashboardCardProps {
  currentTab: number
}

function DashboardCard (props: IDashboardCardProps) {
  const [isFavDestiny, setIsFavDestiny] = useState(false)
  const navigate = useNavigate()

  function redirectToWeatherInfo() {
    window.open('https://weather.com/pt-BR/clima/hoje/l/da2be3197b9161d9455d2682c6f8adbef50e47eee836468d3333deb460c3c4dc', '_blank');
  }

  function redirectToDestinyDetail() {
    navigate('/destiny-detail')
  }

  function toggleFav() {
    setIsFavDestiny(!isFavDestiny)
  }

  return (
    <ContentSlideYAnimation>
      <Pane
        backgroundColor='white'
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
        borderRadius='30px'
        marginBottom='1rem'
        padding='1rem'
        gap='1rem'
        elevation={3}
        className={classes['dashboard-card']}
      >
        <Pane
          backgroundColor='white'
          display='flex'
          alignItems='center'
          flexDirection='column'
        >
          <img src={StressImage} alt="Destino imagem" width='100%'/>
          <Pagination page={1} totalPages={5}></Pagination>
        </Pane>
        <Pane
          backgroundColor='white'
          display='flex'
          flexDirection='column'
        >
          <Pane marginBottom='1rem'>
            <Pane
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              marginBottom='1rem'
            >
              Cancún
              <Tooltip content={isFavDestiny ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}>
                <ButtonScaleAnimation>
                  <HeartIcon
                    onClick={toggleFav}
                    cursor='pointer'
                    color={isFavDestiny ? 'red' : 'muted'}
                    size={30}
                  />
                </ButtonScaleAnimation>
              </Tooltip>
            </Pane>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi delectus quibusdam reprehenderit quisquam animi, quidem officiis velit dolorum architecto voluptatem maiores deserunt ea laboriosam dolorem nam aliquam voluptas rem consectetur.</Paragraph>
          </Pane>
          <Pane 
            width='100%'
            display='flex'
            justifyContent='space-between'
            textAlign='end'
            alignSelf='end'
            alignItems='center'
            marginBottom='1rem'
          >
            <Pane>
              <DollarIcon size={20} color="success"/>
              <DollarIcon size={20} color="success"/>
              <DollarIcon size={20} color="success"/>
              <DollarIcon size={20} color="muted"/>
              <DollarIcon size={20} color="muted"/>
            </Pane>
            <Tooltip content='Clique para verificar a temperatura atual'>
              <Button
                onClick={() => redirectToWeatherInfo()}
                color='blue' 
                appearance='minimal'
                iconAfter={TemperatureIcon}
                size='large'
              >
                Atualmente frio
              </Button>
            </Tooltip>
          </Pane>
          <Button
            onClick={() => redirectToDestinyDetail()}
            color='blue'
            iconAfter={ListDetailViewIcon}
            size='large'
          >
            Visualização detalhada
          </Button>
        </Pane>
      </Pane>
    </ContentSlideYAnimation>
  )
}

export default DashboardCard