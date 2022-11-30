import axios from 'axios'

export const register = async (data) => {
  return await axios.post('/register', data)
}

export const login = async (data) => {
  return await axios.post('/login', data)
}

export const fetchUser = async (id) => {
  return await axios.get(`/user/${id}`)
}
