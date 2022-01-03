import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ProductContext } from '../context/ProductContext'
import { Form, Input, Select, Divider } from 'antd'
import InputWithSelect from './InputWithSelect'
import { currencies } from '../data'

export default function ProductSection ({
  brand, setBrand,
  productName, setProductName,
  website, setWebsite,
  note, setNote,
  calories, setCalories,
  price, setPrice,
  currency, setCurrency,
  servings, setServings,
}) {
  const { powderedFood, brands } = useContext(ProductContext)

  const foodByBrand = brand ? powderedFood.find(f => f.brand === brand) : ''
  const productWebsite = foodByBrand && foodByBrand.site

  useEffect(() => {
    setWebsite(productWebsite)
  }, [productWebsite, setWebsite])

  return (
    <div>
      <h3>Section 1- Product</h3>
      <Form>
        <Form.Item label='Brand' className='form-item'>
          <Select
            showSearch
            value={brand}
            onChange={(selectedBrand) => setBrand(selectedBrand)}
            dropdownRender={(menu) => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                  <Input
                    style={{ flex: 'auto' }}
                    placeholder='Other brand'
                    onChange={(evt) => {
                      setBrand(evt.target.value)
                    }}
                    // onKeyDown={(evt) => {
                    //   console.log(evt.keyCode)
                    // }}
                  />
                </div>
              </div>
            )}
          >
            {brands.map(b => <Select.Option key={b} value={b}>{b}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item label='Product name' className='form-item'>
          <Input
            value={productName}
            onChange={(evt) => setProductName(evt.target.value)}
          />
        </Form.Item>
        <Form.Item label='Website' className='form-item'>
          <Input
            value={productWebsite || website}
            onChange={(evt) => setWebsite(evt.target.value)}
          />
        </Form.Item>
        <Form.Item label='Note' className='form-item'>
          <Input.TextArea
            value={note}
            onChange={(evt) => setNote(evt.target.value)}
          />
        </Form.Item>
        <Form.Item label='Calories per serving' className='form-item'>
          <Input
            type='number'
            value={calories}
            onChange={(evt) => setCalories(evt.target.value)}
          />
        </Form.Item>
        <InputWithSelect
          label='Full Price'
          inputType='number'
          inputValue={price || ''}
          inputOnChange={(evt) => setPrice(evt.target.value)}
          selectValue={currency}
          selectOnChange={(selectedCurrency) => setCurrency(selectedCurrency)}
          selectShowSearch={true}
          selectOptions={currencies}
        />
        <Form.Item label='Servings' className='form-item'>
          <Input
            type='number'
            value={servings}
            onChange={(evt) => setServings(evt.target.value)}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

ProductSection.propTypes = {
  brand: PropTypes.string,
  setBrand: PropTypes.func,
  productName: PropTypes.string,
  setProductName: PropTypes.func,
  website: PropTypes.string,
  setWebsite: PropTypes.func,
  note: PropTypes.string,
  setNote: PropTypes.func,
  calories: PropTypes.number,
  setCalories: PropTypes.func,
  price: PropTypes.number,
  setPrice: PropTypes.func,
  currency: PropTypes.string,
  setCurrency: PropTypes.func,
  servings: PropTypes.number,
  setServings: PropTypes.func,
}
