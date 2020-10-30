import microgramToMiligram from './microgramToMiligram'
import miligramToMicrogram from './miligramToMicrogram'

export const convertToProperUnit = (desiredUnit, currentUnit, value) => {
  if (desiredUnit === currentUnit) {
    return value
  } else if (desiredUnit === 'mg') {
    return microgramToMiligram(value).toFixed(3)
  } else if (desiredUnit === 'μg') {
    return miligramToMicrogram(value).toFixed(3)
  }
}
