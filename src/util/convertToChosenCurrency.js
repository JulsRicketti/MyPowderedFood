export default function convertToChosenCurrency (selectedCurrency, exchangeRate, priceAndServingsObj) {
  const { fullPrice, primaryCurrency } = priceAndServingsObj

  return (
  // If there is a price for the selected currency, just use that
    fullPrice[selectedCurrency] ||
    // Otherwise, convert it from its primary currency
    fullPrice[primaryCurrency] / exchangeRate[primaryCurrency]
  ) .toFixed(2)
}
