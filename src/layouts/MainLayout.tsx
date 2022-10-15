import { Pane } from 'evergreen-ui'
import ProfileSidesheet from '@components/ProfileSidesheet'
import ContentSlideAnimation from '@animations/ContentSlide'

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
          justifyContent='space-between'
          alignItems='center'
        >
          <ProfileSidesheet></ProfileSidesheet>
          {props.top}
        </Pane>
        <ContentSlideAnimation>
          {props.main}
        </ContentSlideAnimation>
    </Pane>
  )
}

export default MainLayout