import convertToChosenCurrency from '../util/convertToChosenCurrency'

export const priorities = (selectedProducts = [], { selectedCurrency = 'USD', exchangeRate = {} } = {}) => ({
  lowPrice: {
    name: 'Lowest Full Price',
    eval: () => {
      return selectedProducts.reduce((lowestPrice, current) => {
        const currentPrice = convertToChosenCurrency(selectedCurrency, exchangeRate, current.priceAndServings)
        const lowestPricePrice = convertToChosenCurrency(selectedCurrency, exchangeRate, lowestPrice.priceAndServings)

        return (
          currentPrice < lowestPricePrice
            ? current
            : lowestPrice
        )
      })
    }
  },
  lowPricePerServing: {
    name: 'Lowest Price Per Serving',
    eval: () => {
      return selectedProducts.reduce((lowestPrice, current) => {
        const lowestPricePerServing = convertToChosenCurrency(selectedCurrency, exchangeRate, lowestPrice.priceAndServings) / lowestPrice.priceAndServings.servings
        const currentPricePerServing = convertToChosenCurrency(selectedCurrency, exchangeRate, current.priceAndServings) / current.priceAndServings.servings

        return currentPricePerServing < lowestPricePerServing
          ? current
          : lowestPrice
      })
    }
  },
  lowPricePerCalories: {
    name: 'Lowest Price Per Calorie',
    eval: () => {
      return selectedProducts.reduce((lowestPrice, current) => {
        const lowestFullPrice = convertToChosenCurrency(selectedCurrency, exchangeRate, lowestPrice.priceAndServings)
        const lowestPricePerCalories = (lowestFullPrice / lowestPrice.priceAndServings.servings) / lowestPrice.calories
        const currentFullPrice = convertToChosenCurrency(selectedCurrency, exchangeRate, current.priceAndServings)
        const currentPricePerCalories = (currentFullPrice / current.priceAndServings.servings) / current.calories

        return currentPricePerCalories < lowestPricePerCalories
          ? current
          : lowestPrice
      })
    }
  },
  lowCalories: {
    name: 'Low Calories',
    eval: () => {
      return selectedProducts.reduce((lowestCalories, current) => {
        if (Array.isArray(lowestCalories) ? lowestCalories[0].calories === current.calories : current.calories === lowestCalories.calories) {
          return Array.isArray(lowestCalories)
            ? [...lowestCalories, current]
            : [lowestCalories, current]
        }
        const lc = Array.isArray(lowestCalories) ? lowestCalories[0] : lowestCalories
        return (
          current.calories < lc.calories
            ? current
            : lowestCalories
        )
      })
    }
  },
  highCalories: {
    name: 'High Calories',
    eval: () => {
      return selectedProducts.reduce((highestCalories, current) => {
        if (Array.isArray(highestCalories) ? highestCalories[0].calories === current.calories : current.calories === highestCalories.calories) {
          return Array.isArray(highestCalories)
            ? [...highestCalories, current]
            : [highestCalories, current]
        }
        const hc = Array.isArray(highestCalories) ? highestCalories[0] : highestCalories
        return (
          current.calories > hc.calories
            ? current
            : highestCalories
        )
      })
    }
  },
  lowSugar: {
    name: 'Low Sugar',
    eval: () => {
      return selectedProducts.reduce((lowestSugar, current) => (
        current.macronutrients.carbohydrates.sugars < lowestSugar.macronutrients.carbohydrates.sugars
          ? current
          : lowestSugar
      ))
    }
  },
  lowCarb: {
    name: 'Low Carbs',
    eval: () => {
      return selectedProducts.reduce((lowestCarbs, current) => (
        current.macronutrients.carbohydrates.total < lowestCarbs.macronutrients.carbohydrates.total
          ? current
          : lowestCarbs
      ))
    }
  },
  highFiber: {
    name: 'High Fiber',
    eval: () => {
      return selectedProducts.reduce((highestFiber, current) => (
        current.macronutrients.fibre > highestFiber.macronutrients.fibre
          ? current
          : highestFiber
      ))
    }
  },
  highProtein: {
    name: 'High Protein',
    eval: () => {
      return selectedProducts.reduce((highestProtein, current) => (
        current.macronutrients.protein > highestProtein.macronutrients.protein
          ? current
          : highestProtein
      ))
    }
  },
  lowSodium: {
    name: 'Low Sodium',
    eval: () => {
      return selectedProducts.reduce((lowestSodium, current) => (
        current.macronutrients.sodium < lowestSodium.macronutrients.sodium
          ? current
          : lowestSodium
      ))
    }
  },
  lowFat: {
    name: 'Low Fat',
    eval: () => {
      return selectedProducts.reduce((lowestFat, current) => (
        current.macronutrients.fat.total < lowestFat.macronutrients.fat.total
          ? current
          : lowestFat
      ))
    }
  },
  highFat: {
    name: 'High Fat',
    eval: () => {
      return selectedProducts.reduce((highestFat, current) => (
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
      return selectedProducts.reduce((mostVitaminsAndMinerals, current) => {
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
      return selectedProducts.reduce((mostAccomodatedRestrictions, current) => (
        current.accomodatedRestrictions.length > mostAccomodatedRestrictions.accomodatedRestrictions.length
          ? current
          : mostAccomodatedRestrictions
      ))
    }
  }
})
