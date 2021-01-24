import 'antd/dist/antd.css'
import React from 'react'

import Comparison from './Comparison'

export default function App () {
  return (
    <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ textDecoration: 'underline' }}>My Powdered Food</h1>
      <Comparison/>
    </div>
  )
}
