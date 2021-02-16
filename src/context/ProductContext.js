import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { powderedFood } from '../data/powderedFood'

export const ProductContext = createContext({
  powderedFood: [],
  selectedProducts: [],
  setSelectedProducts: () => {}
})

export const ProductProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([])

  const valueObj = {
    powderedFood,
    selectedProducts,
    setSelectedProducts
  }

  return (
    <ProductContext.Provider value={valueObj}>
      {children}
    </ProductContext.Provider>
  )
}

ProductProvider.propTypes = {
  children: PropTypes.any.isRequired
}
