export const sortPurchases = ({ purchases, field, order }) => {
  if (!field) {
    return [...purchases]
  }
  return [...purchases].sort((purchase, nextUser) => {
    let value = purchase[[field]]
    let nextValue = nextUser[[field]]

    if (value instanceof Array) {
      value = value[1]
      nextValue = nextValue[1]
    }

    if (`${value}`.startsWith('$')) {
      value = parseCurrencyField(value)
      nextValue = parseCurrencyField(nextValue)
    }

    if (typeof value === 'string') {
      value = value.toLowerCase()
      nextValue = nextValue.toLowerCase()
    }

    if (['number', 'boolean'].includes(typeof value)) {
      return (value - nextValue) * order
    }
    return (value > nextValue ? 1 : -1) * order
  })
}

export const filterPurchases = ({ purchases, searchQuery, fields }) => {
  if (searchQuery === '' || !fields) {
    return purchases
  }

  return [...purchases].filter(
    (user) =>
      fields.filter((field) => {
        const fieldValue = user[[field]] || ''
        return fieldValue.toLowerCase().includes(searchQuery)
      }).length !== 0
  )
}

export const parseCurrencyField = (str) => parseFloat(str.replace('$', ''))

export const getCurrencyField = (value) => {
  if (typeof value === 'string' && value.startsWith('$')) {
    return [parseCurrencyField(value), true]
  }
  return [value, false]
}
