import { PurchaseUtils } from '../../utils'

const INPUT_TYPES = {
  string: 'text',
  number: 'number',
  boolean: 'checkbox',
  array: 'text',
}

export const getInputType = (value) => {
  const type = typeof value

  return INPUT_TYPES[type] ?? type
}

export const getFieldValue = (value) => {
  let [fieldValue, isCurrencyField] = PurchaseUtils.getCurrencyField(value)

  if (fieldValue instanceof Array) {
    fieldValue = fieldValue[1]
  }
  return [fieldValue, isCurrencyField]
}
