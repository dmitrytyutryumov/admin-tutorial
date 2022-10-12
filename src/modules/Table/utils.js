import axios from 'axios'

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
  console.log(users, field, order)
  return [...users].sort((user, nextUser) => {
    let value = user[[field]]
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

export const parseCurrencyField = (str) => parseFloat(str.replace('$', ''))

export const getUsers = async () => {
  try {
    const response = await axios.get('/purchases')
    return response.data
  } catch {
    return []
  }
}

export const getColumns = async () => {
  try {
    const response = await axios.get('/purchases/meta')
    return response.data
  } catch {
    return []
  }
}
