import { sortPurchases, filterPurchases } from '../utils/Purchases'

export const getPurchasesState = (state) => {
  const { columns, sortField, order, searchQuery } = state.purchases

  let purchases = sortPurchases({
    purchases: state.purchases.purchases,
    field: sortField,
    order,
  })
  purchases = filterPurchases({
    purchases,
    searchQuery,
    fields: ['name', 'gameName'],
  })
  return { columns, purchases }
}

export const getColumns = (state) => state.purchases.columns

export const getPurchase = (state, id) => {
  return state.purchases.purchases.filter((purchase) => purchase.id === id)
}
