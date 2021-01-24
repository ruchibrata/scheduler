import React from 'react'
import './controls.css'
import Color from './color'
import Eraser from './eraser'

function Controls(props) {
  return (
    <div className="controls">
      <h1>Chalk Board</h1>
      <Color handleColor={props.handleColor} />
      <Eraser handleColor={props.handleColor} />
    </div>
  )
}

export default Controls
