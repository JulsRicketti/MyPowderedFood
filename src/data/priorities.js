import convertToChosenCurrency from '../util/convertToChosenCurrency'

export const priorities = {
  lowPrice: {
    name: 'Lowest Full Price',
    eval: (selectedProducts, { selectedCurrency, exchangeRate }) => {
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
    eval: (selectedProducts) => {
      return selectedProducts.reduce((lowestPrice, current) => {
        const lowestPricePerServing = lowestPrice.priceAndServings.fullPrice / lowestPrice.priceAndServings.servings
        const currentPricePerServing = current.priceAndServings.fullPrice / current.priceAndServings.servings
        return currentPricePerServing < lowestPricePerServing
          ? current
          : lowestPrice
      })
    }
  },
  lowPricePerCalories: {
    name: 'Lowest Price Per Calorie',
    eval: (selectedProducts) => {
      return selectedProducts.reduce((lowestPrice, current) => {
        const lowestPricePerCalories = (lowestPrice.priceAndServings.fullPrice / lowestPrice.priceAndServings.servings) / lowestPrice.calories
        const currentPricePerCalories = (current.priceAndServings.fullPrice / current.priceAndServings.servings) / current.calories
        return currentPricePerCalories < lowestPricePerCalories
          ? current
          : lowestPrice
      })
    }
  },
  lowCalories: {
    name: 'Low Calories',
    eval: (selectedProducts) => {
      return selectedProducts.reduce((lowestCalories, current) => {
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
    eval: (selectedProducts) => {
      return selectedProducts.reduce((highestCalories, current) => (
        current.calories > highestCalories.calories
          ? current
          : highestCalories
      ))
    }
  },
  lowSugar: {
    name: 'Low Sugar',
    eval: (selectedProducts) => {
      return selectedProducts.reduce((lowestSugar, current) => (
        current.macronutrients.carbohydrates.sugars < lowestSugar.macronutrients.carbohydrates.sugars
          ? current
          : lowestSugar
      ))
    }
  },
  lowCarb: {
    name: 'Low Carbs',
    eval: (selectedProducts) => {
      return selectedProducts.reduce((lowestCarbs, current) => (
        current.macronutrients.carbohydrates.total < lowestCarbs.macronutrients.carbohydrates.total
          ? current
          : lowestCarbs
      ))
    }
  },
  highFiber: {
    name: 'High Fiber',
    eval: (selectedProducts) => {
      return selectedProducts.reduce((highestFiber, current) => (
        current.macronutrients.fibre > highestFiber.macronutrients.fibre
          ? current
          : highestFiber
      ))
    }
  },
  highProtein: {
    name: 'High Protein',
    eval: (selectedProducts) => {
      return selectedProducts.reduce((highestProtein, current) => (
        current.macronutrients.protein > highestProtein.macronutrients.protein
          ? current
          : highestProtein
      ))
    }
  },
  lowSodium: {
    name: 'Low Sodium',
    eval: (selectedProducts) => {
      return selectedProducts.reduce((lowestSodium, current) => (
        current.macronutrients.sodium < lowestSodium.macronutrients.sodium
          ? current
          : lowestSodium
      ))
    }
  },
  lowFat: {
    name: 'Low Fat',
    eval: (selectedProducts) => {
      return selectedProducts.reduce((lowestFat, current) => (
        current.macronutrients.fat.total < lowestFat.macronutrients.fat.total
          ? current
          : lowestFat
      ))
    }
  },
  highFat: {
    name: 'High Fat',
    eval: (selectedProducts) => {
      return selectedProducts.reduce((highestFat, current) => (
        current.macronutrients.fat.total > highestFat.macronutrients.fat.total
          ? current
          : highestFat
      ))
    }
  },
  multiVitaminsAndMinerals: {
    name: 'Most Vitamins and Minerals',
    eval: (selectedProducts) => {
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
    eval: (selectedProducts) => {
      return selectedProducts.reduce((mostAccomodatedRestrictions, current) => (
        current.accomodatedRestrictions.length > mostAccomodatedRestrictions.accomodatedRestrictions.length
          ? current
          : mostAccomodatedRestrictions
      ))
    }
  }
}
