import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import ProductSection from './ProductSection'
import MacronutrientsSection from './MacronutrientsSection'
import VitaminsAndMineralsSection from './VitaminsAndMineralsSection'
import AccomodatedRestrictionsSection from './AccomodatedRestrictionsSection'
import addFood from '../api/addFood'

export default function FoodEditorModal ({ visible, onClose }) {
  // 0- product, 1- macronutrients, 2- vitaminsAndMinerals, 3- accomodated restrictions
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
  // Setters for the modal
  // Product Section
  const [brand, setBrand] = useState('')
  const [productName, setProductName] = useState('')
  const [website, setWebsite] = useState('')
  const [note, setNote] = useState('')
  const [calories, setCalories] = useState(0)
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState('')
  const [servings, setServings] = useState('')

  // Macronutrients
  const [fats, setFats] = useState({})
  const [carbohydrates, setCarbohydrates] = useState({})
  const [protein, setProtein] = useState('')
  const [fibre, setFibre] = useState('')
  const [sodium, setSodium] = useState('')

  // Vitamins and minerals
  const [vitaminsAndMinerals, setVitaminsAndMinerals] = useState({})

  // Accomodated Restrictions
  const [accomodatedRestrictions, setAccomodatedRestrictions] = useState([])

  const okBtnEnabled = Boolean(
    brand &&
    productName &&
    website &&
    calories &&
    currency &&
    price &&
    servings &&
    Object.keys(fats).length &&
    Object.keys(carbohydrates).length &&
    protein &&
    fibre &&
    sodium &&
    Object.keys(vitaminsAndMinerals).length
  )

  console.table({
    brand,
    productName,
    website
  })

  const onOk = () => {
    const data = {
      brand,
      product: productName,
      site: website,
      calories,
      priceAndServings: {
        fullPrice: {
          [currency]: price
        },
        primaryCurrency: currency,
        servings
      },
      accomodatedRestrictions,
      macronutrients: {
        fat: fats,
        carbohydrates,
        protein,
        fibre,
        sodium
      },
      vitaminsAndMinerals
    }

    addFood(data)
  }

  return (
    <Modal
      title="Add food"
      visible={visible}
      className='add-food-modal'
      onOk={onOk}
      okButtonProps={{
        disabled: !okBtnEnabled
      }}
      onCancel={onClose}
    >
      {section === 0 && (
        <ProductSection
          brand={brand}
          setBrand={setBrand}
          productName={productName}
          setProductName={setProductName}
          website={website}
          setWebsite={setWebsite}
          note={note}
          setNote={setNote}
          calories={calories}
          setCalories={setCalories}
          price={price}
          setPrice={setPrice}
          currency={currency}
          setCurrency={setCurrency}
          servings={servings}
          setServings={setServings}

        />
      )}
      {section === 1 && (
        <MacronutrientsSection
          fats={fats}
          setFats={setFats}
          carbohydrates={carbohydrates}
          setCarbohydrates={setCarbohydrates}
          protein={protein}
          setProtein={setProtein}
          fibre={fibre}
          setFibre={setFibre}
          sodium={sodium}
          setSodium={setSodium}
        />
      )}
      {section === 2 && (
        <VitaminsAndMineralsSection
          vitaminsAndMinerals={vitaminsAndMinerals}
          setVitaminsAndMinerals={setVitaminsAndMinerals}
        />
      )}
      {section === 3 && (
        <AccomodatedRestrictionsSection
          accomodatedRestrictions={accomodatedRestrictions}
          setAccomodatedRestrictions={setAccomodatedRestrictions}
        />
      )}
      {buttons}
    </Modal>
  )
}

FoodEditorModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
