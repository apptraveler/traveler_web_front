import { animated, useSpring } from "react-spring"

interface IHeightSlideAnimationParams {
  children: any,
  duration: number
}

function HeightSlideAnimation({children, duration}: IHeightSlideAnimationParams) {
  const heightSpring = useSpring({
    config: {duration: duration},
    to: { opacity: 1, height: '0px' },
    from: { opacity: 0, height: '100%' }
  })

  return (
    <animated.div style={heightSpring}>{children}</animated.div>
  )
}

export default HeightSlideAnimation