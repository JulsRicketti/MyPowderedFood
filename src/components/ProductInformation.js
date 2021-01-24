import React from 'react'
import PropTypes from 'prop-types'
import { Card, Divider } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { dietaryRestrictions } from '../data'
import { alphabeticalSort, convertToProperUnit } from '../util'

export default function ProductInformation ({ food = {}, vitaminsAndMineralsUnit = 'mg', selectedDietaryRestrictions, isWinner }) {
  const { accomodatedRestrictions, macronutrients, vitaminsAndMinerals, priceAndServings } = food
  const vitaminsAndMineralsArray = Object.keys(vitaminsAndMinerals)

  const sharedStyle = {
    backgroundColor: isWinner ? '#75bad46e' : ''
  }

  const accomadatedRestrictionsComponent = selectedDietaryRestrictions && selectedDietaryRestrictions.length ? (
    <Card style={{ height: 100 + (30 * selectedDietaryRestrictions.length), ...sharedStyle }}>
      <h3>Accomodated  Dietary Restrictions</h3>
      {selectedDietaryRestrictions
        .sort(alphabeticalSort)
        .map((restriction) => {
          const accomadatesRestriction = accomodatedRestrictions.includes(restriction)
          return (
            <p key={restriction} style={{ color: accomadatesRestriction ? '' : 'red' }}>
              {
                accomadatesRestriction
                  ? <CheckCircleOutlined style={{ color: 'green' }}/>
                  : <CloseCircleOutlined style={{ color: 'red' }}/>
              }
              &nbsp;{dietaryRestrictions[restriction].name}
            </p>
          )
        })}
    </Card>
  ) : null

  return (
    <>
      <Card type='inner' title={food.brand} style={sharedStyle}>
        <p><strong>Calories per serving: {food.calories}</strong></p>
        <p><strong>Full Price:</strong> CAD ${priceAndServings.fullPrice}</p>
        <p><strong>Servings:</strong> {priceAndServings.servings}</p>
        <p><strong>Price per serving:</strong> CAD ${(priceAndServings.fullPrice / food.priceAndServings.servings).toFixed(2)}</p>
        <p><strong>Price per calorie:</strong> CAD ${((priceAndServings.fullPrice / food.priceAndServings.servings) / food.calories).toFixed(5)}</p>
      </Card>
      {accomadatedRestrictionsComponent}
      <Card style={sharedStyle}>
        <h3>Macronutrients</h3>

        <div>
          <h4>Fats</h4>
          <p><strong>Total:</strong> {macronutrients.fat.total}g</p>
          <p><strong>Saturated:</strong> {macronutrients.fat.saturated}g</p>
        </div>
        <Divider/>

        <div>
          <h4>Carbohydrates</h4>
          <p><strong>Total:</strong> {macronutrients.carbohydrates.total}g</p>
          <p><strong>Sugars:</strong> {macronutrients.carbohydrates.sugars}g</p>
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
      <Card style={sharedStyle}>
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
  vitaminsAndMineralsUnit: PropTypes.string,
  selectedDietaryRestrictions: PropTypes.array,
  isWinner: PropTypes.bool
}
