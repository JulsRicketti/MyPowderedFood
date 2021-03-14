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
      return selectedProducts.reduce((lowestSugar, current) => {
        if (
          Array.isArray(lowestSugar)
            ? lowestSugar[0].macronutrients.carbohydrates.sugars === current.macronutrients.carbohydrates.sugars
            : current.macronutrients.carbohydrates.sugars === lowestSugar.macronutrients.carbohydrates.sugars
        ) {
          return Array.isArray(lowestSugar)
            ? [...lowestSugar, current]
            : [lowestSugar, current]
        }
        const ls = Array.isArray(lowestSugar) ? lowestSugar[0] : lowestSugar
        return (
          current.macronutrients.carbohydrates.sugars < ls.macronutrients.carbohydrates.sugars
            ? current
            : lowestSugar
        )
      })
    }
  },
  lowCarb: {
    name: 'Low Carbs',
    eval: () => {
      return selectedProducts.reduce((lowestCarbs, current) => {
        if (
          Array.isArray(lowestCarbs)
            ? lowestCarbs[0].macronutrients.carbohydrates.total === current.macronutrients.carbohydrates.total
            : current.macronutrients.carbohydrates.total === lowestCarbs.macronutrients.carbohydrates.total
        ) {
          return Array.isArray(lowestCarbs)
            ? [...lowestCarbs, current]
            : [lowestCarbs, current]
        }
        const lc = Array.isArray(lowestCarbs) ? lowestCarbs[0] : lowestCarbs
        return (
          current.macronutrients.carbohydrates.total < lc.macronutrients.carbohydrates.total
            ? current
            : lowestCarbs
        )
      })
    }
  },
  highFiber: {
    name: 'High Fiber',
    eval: () => {
      return selectedProducts.reduce((highestFiber, current) => {
        if (
          Array.isArray(highestFiber)
            ? highestFiber[0].macronutrients.fibre === current.macronutrients.fibre
            : current.macronutrients.fibre === highestFiber.macronutrients.fibre
        ) {
          return Array.isArray(highestFiber)
            ? [...highestFiber, current]
            : [highestFiber, current]
        }
        const hf = Array.isArray(highestFiber) ? highestFiber[0] : highestFiber
        return (
          current.macronutrients.fibre > hf.macronutrients.fibre
            ? current
            : highestFiber
        )
      })
    }
  },
  highProtein: {
    name: 'High Protein',
    eval: () => {
      return selectedProducts.reduce((highestProtein, current) => {
        if (
          Array.isArray(highestProtein)
            ? highestProtein[0].macronutrients.protein === current.macronutrients.protein
            : current.macronutrients.protein === highestProtein.macronutrients.protein
        ) {
          return Array.isArray(highestProtein)
            ? [...highestProtein, current]
            : [highestProtein, current]
        }
        const hp = Array.isArray(highestProtein) ? highestProtein[0] : highestProtein
        return (
          current.macronutrients.protein > hp.macronutrients.protein
            ? current
            : highestProtein
        )
      })
    }
  },
  lowSodium: {
    name: 'Low Sodium',
    eval: () => {
      return selectedProducts.reduce((lowestSodium, current) => {
        if (
          Array.isArray(lowestSodium)
            ? lowestSodium[0].macronutrients.sodium === current.macronutrients.sodium
            : current.macronutrients.sodium === lowestSodium.macronutrients.sodium
        ) {
          return Array.isArray(lowestSodium)
            ? [...lowestSodium, current]
            : [lowestSodium, current]
        }
        const ls = Array.isArray(lowestSodium) ? lowestSodium[0] : lowestSodium
        return (
          current.macronutrients.sodium < ls.macronutrients.sodium
            ? current
            : lowestSodium
        )
      })
    }
  },
  lowFat: {
    name: 'Low Fat',
    eval: () => {
      return selectedProducts.reduce((lowestFat, current) => {
        if (
          Array.isArray(lowestFat)
            ? lowestFat[0].macronutrients.fat.total === current.macronutrients.fat.total
            : current.macronutrients.fat.total === lowestFat.macronutrients.fat.total
        ) {
          return Array.isArray(lowestFat)
            ? [...lowestFat, current]
            : [lowestFat, current]
        }
        const lf = Array.isArray(lowestFat) ? lowestFat[0] : lowestFat
        return (
          current.macronutrients.fat.total < lf.macronutrients.fat.total
            ? current
            : lowestFat
        )
      })
    }
  },
  highFat: {
    name: 'High Fat',
    eval: () => {
      return selectedProducts.reduce((highestFat, current) => {
        if (
          Array.isArray(highestFat)
            ? highestFat[0].macronutrients.fat.total === current.macronutrients.fat.total
            : current.macronutrients.fat.total === highestFat.macronutrients.fat.total
        ) {
          return Array.isArray(highestFat)
            ? [...highestFat, current]
            : [highestFat, current]
        }
        const hf = Array.isArray(highestFat) ? highestFat[0] : highestFat
        return (
          current.macronutrients.fat.total > hf.macronutrients.fat.total
            ? current
            : highestFat
        )
      })
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
      return selectedProducts.reduce((mostAccomodatedRestrictions, current) => {
        if (
          Array.isArray(mostAccomodatedRestrictions)
            ? mostAccomodatedRestrictions[0].accomodatedRestrictions.length === current.accomodatedRestrictions.length
            : current.accomodatedRestrictions.length === mostAccomodatedRestrictions.accomodatedRestrictions.length
        ) {
          return Array.isArray(mostAccomodatedRestrictions)
            ? [...mostAccomodatedRestrictions, current]
            : [mostAccomodatedRestrictions, current]
        }

        const mar = Array.isArray(mostAccomodatedRestrictions) ? mostAccomodatedRestrictions[0] : mostAccomodatedRestrictions

        return (
          current.accomodatedRestrictions.length > mar.accomodatedRestrictions.length
            ? current
            : mostAccomodatedRestrictions
        )
      })
    }
  }
})
