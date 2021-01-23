import React, { useState } from 'react'
import { Row, Col, Alert } from 'antd'
import { powderedFood, priorities } from '../data'
import ProductInformation from './ProductInformation'
import Parameters from './Parameters'

export default function Comparison () {
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([])
  const [selectedPriority, setSelectedPriority] = useState('')

  const priorityObject = priorities[selectedPriority] || {}
  console.warn('priorityObject', priorityObject)

  return (
    <>
      <Row>
        <Parameters
          setSelectedDietaryRestrictions={setSelectedDietaryRestrictions}
          setSelectedPriority={setSelectedPriority}
        />
      </Row>
      <Row>
        {localStorage && localStorage.getItem('hideAlert')
          ? null
          : (
            <Alert
              style={{ width: '100%', marginTop: 10 }}
              message='Prices do not include shipping fees or taxes.'
              type='warning'
              showIcon
              closable
              onClose={() => localStorage.setItem('hideAlert', true)}
            />)
        }
      </Row>
      <Row style={{ marginTop: 10 }}>
        {powderedFood.map(food => (
          <Col key={food.id} style={{ marginRight: 5, backgroundColor: 'red' }} >
            <ProductInformation
              food={food}
              selectedDietaryRestrictions={selectedDietaryRestrictions}
              selectedPriority={selectedPriority}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}
