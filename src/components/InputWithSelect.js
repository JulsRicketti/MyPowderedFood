import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select } from 'antd'

export default function InputWithSelect ({
  label,
  inputType,
  inputValue,
  inputOnChange,
  selectValue,
  selectOnChange,
  selectOptions,
  showSelectSearch = false,
  formItemClasses = 'form-item input-with-select-form-item'
}) {
  return (
    <Form.Item label={label} className={formItemClasses}>
      <Input
        type={inputType || 'text'}
        value={inputValue}
        onChange={inputOnChange}
      />
      <Select
        showSearch={showSelectSearch}
        value={selectValue}
        onChange={selectOnChange}
      >
        {selectOptions.map(option => (
          <Select.Option key={option.value} value={option.value}>{option.label || option.value}</Select.Option>
        ))}
      </Select>
    </Form.Item>

  )
}

InputWithSelect.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputValue: PropTypes.oneOf(PropTypes.string, PropTypes.number).isRequired,
  inputOnChange: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
  selectOnChange: PropTypes.func.isRequired,
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
  })),
  showSelectSearch: PropTypes.bool,
  formItemClasses: PropTypes.string
}
