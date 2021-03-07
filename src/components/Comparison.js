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

  const priorityObject = priorities(selectedProducts, { exchangeRate, selectedCurrency })[selectedPriority] || {}

  let winner = null
  if (typeof priorityObject.eval === 'function' && selectedProducts.length) {
    winner = priorityObject.eval()
  }

  return (
    <div className='comparison'>
      <Parameters
        priorities={priorities([], { exchangeRate, selectedCurrency })}
        setSelectedDietaryRestrictions={setSelectedDietaryRestrictions}
        setSelectedPriority={setSelectedPriority}
      />

      {winner && <Row className='winner'><div>Winner: {winner.brand} - {winner.product}</div></Row>}

      <Row className='product-information-wrapper' justify='center' gutter={5}>
        {selectedProducts.length ? selectedProducts.map(food => (
          <Col key={food.id}>
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
                <p>
                  Information last updated on February 15th, 2021. If information is innacurate please <a href="https://www.reddit.com/message/compose/?to=monkeyMammoth4" target='_blank' rel="noopener noreferrer">contact me</a>.
                </p>
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
