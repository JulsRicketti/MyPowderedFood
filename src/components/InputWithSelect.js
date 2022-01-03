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
  selectShowSearch = false,
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
        showSearch={selectShowSearch}
        value={selectValue}
        onChange={selectOnChange}
      >
        {selectOptions.map(option => (
          typeof option !== 'object'
            ? <Select.Option key={option} value={option.value}>{option}</Select.Option>
            : <Select.Option key={option.value} value={option.value}>{option.label || option.value}</Select.Option>
        ))}
      </Select>
    </Form.Item>

  )
}

InputWithSelect.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  inputOnChange: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
  selectOnChange: PropTypes.func.isRequired,
  selectOptions: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string,
      }),
      PropTypes.string,
      PropTypes.number,
    ]),
  ),
  selectShowSearch: PropTypes.bool,
  formItemClasses: PropTypes.string
}
