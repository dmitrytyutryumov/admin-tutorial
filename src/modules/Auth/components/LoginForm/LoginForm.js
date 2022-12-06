import { Formik, Form } from 'formik'
import { connect } from 'react-redux'

import { InputField } from '../../../../components'
import { loginSagaAction } from '../../store/actions'

import './LoginForm.css'

function LoginFormView({ loginHandler }) {
  const onSubmit = (values) => {
    loginHandler(values)
  }

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
      <Form className="login-form">
        <InputField
          name="email"
          placeholder="Email"
          showLabel={false}
          type="email"
        />
        <InputField
          name="password"
          placeholder="Password"
          showLabel={false}
          type="password"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loginHandler: (data) => dispatch(loginSagaAction(data)),
})

export const LoginForm = connect(null, mapDispatchToProps)(LoginFormView)
