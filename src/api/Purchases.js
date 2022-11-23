import axios from 'axios'

export const fetchPurchases = async () => {
  try {
    const response = await axios.get('/purchases')
    return response.data
  } catch {
    return []
  }
}

export const fetchColumns = async () => {
  try {
    const response = await axios.get('/purchases/meta')
    return response.data
  } catch {
    return []
  }
}

export const fetchTableData = async () => {
  return await axios.all([fetchColumns(), fetchPurchases()])
}

export const fetchPurchase = async (id) => {
  return await axios.get(`/purchases/${id}`)
}

export const updatePurchase = async (id, data) => {
  return await axios.patch(`/purchases/${id}`, data)
}
