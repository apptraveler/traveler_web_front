import { Pane } from "evergreen-ui"
import { useState } from "react"
import { animated, useTransition } from "react-spring"

interface IContentSlideYAnimationParams {
  children: any,
  duration: number
}

function ContentSlideYAnimation({children, duration}: IContentSlideYAnimationParams) {
  const [translateYAmount] = useState('10%')

  const transitions = useTransition(children, {
    config: {
      duration: duration
    },
    from: {
      transform: `translateY(${translateYAmount})`,
      display: "none",
      opacity: 0
    },
    enter: {
      transform: "translateY(0)",
      display: "block",
      opacity: 1,
      width: "100%"
    },
    leave: {
      transform: `translateY(${translateYAmount})`,
      display: "none",
      opacity: 0
    }
  })

  return (
    transitions((style, item) => (
      <Pane>
        <animated.div style={style}>{item}</animated.div>
      </Pane>
    ))  
  )
}

export default ContentSlideYAnimation