import { useLoaderData, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { InputField } from '../../components'
import { updatePurchase } from '../../api/Purchases'

import './PurchaseForm.css'

export function PurchaseForm() {
  const { data } = useLoaderData()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    await updatePurchase(data.id, values)
    navigate('/')
  }

  const fields = Object.keys(data).map((name) => {
    if (name === 'id') {
      return
    }
    return <InputField name={name} key={name} />
  })

  return (
    <Formik initialValues={{ ...data }} onSubmit={onSubmit}>
      <Form className="purchase-form">
        <h1 className="purchase-form__title">Purchase Details</h1>
        <main className="purchase-form__body">
          {fields}
          <button className="btn purchase-form__btn" type="submit">
            Submit
          </button>
        </main>
      </Form>
    </Formik>
  )
}
