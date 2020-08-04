import axios from 'axios'
const baseUrl = 'https://sleepy-crag-33360.herokuapp.com/api/users'

const getUsers = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getUserData = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const addUser = (userData) => {
  const request = axios.post(baseUrl, userData)
  return request.then(response => response.data)
}

export default { getUsers, getUserData, addUser }