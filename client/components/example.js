import React, {useState} from 'react'
import {Editor, EditorState} from 'draft-js'
import 'draft-js/dist/Draft.css'
import './restate.css'

function Example() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  function renderApproach() {
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
        <button type="button" onClick={renderApproach}>
          Move to Example
        </button>
      </div>
    </div>
  )
}

export default Example
