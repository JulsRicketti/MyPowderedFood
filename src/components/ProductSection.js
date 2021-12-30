import React, { useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Form, Input, Select, Divider } from 'antd'

export default function ProductSection () {
  const { powderedFood, brands } = useContext(ProductContext)

  const [brand, setBrand] = useState('')
  const [productName, setProductName] = useState('')
  const [website, setWebsite] = useState('')
  const [note, setNote] = useState('')
  const [calories, setCalories] = useState(0)
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState('')
  const [servings, setServings] = useState('')

  const foodByBrand = brand ? powderedFood.find(f => f.brand === brand) : ''
  const productWebsite = foodByBrand && foodByBrand.site
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
        <Form.Item label='Full Price' className='form-item input-with-select-form-item'>
          <Input
            type='number'
            value={price}
            onChange={(evt) => setPrice(evt.target.value)}
          />
          <Select
            showSearch
            value={currency}
            onChange={(selectedCurrency) => setCurrency(selectedCurrency)}
          />
        </Form.Item>
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
