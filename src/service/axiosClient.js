import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3100/api'
axios.defaults.headers.common['Authorization'] = ''
axios.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

axios.defaults.timeout = 2000 // 2s
