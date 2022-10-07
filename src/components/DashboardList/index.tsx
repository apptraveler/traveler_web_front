import { Pane, Pagination, Heading, Paragraph, DollarIcon, Button, TemperatureIcon, Tooltip } from 'evergreen-ui'
import StressImage from '@images/Stress.svg';
import { useState } from 'react'

function DashboardList () {
  const [isShown, setIsShown] = useState(false)
  return (
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
      elevation={2}
    >
      <Pane
        backgroundColor='white'
        display='flex'
        alignItems='center'
        flexDirection='column'
      >
        <img src={StressImage} alt="Destino imagem" width={400}/>
        <Pagination page={1} totalPages={5}></Pagination>
      </Pane>
      <Pane
        backgroundColor='white'
        display='flex'
        flexDirection='column'
      >
        <Pane marginBottom='1rem'>
          <Heading marginBottom='1rem'>
            Cancún
          </Heading>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi delectus quibusdam reprehenderit quisquam animi, quidem officiis velit dolorum architecto voluptatem maiores deserunt ea laboriosam dolorem nam aliquam voluptas rem consectetur.</Paragraph>
        </Pane>
        <Pane alignSelf='end'>
          <Pane marginBottom='1rem' textAlign='end'>
            <DollarIcon size={20} color="success"></DollarIcon>
            <DollarIcon size={20} color="success"></DollarIcon>
            <DollarIcon size={20} color="success"></DollarIcon>
            <DollarIcon size={20} color="muted"></DollarIcon>
            <DollarIcon size={20} color="muted"></DollarIcon>
          </Pane>
          <Tooltip content='Clique para verificar a temperatura'>
            <Button color='blue' appearance='minimal' iconAfter={TemperatureIcon} size='medium'>Atualmente frio</Button>
          </Tooltip>
        </Pane>
      </Pane>
    </Pane>
  )
}

export default DashboardList