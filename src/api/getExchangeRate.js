import axios from 'axios'
import config from '../config'

export default async function getExchangeRate (base = 'USD') {
  const data = (await axios.get(`${config.REACT_APP_EXCHANGE_RATE_BASE_URL}exchangerate?base=${base}`)).data
  return data.conversion_rates
}
