import { Pane } from 'evergreen-ui'
import ProfileSidesheet from '@components/ProfileSidesheet'
import ContentSlideYAnimation from '@animations/ContentSlideY'
import ContentSlideXAnimation from '@animations/ContentSlideX'

interface IMainLayoutParams {
  top?: any,
  main: any
}

function MainLayout(props: IMainLayoutParams) {
  return (
    <Pane height='100%' width='100%' padding='1rem'>
        <ContentSlideXAnimation>
          <Pane
            marginBottom='2rem'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <ProfileSidesheet></ProfileSidesheet>
            {props.top}
          </Pane>
        </ContentSlideXAnimation>
        <ContentSlideYAnimation>
          {props.main}
        </ContentSlideYAnimation>
    </Pane>
  )
}

export default MainLayout