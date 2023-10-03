import React from "react"
import { CSSTransition } from "react-transition-group"

import "../../assets/anim-fade-message.css"

function Fade(props) {
  return (
    <CSSTransition unmountOnExit timeout={1000} classNames="alert" {...props} />
  )
}

export default function HiddenMessage() {
  const [show, setShow] = React.useState(false)
  const toggle = () => setShow((s) => !s)
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Fade in={show}>
        <div>Hidden Message</div>
      </Fade>
    </div>
  )
}
