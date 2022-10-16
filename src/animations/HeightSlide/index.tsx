
import { config, animated, useSpring } from "react-spring"

interface IHeightSlideAnimationParams {
  children: any
}

function HeightSlideAnimation({children}: IHeightSlideAnimationParams) {
  const heightSpring = useSpring({
    config: config.molasses,
    to: { opacity: 1, height: '0px' },
    from: { opacity: 0, height: '100%' }
  })

  return (
    <animated.div style={heightSpring}>{children}</animated.div>
  )
}

export default HeightSlideAnimation