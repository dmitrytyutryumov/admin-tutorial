export const normalizeTable = (columns, users) => {
  const table = columns.map((column) => [column])

  users.forEach((user) => {
    Object.entries(user).forEach((item, idx) => {
      table[idx].push(item[1])
    })
  })

  return table
}
