import React, {Component, useState} from 'react'
import {Editor, EditorState} from 'draft-js'
import 'draft-js/dist/Draft.css'
import './reacto.css'
import CustomEditor from './customEditor'
// import Example from "./example"

class REACTO extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange = editorState => {
    this.setState({editorState: editorState})
  }

  handleClick = id => {
    alert(`button${id} clicked`)
  }

  render() {
    console.log(this.props.items)
    return (
      <div>
        {this.props.items.data.map(item => (
          <React.Fragment key={item.id}>
            <h2>
              {item.name}: {item.desc}{' '}
            </h2>
            <div>
              {item.placeHolder}
              <CustomEditor
                editorState={this.state.editorState}
                onChange={this.onChange}
              />
            </div>
            {/* <button type="button" onClick={this.handleClick(item.name)}>{item.buttonLabel}</button> */}
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default REACTO
