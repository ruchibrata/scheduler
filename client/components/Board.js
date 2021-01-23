import React, {useState, useEffect} from 'react'

function Board() {
  const canvasRef = React.useRef(null)
  const [ctx, setCtx] = useState({})

  useEffect(
    () => {
      let canv = canvasRef.current

      let canvCtx = canv.getContext('2d')
      canvCtx.lineJoin = 'round'
      canvCtx.lineCap = 'round'
      canvCtx.lineWidth = 5
      setCtx(canvCtx)
    },
    [ctx]
  )

  return (
    <div className="board">
      This is the Board
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Board
