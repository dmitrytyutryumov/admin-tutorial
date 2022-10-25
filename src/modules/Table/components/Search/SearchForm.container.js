import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filterPurchases } from '../../../../store/actions'
import { SearchFormView } from './SearchForm.view'
import './index.css'

export function SearchFormContainer({}) {
  const dispatch = useDispatch()
  const ref = useRef()

  const onChange = () => {
    dispatch(filterPurchases(ref.current.value))
  }

  return <SearchFormView ref={ref} onChange={onChange} />
}
