import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { alphabeticalSort } from '../util'

import { powderedFood } from '../data/powderedFood'

export const ProductContext = createContext({
  powderedFood: [],
  selectedProducts: [],
  setSelectedProducts: () => {}
})

export const ProductProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([])

  const foundObj = {}
  const brands = powderedFood
    .map(food => food.brand)
    .filter(brand => {
      if (foundObj[brand]) {
        return false
      }
      foundObj[brand] = true
      return true
    })
    .sort(alphabeticalSort)

  const valueObj = {
    powderedFood,
    brands,
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
