import React, { useState } from 'react'
import { Form, Input, Select } from 'antd'
import InputWithSelect from './InputWithSelect'

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

const unitOptions = [
  {
    value: 'mg',
    label: 'mg',
  },
  {
    value: 'μg',
    label: 'μg (or mcg)',
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
            <InputWithSelect
              key={key}
              label={label}
              inputType='number'
              inputValue={currentObj.quantity}
              inputOnChange={(evt) => setVitaminsAndMinerals({
                ...vitaminsAndMinerals,
                [key]: {
                  ...currentObj,
                  quantity: evt.target.value
                }
              })}
              selectValue={currentObj.unit || defaultUnit}
              selectOnChange={(unit) => setVitaminsAndMinerals({
                ...vitaminsAndMinerals,
                [key]: {
                  ...currentObj,
                  unit
                }
              })}
              selectOptions={unitOptions}
            />
          )
        })}
      </Form>
    </div>
  )
}
