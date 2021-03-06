import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { currencies } from '../data'

export default function CurrencySeletor ({ selectedCurrency, setSelectedCurrency }) {
  return (
    <div className='currency-selector'>
      <Select
        showSearch
        value={selectedCurrency}
        onChange={(currency) => {
          localStorage.setItem('currency', currency)
          setSelectedCurrency(currency)
        }}
      >
        {currencies
          .map((currency) => (
            <Select.Option key={currency} value={currency}> {currency}</Select.Option>
          )
          )}
      </Select>
    </div>
  )
}

CurrencySeletor.propTypes = {
  selectedCurrency: PropTypes.string.isRequired,
  setSelectedCurrency: PropTypes.func.isRequired
}
