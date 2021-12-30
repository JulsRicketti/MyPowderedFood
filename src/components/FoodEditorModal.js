import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import ProductSection from './ProductSection'

const sections = ['product', 'macronutrients', 'vitaminsAndMinerals']

export default function FoodEditorModal ({ visible }) {
  // 1- product, 2- macronutrients, 3- vitaminsAndMinerals
  const [section, setSection] = useState(0)
  const buttons = (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        disabled={!section}
        onClick={() => setSection(section - 1)}
        icon={<ArrowLeftOutlined />}
      />
      <Button
        disabled={section === sections.length - 1}
        onClick={() => setSection(section + 1)}
        icon={<ArrowRightOutlined />}
      />
    </div>
  )
  return (
    <Modal title="Add food" visible={true}>
      <ProductSection/>
      {buttons}
    </Modal>
  )
}

FoodEditorModal.propTypes = {
  visible: PropTypes.bool.isRequired,
}
