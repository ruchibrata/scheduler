import React from 'react'
import './app.css'
// import {Navbar} from './components'
// import Routes from './routes'

// import Timer from '../client/components/timer'
// import Board from '../client/components/Board'

import {Timer, Board, Notebook, Restate, REACTO} from './components'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes />
//     </div>
//   )
// }

const reactoState = {
  data: [
    {
      id: 1,
      name: 'Restate',
      desc: 'Restate your prompt below',
      placeHolder: 'type here',
      buttonLabel: 'now go to example'
    },
    {
      id: 2,
      name: 'Example',
      desc: 'put some example below',
      placeHolder: 'type here',
      buttonLabel: 'now go to approach'
    }
  ]
}

const App = () => {
  return (
    <div className="container">
      <div className="editorContainer">
        <Timer />
        <REACTO items={reactoState} />
      </div>
      <div className="Utilcontainer">
        <Board />
      </div>
    </div>
  )
}

export default App
