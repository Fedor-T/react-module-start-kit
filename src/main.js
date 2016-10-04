import React from 'react'
import ReactDOM from 'react-dom'
import Sample from './components/Sample'

// ========================================================
// Browser History Setup
// ========================================================

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <Sample />,
    MOUNT_NODE
  )
}

// ========================================================
// Go!
// ========================================================
render()
