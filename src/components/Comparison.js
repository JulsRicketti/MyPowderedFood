import React, { useState } from 'react'
import { Row, Col, Alert } from 'antd'
import { powderedFood } from '../data'
import ProductInformation from './ProductInformation'
import Parameters from './Parameters'

export default function Comparison () {
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([])

  return (
    <>
      <Row>
        <Parameters
          setSelectedDietaryRestrictions={setSelectedDietaryRestrictions}
        />
      </Row>
      <Row>
        {localStorage && localStorage.getItem('hideAlert')
          ? null
          : (
            <Alert
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
          <Col key={food.id} style={{ marginRight: 5 }} >
            <ProductInformation
              food={food}
              selectedDietaryRestrictions={selectedDietaryRestrictions}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}
