/*
  Inline labels editor

  Usage example:
  const Page = React.createClass({
    getInitialState () {
      return {
        value: 'Click to change...'
      }
    },

    _change (value) {
      this.setState({value})
    },

    render () {
      return (<LabelEditor value={this.state.value} onChange={this._change} />)
    }
  })

  Props:
    value: value
    onChange: will trigger when data changed
    readOnly: prevent edit action
    width: width of input
    maxWidth: max width of input
    styles: style overider for label
*/

import React from 'react'
import styles from './LabelEditor.scss'

export const LabelEditor = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    readOnly: React.PropTypes.bool,
    width: React.PropTypes.any,
    maxWidth: React.PropTypes.any,
    styles: React.PropTypes.string
  },

  getInitialState () {
    return {
      edit: false,
      value: this.props.value
    }
  },

  componentDidUpdate () {
    if (this.state.edit) {
      this.refs.editor.focus()
    }
  },

  _edit () {
    if (this.props.readOnly) { return }
    this.setState({ edit: true, value: this.props.value })
  },

  _blur () {
    this.setState({edit: false})
    this.props.onChange && this.props.onChange(this.state.value)
  },

  _keydown (e) {
    if (e.keyCode === 13) {
      this._blur()
    }

    if (e.keyCode === 27) {
      this.setState({edit: false})
    }
  },

  _change (e) {
    this.setState({value: e.currentTarget.value})
  },

  renderText (value) {
    let overider = this.props.styles || ''
    return (
      <span className={`${styles.editable} ${overider}`}
        onClick={this._edit}>{this.props.value}</span>
    )
  },

  renderEdit (value) {
    let style = {
      width: this.props.width,
      maxWidth: this.props.maxWidth
    }
    return (
      <textarea ref="editor" style={style} className={styles.editor}
        onKeyDown={this._keydown} onChange={this._change} onBlur={this._blur}
        type="text" autoComplete="off" value={this.state.value} />
    )
  },

  render () {
    return (this.state.edit ? this.renderEdit() : this.renderText())
  }
})

export default LabelEditor
