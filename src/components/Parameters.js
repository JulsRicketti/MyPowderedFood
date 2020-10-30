import React from 'react'
import PropTypes from 'prop-types'
import { Col, Select } from 'antd'
import { dietaryRestrictions, priorities } from '../data'
import { alphabeticalSort } from '../util'

export default function Parameters ({ setSelectedDietaryRestrictions, setSelectedPriority }) {
  const dietaryRestrictionsArray = Object.keys(dietaryRestrictions)
  const nutritionalPrioritiesArray = Object.keys(priorities)

  return (
    <>
      <Col span={12} style={{ backgroundColor: 'red' }}>
        <div style={{ width: '100%' }}>
          <Select
            style={{ width: '100%' }}
            mode='multiple'
            allowClear
            placeholder='Dietary Restrictions'
            onChange={(value) => {
              setSelectedDietaryRestrictions(value)
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
        </div>
      </Col>
      <Col span={12}>
        <Select
          style={{ width: '100%' }}
          allowClear
          placeholder='Prioritized Items'
          onChange={(value) => {
            console.warn('VALUE', value)
            setSelectedPriority(value)
          }}
        >
          {nutritionalPrioritiesArray
            .sort(alphabeticalSort)
            .map((restrictionKey) => (
              <Select.Option
                key={restrictionKey}
                value={restrictionKey}
              >
                {priorities[restrictionKey].name}
              </Select.Option>
            ))}
        </Select>
      </Col>
    </>
  )
}

Parameters.propTypes = {
  setSelectedDietaryRestrictions: PropTypes.func.isRequired,
  setSelectedPriority: PropTypes.func.isRequired
}
