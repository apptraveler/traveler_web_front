import { Pane } from "evergreen-ui"
import { useState } from "react"
import { config, animated, useTransition } from "react-spring"

interface IContentSlideXAnimationParams {
  children: any
}

function ContentSlideXAnimation({children}: IContentSlideXAnimationParams) {
  const [translateXAmount] = useState('20%')

  const transitions = useTransition(children, {
    config: config.molasses,
    from: {
      transform: `translateX(${translateXAmount})`,
      display: "none",
      opacity: 0
    },
    enter: {
      transform: "translateX(0)",
      display: "block",
      opacity: 1,
    },
    leave: {
      transform: `translateX(${translateXAmount})`,
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

export default ContentSlideXAnimation