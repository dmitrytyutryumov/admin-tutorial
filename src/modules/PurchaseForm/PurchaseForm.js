import { useLoaderData, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { updatePurchase } from '../../api/Purchases'
import { InputField } from './components/InputField'

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
        <div className="purchase-form__body">
          {fields}
          <button className="btn purchase-form__btn" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  )
}
