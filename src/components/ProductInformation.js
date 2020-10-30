import React from 'react'
import PropTypes from 'prop-types'
import { Card, Divider } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { dietaryRestrictions } from '../data/dietaryRestrictions'
import convertToProperUnit from '../util/convertToProperUnit'
import alphabeticalSort from '../util/alphabeticalSort'

export default function ProductInformation ({ food = {}, vitaminsAndMineralsUnit = 'mg' }) {
  const { accomodatedRestrictions, macronutrients, vitaminsAndMinerals, priceAndServings } = food
  const vitaminsAndMineralsArray = Object.keys(vitaminsAndMinerals)

  return (
    <>
      <Card type='inner' title={food.brand} style={{ width: 500 }}>
        <p><strong>Calories: {food.calories}</strong></p>
        <p><strong>Full Price:</strong> CAD ${priceAndServings.fullPrice}*</p>
        <p><strong>Servings:</strong> {priceAndServings.servings}</p>
        <p><strong>Price per recommended serving:</strong> CAD ${(priceAndServings.fullPrice / food.priceAndServings.servings).toFixed(2)}*</p>
        <p><small>* Prices do NOT include shipping fees</small></p>
      </Card>
      <Card style={{ height: 300 }}>
        <h3>Accomodated  Dietary Restrictions</h3>
        {accomodatedRestrictions
          .sort(alphabeticalSort)
          .map((restriction) => {
            return (
              <p key={restriction}>
                <CheckCircleOutlined style={{ color: 'green' }}/> {dietaryRestrictions[restriction].name}
              </p>
            )
          })}
      </Card>
      <Card>
        <h3>Macronutrients</h3>

        <div>
          <h4>Fats</h4>
          <p><strong>Total:</strong> {macronutrients.fat.total}g</p>
          <p><strong>Saturated:</strong> {macronutrients.fat.saturated}g</p>
        </div>
        <Divider/>

        <div>
          <h4>Carbohydrates</h4>
          <p><strong>Total:</strong> {macronutrients.fat.total}g</p>
          <p><strong>Sugars:</strong> {macronutrients.fat.saturated}g</p>
        </div>

        <Divider/>
        <div>
          <h4>Protein: {macronutrients.protein}g</h4>
        </div>

        <Divider/>
        <div>
          <h4>Fibre: {macronutrients.fibre}g</h4>
        </div>
        <Divider/>

        <div>
          <h4>Sodium: {macronutrients.sodium}g</h4>
        </div>
      </Card>
      <Card>
        <h3>Vitamins and Minerals</h3>
        {vitaminsAndMineralsArray.map((key, index) => {
          const { name, unit, quantity, dailyPercentage } = vitaminsAndMinerals[key]
          const isLastIndex = index === (vitaminsAndMineralsArray.length - 1)
          const convertedQuantity = convertToProperUnit(vitaminsAndMineralsUnit, unit, quantity)
          return (
            <div key={key}>
              <h4>{name}:</h4>
              <div><strong>{convertedQuantity} {vitaminsAndMineralsUnit} ({dailyPercentage}%)</strong></div>
              {isLastIndex ? null : <Divider/>}
            </div>
          )
        })}
      </Card>
    </>
  )
}

ProductInformation.propTypes = {
  food: PropTypes.object.isRequired,
  vitaminsAndMineralsUnit: PropTypes.string
}
