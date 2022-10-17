import { sortPurchases, filterPurchases } from './utils'

export const getPuschases = (state) => state.puschases

export const getTable = (state) => {
  state = getPuschases(state)

  const table = Object.keys(state.columns).map((column) => [column])
  let purchases = sortPurchases({
    purchases: state.purchases,
    field: state.sortField,
    order: state.order,
  })
  purchases = filterPurchases(purchases, state.searchQuery)
  purchases.forEach((user) => {
    Object.entries(user).forEach((item, idx) => {
      table[idx].push(item[1])
    })
  })
  return table
}
