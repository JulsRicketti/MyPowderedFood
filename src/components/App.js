import 'antd/dist/antd.css'
import React, { useState, useContext } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { CurrencyContext } from '../context/CurrencyContext'
import Comparison from './Comparison'
import ProductSelector from './ProductSelector'
import CurrencySeletor from './CurrencySeletor'
import FoodEditorModal from './FoodEditorModal'
import Loading from './Loading'

export default function App () {
  const {
    exchangeRate,
    selectedCurrency,
    setSelectedCurrency
  } = useContext(CurrencyContext)

  const [foodEditorModalOpen, setFoodEditorModalOpen] = useState(false)

  if (!exchangeRate) {
    return <Loading/>
  }

  return (
    <div className='app-layout'>
      <h1 className='app-header'>My Powdered Food</h1>
      <ProductSelector/>
      <CurrencySeletor selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
      <Comparison/>
      <FoodEditorModal visible={foodEditorModalOpen} onClose={() => setFoodEditorModalOpen(false)}/>

      <Button
        type='primary'
        className='add-food-button'
        icon={<PlusOutlined />}
        onClick={() => setFoodEditorModalOpen(true)}
      />
    </div>
  )
}
