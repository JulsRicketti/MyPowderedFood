import React from 'react'

import { Row, Col } from 'antd'
import ProductInformation from './ProductInformation'
import { powderedFood } from '../data/powderedFood'

export default function Comparison () {
  return (
    <>
      {/* <Select
        mode='multiple'
        onChange={() => console.warn('todo')}
      >
        {powderedFood.map(pf => (
          <Select.Option key={pf.id}>{pf.brand}</Select.Option>
        ))}
      </Select> */}
      <Row>
        {powderedFood.map(food => (
          <Col key={food.id} style={{ margin: 5 }}>
            <ProductInformation food={food}/>
          </Col>
        ))}
      </Row>
    </>
  )
}
