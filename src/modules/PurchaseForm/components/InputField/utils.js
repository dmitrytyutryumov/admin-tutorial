import { PurchaseUtils } from '../../../../utils'

export const getInputType = (value) => {
  const valueType = typeof value
  switch (valueType) {
    case 'string':
      return 'text'
    case 'number':
      return 'number'
    case 'boolean':
      return 'checkbox'
    case 'array':
      return 'text'
    default:
      return valueType
  }
}

export const getFieldValue = (value) => {
  let [fieldValue, isCurrencyField] = PurchaseUtils.getCurrencyField(value)

  if (fieldValue instanceof Array) {
    fieldValue = fieldValue[1]
  }
  return [fieldValue, isCurrencyField]
}
