import React, {useState} from 'react'
import './controls.css'
import Color from './color'
import Eraser from './eraser'

function Controls(props) {
  return (
    <div className="controls">
      <h2>Chalk Board</h2>
      <Color handleColor={props.handleColor} />
      <Eraser handleColor={props.handleColor} />
    </div>
  )
}

export default Controls
