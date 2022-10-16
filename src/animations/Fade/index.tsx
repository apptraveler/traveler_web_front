import { Pane } from "evergreen-ui"
import { animated, useTransition } from "react-spring"

interface IFadeAnimationParams {
  children: any,
  duration: number
}

function FadeAnimation({children, duration}: IFadeAnimationParams) {
  const transitions = useTransition(children, {
    config: {
      duration: duration
    },
    from: {
      display: "none",
      opacity: 0
    },
    enter: {
      display: "block",
      opacity: 1,
    },
    leave: {
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

export default FadeAnimation