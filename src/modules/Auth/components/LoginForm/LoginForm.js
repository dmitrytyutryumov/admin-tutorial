import { Formik, Form } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { InputField } from '../../../../components'
import { getIsUserLoginState } from '../../store'
import { loginAction } from '../../store/actions'

import './LoginForm.css'

function LoginForm({ loginHandler, isLogin }) {
  const onSubmit = async (values) => {
    loginHandler(values)
  }

  if (isLogin) return <Navigate to="/" replace={true} />

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

const mapStateProps = (state) => {
  const isLogin = getIsUserLoginState(state)
  return { isLogin }
}

const mapDispatchToProps = (dispatch) => ({
  loginHandler: (data) => dispatch(loginAction(data)),
})

export default connect(mapStateProps, mapDispatchToProps)(LoginForm)
