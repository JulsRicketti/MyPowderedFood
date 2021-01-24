import React from 'react'
import PropTypes from 'prop-types'
import { Col, Select } from 'antd'
import { dietaryRestrictions, priorities } from '../data'
import { alphabeticalSort } from '../util'

export default function Parameters ({ setSelectedDietaryRestrictions, setSelectedPriority }) {
  const dietaryRestrictionsArray = Object.keys(dietaryRestrictions)
  const prioritiesArray = Object.keys(priorities)

  const headerStyle = { display: 'flex', justifyContent: 'center' }

  return (
    <>
      <Col xs={24} sm={24} lg={12}>
        <div style={headerStyle}>
          <h2>Dietary Priorities</h2>
        </div>
        <Select
          showSearch
          style={{ width: '100%' }}
          allowClear
          placeholder='Priorities'
          onChange={(value) => {
            setSelectedPriority(value)
          }}
        >
          {prioritiesArray
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
      <Col xs={24} sm={24} lg={12}>
        <div style={headerStyle}>
          <h2>Dietary Restrictions</h2>
        </div>
        <Select
          showSearch
          style={{ width: '100%' }}
          mode='multiple'
          allowClear
          placeholder='Restrictions'
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
      </Col>
    </>
  )
}

Parameters.propTypes = {
  setSelectedDietaryRestrictions: PropTypes.func.isRequired,
  setSelectedPriority: PropTypes.func.isRequired
}
