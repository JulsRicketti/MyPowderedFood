import React, { useContext } from 'react'
import { Select } from 'antd'
import { ProductContext } from '../context/ProductContext'
import { alphabeticalSort } from '../util/alphabeticalSort'

export default function ProductSelector () {
  const { powderedFood, setSelectedProducts } = useContext(ProductContext)

  const duplicateRemoval = {}
  const brandList = powderedFood
    .sort((a, b) => alphabeticalSort(a, b, 'brand'))
    .map((product) => product.brand)
    .filter((brand) => {
      if (duplicateRemoval[brand]) {
        return false
      }
      duplicateRemoval[brand] = true
      return true
    })

  const options = powderedFood.sort((a, b) => alphabeticalSort(a, b, 'product'))

  return (
    <div className='product-selector'>
      <Select
        showSearch
        allowClear
        mode='multiple'
        placeholder='Select as many products as you wish'
        onChange={(selected) => {
          setSelectedProducts(
            selected
              .map((s) => {
                const product = s.split(' - ')[1]
                return powderedFood.find((pf) => pf.product === product)
              })
          )
        }}
      >
        {brandList.map((brand, index) => {
          return (
            <React.Fragment key={`brand-${index}`}>
              <Select.Option disabled={true}>
                {brand}
              </Select.Option>
              {options
                .filter((option) => option.brand === brand)
                .map((option) => {
                  const value = `${option.brand} - ${option.product}`
                  return (
                    <Select.Option
                      key={`product-${option.id}`}
                      value={value}
                    >
                      {value}
                    </Select.Option>
                  )
                })}
            </React.Fragment>
          )
        })}
      </Select>
    </div>
  )
}
