export const normalizeTable = (columns, users) => {
  const table = columns.map((column) => [column])

  users.forEach((user) => {
    Object.entries(user).forEach((item, idx) => {
      table[idx].push(item[1])
    })
  })

  return table
}

export const sortUsers = ({ users, field, order }) => {
  const _users = [...users].sort((user, user1) => {
    let value = user[[field]]
    let nextValue = user1[[field]]

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
  return _users
}

export const parseCurrencyField = (str) => parseFloat(str.replace('$', ''))
