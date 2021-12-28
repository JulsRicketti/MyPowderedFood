import React, { useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Form, Input, Select, Divider } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default function ProductSection () {
  const { powderedFood, brands } = useContext(ProductContext)

  const [brand, setBrand] = useState('')
  const [productName, setProductName] = useState('')
  const [website, setWebsite] = useState('')
  const [note, setNote] = useState('')
  const [calories, setCalories] = useState(0)
  const [price, setPrice] = useState(0)
  return (
    <div>
      <h3>Section 1- Product</h3>
      <Form>
        <Form.Item label='Brand'>
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
        <Form.Item label='Product name'>

        </Form.Item>
        <Form.Item label='Website'>

        </Form.Item>
        <Form.Item label='Note'>

        </Form.Item>
        <Form.Item label='Calories'>

        </Form.Item>
        <Form.Item label='Full Price'>

        </Form.Item>
        <Form.Item label='Servings'>

        </Form.Item>
      </Form>

    </div>
  )
}
