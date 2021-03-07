import React from 'react'
import { Row } from 'antd'
import PropTypes from 'prop-types'

export default function WinnerDisplay ({ winner }) {
  if (!winner) {
    return null
  }

  return (
    <Row className='winner'>
      {Array.isArray(winner)
        ? (
          <div>
            Winners:
            <ul>
              {winner.map((w) => <li key={`winner-${w.id}`}>{w.brand} - {w.product}</li>)}
            </ul>
          </div>
        )
        : <div style={{ height: 35 }}>Winner: {winner.brand} - {winner.product}</div>
      }
    </Row>
  )
}

WinnerDisplay.propTypes = {
  winner: PropTypes.any
}
