import axios from 'axios'
const baseUrl = 'https://sleepy-crag-33360.herokuapp.com/api/login'
//5.1 3/3
const login = async credentials => {
  const request = axios.post(baseUrl, credentials)
  return request.then(response => response.data)
}

export default { login }