import React from 'react'

// import {Navbar} from './components'
// import Routes from './routes'

// import Timer from '../client/components/timer'
// import Board from '../client/components/Board'

import {Timer, Board} from './components'

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
    <div container>
      <Timer />
      <Board />
    </div>
  )
}

export default App
