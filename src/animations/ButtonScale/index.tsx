import { Pane } from "evergreen-ui"
import { useState } from "react"
import { animated, useSpring } from "react-spring"
import { forwardRef } from 'react'

interface IButtonScaleAnimationParams {
  children: any
}

const ButtonScaleAnimation2 = forwardRef((props: IButtonScaleAnimationParams, ref: any) => {
  const [clicked, setClicked] = useState(false)
  const { scale } = useSpring({ scale: clicked ? 0.4 : 1 })
  
  const scaleSpring = useSpring({
    transform: scale.to(s => `scale(${s})`)
  })

  return (
    <Pane ref={ref}>
      <animated.div
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        style={scaleSpring}
      >
        {props.children}
      </animated.div>
    </Pane> 
  )
})

export default ButtonScaleAnimation2