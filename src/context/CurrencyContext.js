import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import getExchangeRate from '../api/getExchangeRate'

export const CurrencyContext = createContext({
  exchangeRate: {},
  selectedCurrency: 'USD'
})

export const CurrencyProvider = ({ children }) => {
  const [exchangeRate, setExchangeRate] = useState(null)
  const [selectedCurrency, setSelectedCurrency] = useState((localStorage && localStorage.getItem('currency')) || 'USD')

  useEffect(() => {
    getExchangeRate(selectedCurrency)
      .then((res) => setExchangeRate(res))
  }, [selectedCurrency])

  const valueObj = {
    exchangeRate,
    selectedCurrency,
    setSelectedCurrency
  }

  return (
    <CurrencyContext.Provider value={valueObj}>
      {children}
    </CurrencyContext.Provider>
  )
}

CurrencyProvider.propTypes = {
  children: PropTypes.any.isRequired
}
