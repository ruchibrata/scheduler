import React, {useState} from 'react'
import {Editor, EditorState} from 'draft-js'
import 'draft-js/dist/Draft.css'
import './restate.css'
import Example from './example'

function Restate() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  function renderExample() {
    alert('button clicked')
    // <example/>
  }

  return (
    <div className="restateContainer">
      <div className="restateHeader">
        <h2>Restate your prompt here</h2>
      </div>
      <div>
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
      <div>
        <button type="button" onClick={renderExample}>
          Move to Example
        </button>
      </div>
    </div>
  )
}

export default Restate
