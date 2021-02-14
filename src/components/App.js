import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react'
import getExchangeRate from '../api/getExchangeRate'

import Comparison from './Comparison'
import CurrencySeletor from './CurrencySeletor'

export default function App () {
  const [exchangeRate, setExchangeRate] = useState(null)
  const [selectedCurrency, setSelectedCurrency] = useState((localStorage && localStorage.getItem('currency')) || 'USD')

  useEffect(() => {
    getExchangeRate(selectedCurrency)
      .then((res) => setExchangeRate(res))
  }, [selectedCurrency])

  console.warn('EXCHANGE RATE', exchangeRate)
  return (
    <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ textDecoration: 'underline' }}>My Powdered Food</h1>
      <CurrencySeletor selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
      <Comparison
        exchangeRate={exchangeRate}
        selectedCurrency={selectedCurrency}
      />
    </div>
  )
}
