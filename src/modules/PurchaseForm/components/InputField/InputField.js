import { useField } from 'formik'
import { capitalize } from '../../../../utils'
import './InputField.css'
import { getFieldValue, getInputType } from './utils'

export function InputField({ name, ...props }) {
  const [field, meta, helpers] = useField({ name })
  const [value, isCurrencyField] = getFieldValue(field.value)
  const hasError = meta.error && meta.touched

  return (
    <div className="form-input-wrapper">
      <label
        className={`input-label ${hasError ? 'label-invalid' : ''}`}
        htmlFor={name}
      >
        {capitalize(`${name}${isCurrencyField ? ' $' : ''}`)}
      </label>
      <input
        className={`text-input ${hasError ? 'input-invalid' : ''}`}
        id={name}
        name={name}
        type={getInputType(value)}
        onChange={field.onChange}
        onBlur={field.onBlur}
        onFocus={() => helpers.setTouched({ name: false })}
        value={value}
        checked={props.checked || value}
        {...props}
      />
    </div>
  )
}
