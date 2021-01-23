import React, { useState } from 'react'
import { Row, Col, Alert } from 'antd'
import { powderedFood, priorities } from '../data'
import ProductInformation from './ProductInformation'
import Parameters from './Parameters'

export default function Comparison () {
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([])
  const [selectedPriority, setSelectedPriority] = useState('')

  const priorityObject = priorities[selectedPriority] || {}

  let winner = null
  if (typeof priorityObject.eval === 'function') {
    winner = priorityObject.eval()
  }

  return (
    <>
      <Row>
        <Parameters
          setSelectedDietaryRestrictions={setSelectedDietaryRestrictions}
          setSelectedPriority={setSelectedPriority}
        />
      </Row>
      <Row>
        {sessionStorage && sessionStorage.getItem('hideAlert')
          ? null
          : (
            <Alert
              style={{ width: '100%', marginTop: 10 }}
              message='Prices do not include shipping fees or taxes.'
              type='warning'
              showIcon
              closable
              onClose={() => sessionStorage.setItem('hideAlert', true)}
            />)
        }
      </Row>
      <Row style={{ marginTop: 10 }}>
        {powderedFood.map(food => (
          <Col key={food.id} style={{ marginRight: 5 }} >
            <ProductInformation
              food={food}
              selectedDietaryRestrictions={selectedDietaryRestrictions}
              selectedPriority={selectedPriority}
              isWinner={winner && (Array.isArray(winner) ? winner.map(w => w.brand).includes(food.brand) : food.brand === winner.brand)}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}
