import { ProtectedComponent } from '../../components'
import { PurchaseForm } from '../../modules/PurchaseForm'

import './PurchaseDetails.css'

export function PurchaseDetails() {
  return (
    <ProtectedComponent>
      <PurchaseForm />
    </ProtectedComponent>
  )
}
