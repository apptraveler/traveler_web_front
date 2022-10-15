import { Pane } from "evergreen-ui"
import { useState } from "react"
import { animated, useSpring } from "react-spring"

interface IHeightSlideAnimationParams {
  children: any
}

function HeightSlideAnimation({children}: IHeightSlideAnimationParams) {
  const heightSpring = useSpring({ to: { height: '0px' }, from: { height: '100%' } })

  return (
    <animated.div style={heightSpring}>{children}</animated.div>
  )
}

export default HeightSlideAnimation