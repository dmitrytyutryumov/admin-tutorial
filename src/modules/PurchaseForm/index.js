export { PurchaseForm } from './PurchaseForm'
import { fetchPurchase } from '../../api/Purchases'

export async function loader({ params }) {
  return await fetchPurchase(params.id)
}
