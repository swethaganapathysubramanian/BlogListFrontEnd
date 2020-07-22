import userService from '../services/users'
//7.12
const userReducer = ( state = [], action ) => {
  switch(action.type){
  case 'LIST_USERS':
    return action.data
  case 'ADD_USER':
    return state.concat(action.payload)
  default:
    return state
  }
}

export const listUsers = () => {
  return async dispatch => {
    const response = await userService.getUsers()
    dispatch({
      type: 'LIST_USERS',
      data: response
    })
  }
}

export const addUser = (userData) => {
  console.log('Add user')
  return dispatch => {
    userService.addUser(userData).then(response =>dispatch({
      type: 'ADD_USER',
      data: response
    }))
}
}

export default userReducer