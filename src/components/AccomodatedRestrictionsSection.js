import React from 'react'
import PropTypes from 'prop-types'
import { Form, Select } from 'antd'
import { dietaryRestrictions } from '../data'
import { alphabeticalSort } from '../util'

export default function AccomodatedRestrictionsSection ({
  accomodatedRestrictions, setAccomodatedRestrictions
}) {
  const dietaryRestrictionsArray = Object.keys(dietaryRestrictions)

  return (
    <div>
      <h3>Section 4- Accomodated Restrictions Sections</h3>
      <Form label='Accomodated Restrictions'>
        <Form.Item label='Accomodated Restrictions' className='form-item'>

          <Select
            showSearch
            allowClear
            mode='tags'
            placeholder='Select all that apply and add any missing ones'
            value={accomodatedRestrictions}
            onChange={(restrictions) => {
              setAccomodatedRestrictions(restrictions)
            }}
          >
            {dietaryRestrictionsArray
              .sort(alphabeticalSort)
              .map((restrictionKey) => (
                <Select.Option
                  key={restrictionKey}
                  value={restrictionKey}
                >
                  {dietaryRestrictions[restrictionKey].name}
                </Select.Option>
              ))}

          </Select>
        </Form.Item>
      </Form>
    </div>
  )
}

AccomodatedRestrictionsSection.propTypes = {
  accomodatedRestrictions: PropTypes.arrayOf(PropTypes.string),
  setAccomodatedRestrictions: PropTypes.func.isRequired
}
