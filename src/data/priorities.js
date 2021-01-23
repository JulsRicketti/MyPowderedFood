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
    name: 'Multi Vitamins and Minerals',
    eval: () => {
      // TODO
      return 'WIP'
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
