import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import ProductSection from './ProductSection'
import MacronutrientsSection from './MacronutrientsSection'

const sections = ['product', 'macronutrients', 'vitaminsAndMinerals']

export default function FoodEditorModal ({ visible }) {
  // 0- product, 1- macronutrients, 2- vitaminsAndMinerals, 3- accomadated restrictions
  const [section, setSection] = useState(1)
  const buttons = (
    <div style={{ margin: 10, display: 'flex', justifyContent: 'space-between' }}>
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
    <Modal title="Add food" visible={true} className='add-food-modal'>
      {section === 0 && <ProductSection/>}
      {section === 1 && <MacronutrientsSection/>}
      {buttons}
    </Modal>
  )
}

FoodEditorModal.propTypes = {
  visible: PropTypes.bool.isRequired,
}
