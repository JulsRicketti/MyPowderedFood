import 'antd/dist/antd.css'
import React from 'react'

import Comparison from './Comparison'

export default function App () {
  return (
    <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Comparison/>
    </div>
  )
}
