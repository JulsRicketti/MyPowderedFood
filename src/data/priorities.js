import { powderedFood } from './powderedFood'

export const priorities = {
  lowPrice: {
    name: 'Lowest Full Price',
    eval: () => {
      return powderedFood.reduce((lowestPrice, current) => (
        current.priceAndServings.fullPrice < lowestPrice.priceAndServings.fullPrice
          ? current
          : lowestPrice
      ))
    }
  },
  lowPricePerServing: {
    name: 'Lowest Price Per Serving',
    eval: () => {
      return powderedFood.reduce((lowestPrice, current) => {
        const lowestPricePerServing = lowestPrice.priceAndServings.fullPrice / lowestPrice.priceAndServings.servings
        const currentPricePerServing = current.priceAndServings.fullPrice / current.priceAndServings.servings
        return currentPricePerServing < lowestPricePerServing
          ? current
          : lowestPrice
      })
    }
  },
  lowCalories: {
    name: 'Low Calories',
    eval: () => {
      return powderedFood.reduce((lowestCalories, current) => {
        if (current.calories === lowestCalories.calories) {
          return Array.isArray(lowestCalories)
            ? [...lowestCalories, current]
            : [lowestCalories, current]
        }
        const lc = Array.isArray(lowestCalories.calories) ? lowestCalories[0].calories : lowestCalories.calories
        return (
          current.calories < lc
            ? current
            : lowestCalories
        )
      })
    }
  },
  highCalories: {
    name: 'High Calories',
    eval: () => {
      return powderedFood.reduce((highestCalories, current) => (
        current.calories > highestCalories.calories
          ? current
          : highestCalories
      ))
    }
  },
  lowSugar: {
    name: 'Low Sugar',
    eval: () => {
      return powderedFood.reduce((lowestSugar, current) => (
        current.macronutrients.carbohydrates.sugars < lowestSugar.macronutrients.carbohydrates.sugars
          ? current
          : lowestSugar
      ))
    }
  },
  highFiber: {
    name: 'High Fiber',
    eval: () => {
      return powderedFood.reduce((highestFiber, current) => (
        current.macronutrients.fibre > highestFiber.macronutrients.fibre
          ? current
          : highestFiber
      ))
    }
  },
  highProtein: {
    name: 'High Protein',
    eval: () => {
      return powderedFood.reduce((highestProtein, current) => (
        current.macronutrients.fibre > highestProtein.macronutrients.fibre
          ? current
          : highestProtein
      ))
    }
  },
  lowSodium: {
    name: 'Low Sodium',
    eval: () => {
      return powderedFood.reduce((lowestSodium, current) => (
        current.macronutrients.sodium < lowestSodium.macronutrients.sodium
          ? current
          : lowestSodium
      ))
    }
  },
  lowFat: {
    name: 'Low Fat',
    eval: () => {
      return powderedFood.reduce((lowestFat, current) => (
        current.macronutrients.fat.total < lowestFat.macronutrients.fat.total
          ? current
          : lowestFat
      ))
    }
  },
  highFat: {
    name: 'High Fat',
    eval: () => {
      return powderedFood.reduce((highestFat, current) => (
        current.macronutrients.fat.total > highestFat.macronutrients.fat.total
          ? current
          : highestFat
      ))
    }
  },
  multiVitaminsAndMinerals: {
    name: 'Most Vitamins and Minerals',
    eval: () => {
      // Current heurestic: just calculate the absolute total
      return powderedFood.reduce((mostVitaminsAndMinerals, current) => {
        const currentTotalVitaminsAndMinerals = Object.keys(current.vitaminsAndMinerals).reduce((c, key) => {
          if (typeof current.vitaminsAndMinerals[key].quantity === 'number') {
            return c + current.vitaminsAndMinerals[key].quantity
          } else {
            return c
          }
        }, 0)
        const mostVitaminsAndMineralsWinner = Object.keys(mostVitaminsAndMinerals.vitaminsAndMinerals).reduce((c, key) => {
          if (typeof mostVitaminsAndMinerals.vitaminsAndMinerals[key].quantity === 'number') {
            return c + mostVitaminsAndMinerals.vitaminsAndMinerals[key].quantity
          } else {
            return c
          }
        }, 0)
        return (
          currentTotalVitaminsAndMinerals > mostVitaminsAndMineralsWinner
            ? current
            : mostVitaminsAndMinerals
        )
      })
    }

  },
  mostAccomodatedRestrictions: {
    name: 'Most Accomodated Restrictions',
    eval: () => {
      return powderedFood.reduce((mostAccomodatedRestrictions, current) => (
        current.accomodatedRestrictions.length > mostAccomodatedRestrictions.accomodatedRestrictions.length
          ? current
          : mostAccomodatedRestrictions
      ))
    }
  }
}
