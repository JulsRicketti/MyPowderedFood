const findHighest = (arr) => arr.reduce((highest, current) => (
  current > highest ? current : highest
), arr[0])

const findLowest = (arr) => arr.reduce((lowest, current) => (
  current < lowest ? current : lowest
), 0)

export const priorities = {
  lowPrice: {
    name: 'Lowest Full Price',
    eval: (price1, price2, price3) => {
      const priceArray = [price1, price2, price3].filter(Boolean)
      return findLowest(priceArray)
    }
  },
  lowPricePerServing: {
    name: 'Lowest Price Per Serving',
    eval: (price1, price2, price3) => {
      const priceArray = [price1, price2, price3].filter(Boolean)
      return findLowest(priceArray)
    }
  },
  lowSugar: {
    name: 'Low Sugar',
    eval: (sugar1, sugar2, sugar3) => {
      const sugarArray = [sugar1, sugar2, sugar3].filter(Boolean)
      return findLowest(sugarArray)
    }
  },
  highFiber: {
    name: 'High Fiber',
    eval: (fiber1, fiber2, fiber3) => {
      const fiberArray = [fiber1, fiber2, fiber3].filter(Boolean)
      return findHighest(fiberArray)
    }
  },
  highProtein: {
    name: 'High Protein',
    eval: (protein1, protein2, protein3) => {
      const proteinArray = [protein1, protein2, protein3].filter(Boolean)
      return findHighest(proteinArray)
    }
  },
  lowSodium: {
    name: 'Low Sodium',
    eval: (sodium1, sodium2, sodium3) => {
      const sugarArray = [sodium1, sodium2, sodium3].filter(Boolean)
      return findLowest(sugarArray)
    }
  },
  multiVitaminsAndMinerals: {
    name: 'Multi Vitamins and Minerals',
    eval: (vitaminsAndMineral1, vitaminsAndMineral2, vitaminsAndMineral3) => {
      // TODO
      return 'WIP'
    }

  }
}
