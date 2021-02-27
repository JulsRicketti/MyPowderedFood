import React, { useState, useContext } from 'react'
import { Row, Col, Alert } from 'antd'
import { priorities } from '../data'
import ProductInformation from './ProductInformation'
import Parameters from './Parameters'
import { ProductContext } from '../context/ProductContext'
import { CurrencyContext } from '../context/CurrencyContext'

export default function Comparison () {
  const { exchangeRate, selectedCurrency } = useContext(CurrencyContext)
  const { selectedProducts } = useContext(ProductContext)

  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([])
  const [selectedPriority, setSelectedPriority] = useState('')

  const priorityObject = priorities[selectedPriority] || {}

  let winner = null
  if (typeof priorityObject.eval === 'function' && selectedProducts.length) {
    winner = priorityObject.eval(selectedProducts, { exchangeRate, selectedCurrency })
    console.warn('WINNER', winner)
  }

  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Parameters
          setSelectedDietaryRestrictions={setSelectedDietaryRestrictions}
          setSelectedPriority={setSelectedPriority}
        />
      </div>
      <Row style={{ marginTop: 10 }}>
        {selectedProducts.length ? selectedProducts.map(food => (
          <Col key={food.id} style={{ marginRight: 5 }} >
            <ProductInformation
              food={food}
              selectedDietaryRestrictions={selectedDietaryRestrictions}
              selectedPriority={selectedPriority}
              isWinner={winner && (Array.isArray(winner) ? winner.map(w => w.product).includes(food.product) : food.product === winner.product)}
            />
          </Col>
        )) : <h3>Select the products you wish to compare.</h3>}
      </Row>
      <Row>
        {sessionStorage && sessionStorage.getItem('hideUpdatedAtAlert')
          ? null
          : (
            <Alert
              style={{ width: '100%', marginTop: 10 }}
              message={
                <>
                  <p>
                  Information last updated on February 15th, 2021. If information is innacurate please <a href="https://www.reddit.com/message/compose/?to=monkeyMammoth4" target='_blank' rel="noopener noreferrer">contact me</a>.
                  </p>
                </>
              }
              type='info'
              showIcon
              closable
              onClose={() => sessionStorage.setItem('hideUpdatedAtAlert', true)}
            />)
        }
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
    </div>
  )
}
