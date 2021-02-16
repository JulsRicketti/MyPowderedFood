import 'antd/dist/antd.css'
import React, { useContext } from 'react'

import { CurrencyContext } from '../context/CurrencyContext'
import Comparison from './Comparison'
import ProductSelector from './ProductSelector'
import CurrencySeletor from './CurrencySeletor'

export default function App () {
  const {
    exchangeRate,
    selectedCurrency,
    setSelectedCurrency
  } = useContext(CurrencyContext)

  if (!exchangeRate) {
    return <div>loading...</div>
  }

  return (
    <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ textDecoration: 'underline' }}>My Powdered Food</h1>
      <ProductSelector/>
      <CurrencySeletor selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
      <Comparison/>
    </div>
  )
}
