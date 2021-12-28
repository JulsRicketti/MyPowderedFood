import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import ProductSection from './ProductSection'

export default function FoodEditorModal ({ visible }) {
  return (
    <Modal title="Add food" visible={true}>
      <ProductSection/>
    </Modal>
  )
}

FoodEditorModal.propTypes = {
  visible: PropTypes.bool.isRequired,
}
