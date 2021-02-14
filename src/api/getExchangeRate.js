import axios from 'axios'
export default async function getExchangeRate (base = 'USD') {
  // Source: https://exchangeratesapi.io/
  const data = (await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`)).data
  return data.rates
}
