import { Pane } from 'evergreen-ui'
import ProfileSidesheet from '@components/ProfileSidesheet'

interface IMainLayoutParams {
  top?: any,
  main: any
}

function MainLayout(props: IMainLayoutParams) {
  return (
    <Pane height='100%' width='100%' padding='1rem'>
      <Pane
        marginBottom='2rem'
        display='flex'
        gap='10px'
        justifyContent='space-between'
        alignItems='center'
      >
        <ProfileSidesheet></ProfileSidesheet>
        {props.top}
      </Pane>
      {props.main}
    </Pane>
  )
}

export default MainLayout