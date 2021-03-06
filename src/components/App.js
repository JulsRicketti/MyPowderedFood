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
    <div className='app-layout'>
      <h1 className='app-header'>My Powdered Food</h1>
      <ProductSelector/>
      <CurrencySeletor selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
      <Comparison/>
    </div>
  )
}
