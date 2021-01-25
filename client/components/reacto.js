import React, {Component, useState} from 'react'
import {Editor, EditorState} from 'draft-js'
import 'draft-js/dist/Draft.css'
import './reacto.css'
// import Example from "./example"

class REACTO extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
      // editorState1:EditorState.createEmpty(),
      // editorState2:EditorState.createEmpty()
    }
    // this.handleChangeEditor1=this.handleChangeEditor1.bind(this)
    // this.handleChangeEditor2=this.handleChangeEditor2.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  // handleChangeEditor1 = editorState1 => {
  //   console.log(editorState1)
  //   this.setState({
  //     editorState1
  //   })
  // }
  // handleChangeEditor2 = editorState2 => {
  //   this.setState({
  //     editorState2
  //   })
  // }

  onChange = editorState => {
    this.setState({editorState: editorState})
  }

  render() {
    console.log(this.props.items)
    return (
      <div>
        {this.props.items.data.map(item => (
          <React.Fragment key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            {/* <Editor editorState={this.state.editorState} onChange={this.onChange} /> */}
            <button type="button">{item.buttonLabel}</button>
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default REACTO

// <Editor
// editorState={this.state.editorState1}
// onChange={this.state.handleChangeEditor1 }/>

{
  /* <Editor editorState={this.state.{`editorState${item.id}`}} onChange={this.handleChangeEditor${`item.id`})} /> */
}

{
  /* <React.Fragment key ={item.id}>
      <h2>{item.name}</h2>
      <p>{item.desc}</p>
      <button type="button" >{item.buttonLabel}</button> */
}
{
  /* <Editor editorState={editorState} onChange={setEditorState} /> */
}
