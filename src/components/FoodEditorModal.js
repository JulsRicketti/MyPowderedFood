import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import ProductSection from './ProductSection'
import MacronutrientsSection from './MacronutrientsSection'
import VitaminsAndMineralsSection from './VitaminsAndMineralsSection'
import AccomodatedRestrictionsSection from './AccomodatedRestrictionsSection'

export default function FoodEditorModal ({ visible, onClose }) {
  // 0- product, 1- macronutrients, 2- vitaminsAndMinerals, 3- accomadated restrictions
  const [section, setSection] = useState(0)
  const buttons = (
    <div className='modal-nav-btns'>
      <Button
        disabled={!section}
        onClick={() => setSection(section - 1)}
        icon={<ArrowLeftOutlined />}
      />
      <Button
        disabled={section === 3}
        onClick={() => setSection(section + 1)}
        icon={<ArrowRightOutlined />}
      />
    </div>
  )
  return (
    <Modal title="Add food" visible={visible} className='add-food-modal' onCancel={onClose}>
      {section === 0 && <ProductSection/>}
      {section === 1 && <MacronutrientsSection/>}
      {section === 2 && <VitaminsAndMineralsSection/>}
      {section === 3 && <AccomodatedRestrictionsSection/>}
      {buttons}
    </Modal>
  )
}

FoodEditorModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
