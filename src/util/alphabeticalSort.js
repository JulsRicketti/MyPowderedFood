export default function (a, b, property = 'label') {
  let x = null
  let y = null
  if (typeof a !== 'object') {
    x = a.toLowerCase()
    y = b.toLowerCase()
  } else {
    x = a[property].toLowerCase()
    y = b[property].toLowerCase()
  }

  return x < y ? -1 : x > y ? 1 : 0
}
