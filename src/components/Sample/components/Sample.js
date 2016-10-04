import React from 'react'
import LabelEditor from 'components/LabelEditor'

const Sample = React.createClass({
  getInitialState () {
    return {
      value: 'Click to change...'
    }
  },

  _change (value) {
    this.setState({value})
  },

  render () {
    return (
      <div style={{margin: '20px'}}>
        <LabelEditor value={this.state.value} onChange={this._change} />
      </div>
    )
  }
})

export default Sample
