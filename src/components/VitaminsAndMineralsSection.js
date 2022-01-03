import React, { useState } from 'react'
import { Form, Input, Select } from 'antd'

const vitaminsAndMineralsList = [
  {
    key: 'vitaminA',
    name: 'Vitamin A',
    defaultUnit: 'μg'
  },
  {
    key: 'vitaminD',
    name: 'Vitamin D',
    defaultUnit: 'μg'
  },
  {
    key: 'vitaminE',
    name: 'Vitamin E',
    defaultUnit: 'mg'
  },
  {
    key: 'vitaminK',
    name: 'Vitamin K',
    defaultUnit: 'μg'
  },
  {
    key: 'vitaminC',
    name: 'Vitamin C',
    defaultUnit: 'mg'
  },
  {
    key: 'thiamine',
    name: 'Thiamine',
    defaultUnit: 'mg'
  },
  {
    key: 'riboflavine',
    name: 'Riboflavine',
    defaultUnit: 'mg'
  },
  {
    key: 'niacine',
    name: 'Niacine',
    defaultUnit: 'mg'
  },
  {
    key: 'vitaminB6',
    name: 'Vitamin B6',
    defaultUnit: 'mg'
  },
  {
    key: 'folicAcid',
    name: 'Folic Acid',
    alternativeName: 'Folate',
    defaultUnit: 'μg'
  },
  {
    key: 'vitaminB12',
    name: 'Vitamin B12',
    defaultUnit: 'μg'
  },
  {
    key: 'biotine',
    name: 'Biotine',
    defaultUnit: 'μg'
  },
  {
    key: 'vitaminB5',
    name: 'Vitamin B5',
    alternativeName: 'Pantothetic Acid',
    defaultUnit: 'mg'
  },
  {
    key: 'potassium',
    name: 'Potassium',
    defaultUnit: 'mg'
  },
  {
    key: 'chloride',
    name: 'Chloride',
    defaultUnit: 'mg'
  },
  {
    key: 'calcium',
    name: 'Calcium',
    defaultUnit: 'mg'
  },
  {
    key: 'phosphorus',
    name: 'Phosphorus',
    defaultUnit: 'mg'
  },
  {
    key: 'magnesium',
    name: 'Magnesium',
    defaultUnit: 'mg'
  },
  {
    key: 'iron',
    name: 'Iron',
    defaultUnit: 'mg'
  },
  {
    key: 'zinc',
    name: 'Zinc',
    defaultUnit: 'mg'
  },
  {
    key: 'copper',
    name: 'Copper',
    defaultUnit: 'mg'
  },
  {
    key: 'manganese',
    name: 'Manganese',
    defaultUnit: 'mg'
  },
  {
    key: 'selenium',
    name: 'Selenium',
    defaultUnit: 'μg'
  },
  {
    key: 'molybdenum',
    name: 'Molybdenum',
    defaultUnit: 'μg'
  },
  {
    key: 'iodine',
    name: 'Iodine',
    defaultUnit: 'μg'
  },
  {
    key: 'choline',
    name: 'Choline',
    defaultUnit: 'mg'
  },
  {
    key: 'chromium',
    name: 'Chromium',
    defaultUnit: 'μg'
  },
]

export default function VitaminsAndMineralsSection () {
  const [vitaminsAndMinerals, setVitaminsAndMinerals] = useState({})
  return (
    <div>
      <h3>Section 3- Vitamins and Minerals</h3>
      <Form>
        {vitaminsAndMineralsList.map(vAndM => {
          const { key, name, defaultUnit, alternativeName } = vAndM
          const currentObj = vitaminsAndMinerals[key] || {}
          const label = `${name}${alternativeName ? ` (${alternativeName})` : ''}`
          return (
            <Form.Item key={key} label={label} className='form-item input-with-select-form-item'>
              <Input
                type="number"
                value={currentObj.quantity}
                onChange={(evt) => setVitaminsAndMinerals({
                  ...vitaminsAndMinerals,
                  [key]: {
                    ...currentObj,
                    quantity: evt.target.value
                  }
                })}
              />
              <Select
                showSearch
                value={currentObj.unit || defaultUnit}
                onChange={(unit) => setVitaminsAndMinerals({
                  ...vitaminsAndMinerals,
                  [key]: {
                    ...currentObj,
                    unit
                  }
                })}
              >
                <Select.Option value='mg'>mg</Select.Option>
                <Select.Option value='μg'>μg (or mcg)</Select.Option>
              </Select>
            </Form.Item>
          )
        })}
      </Form>
    </div>
  )
}
