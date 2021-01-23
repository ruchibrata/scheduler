import React from 'react'
import './Controls.css'
import Color from './color'
import Eraser from './eraser'

function Controls(props) {
  return (
    <div className="controls">
      <Color handleColor={props.handleColor} />
      <Eraser handleColor={props.handleColor} />
    </div>
  )
}

export default Controls
