import React from 'react'
import './app.css'
// import {Navbar} from './components'
// import Routes from './routes'

// import Timer from '../client/components/timer'
// import Board from '../client/components/Board'

import {Timer, Board, Editor} from './components'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes />
//     </div>
//   )
// }

const App = () => {
  return (
    <div className="container">
      <div className="editorContainer">
        <Editor />
      </div>
      <div className="Utilcontainer">
        <Timer />
        <Board />
      </div>
    </div>
  )
}

export default App
