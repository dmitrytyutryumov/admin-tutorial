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

export const getPurchase = ({ purchases: { purchases } }, currentId) =>
  purchases.filter(({ id }) => id === currentId)

export const getPurchases = ({ purchases: { purchases } }) => purchases
