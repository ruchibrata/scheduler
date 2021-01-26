import React, {forwardRef, useRef, useImperativeHandle} from 'react'
import './app.css'

import {Timer, Board, Notebook, Restate, REACTO} from './components'

const reactoState = {
  data: [
    {
      id: 1,
      name: 'R',
      desc: 'Repeat the Question',
      buttonLabel: 'Go to Example'
    },
    {
      id: 2,
      name: 'E',
      desc: 'Write Out Examples',
      buttonLabel: 'Go to Approach'
    },
    {
      id: 3,
      name: 'A',
      desc: 'Describe Your Approaches',
      buttonLabel: 'Go to Code'
    },
    {
      id: 4,
      name: 'C',
      desc: 'Write Your Code',
      buttonLabel: 'Go to Test'
    },
    {
      id: 5,
      name: 'T',
      desc: 'Test the code',
      buttonLabel: 'Go to Optimization'
    },
    {
      id: 6,
      name: 'O',
      desc: 'Think about the optimization',
      buttonLabel: 'Done'
    }
  ]
}

const App = () => {
  return (
    <div className="container">
      <div className="typingContainer">
        <Timer />
        <REACTO items={reactoState} />
        <h2>DON'T FORGET TO PRESS DONE </h2>
      </div>
      <div className="drawingContainer">
        <Board />
      </div>
    </div>
  )
}

export default App
