import 'antd/dist/antd.css'
import React, { useState, useEffect, useContext } from 'react'
import getExchangeRate from '../api/getExchangeRate'

import { CurrencyContext } from '../context/CurrencyContext'
import Comparison from './Comparison'
import CurrencySeletor from './CurrencySeletor'

export default function App () {
  const {
    exchangeRate,
    selectedCurrency,
    setSelectedCurrency
  } = useContext(CurrencyContext)

  console.warn('EXCHANGE RATE', exchangeRate)
  return (
    <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ textDecoration: 'underline' }}>My Powdered Food</h1>
      <CurrencySeletor selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
      <Comparison/>
    </div>
  )
}
