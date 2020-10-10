import React from 'react'
import PropTypes from 'prop-types'
import { Card, Divider } from 'antd'
import convertToProperUnit from '../util/convertToProperUnit'

export default function NutritionInformation ({ food = {}, vitaminsAndMineralsUnit = 'mg' }) {
  const { macronutrients, vitaminsAndMinerals } = food
  return (
    <>
      <Card title={food.brand} style={{ width: 300 }}>
        <strong>Calories: {food.calories}</strong>
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
        {Object.keys(vitaminsAndMinerals).map((key) => {
          const { name, unit, quantity, dailyPercentage } = vitaminsAndMinerals[key]

          const convertedQuantity = convertToProperUnit(vitaminsAndMineralsUnit, unit, quantity)
          return (
            <div key={key}>
              <h4>{name}:</h4>
              <div><strong>{convertedQuantity} {vitaminsAndMineralsUnit} ({dailyPercentage}%)</strong></div>
              <Divider/>
            </div>
          )
        })}
      </Card>
    </>
  )
}

NutritionInformation.propTypes = {
  food: PropTypes.object.isRequired,
  vitaminsAndMineralsUnit: PropTypes.string
}
