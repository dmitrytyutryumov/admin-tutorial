export const sortPurchases = ({ purchases, field, order }) => {
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

export const filterPurchases = (purchases, searchQuery) => {
  if (searchQuery === '') {
    return purchases
  }

  return [...purchases].filter((user) => {
    return (
      user['name'].toLowerCase().includes(searchQuery) ||
      user['gameName'].toLowerCase().includes(searchQuery)
    )
  })
}

export const parseCurrencyField = (str) => parseFloat(str.replace('$', ''))
