import { Pane } from "evergreen-ui"
import { useState } from "react"
import { animated, useTransition } from "react-spring"

interface IContentSlideXAnimationParams {
  children: any
}

function ContentSlideXAnimation({children}: IContentSlideXAnimationParams) {
  const [translateXAmount] = useState('10%')

  const transitions = useTransition(children, {
    from: {
      transform: `translateX(${translateXAmount})`,
      display: "none",
      opacity: 0
    },
    enter: {
      transform: "translateX(0); translate",
      display: "block",
      opacity: 1,
      width: "100%"
    },
    leave: {
      transform: `translateX(${translateXAmount})`,
      display: "none",
      opacity: 0
    }
  })

  return (
    transitions((style, item) => (
      <Pane textAlign='initial' width={'100%'}>
        <animated.div style={style}>{item}</animated.div>
      </Pane>
    ))  
  )
}

export default ContentSlideXAnimation