import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../reducers/userReducer'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
//7.13
const Users = () => {

  const dispatch = useDispatch()
  dispatch(listUsers())
  const users = useSelector( state => state.users )

  return(
    <div className='user'>
      <h2>Users</h2>
      <Table striped collapsing className='user-table' color='blue'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Blogs Created</Table.HeaderCell>
            <Table.HeaderCell>About</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map(user => 
            <Table.Row key={user.id}>
              <Table.Cell style={{ textTransform:'capitalize' }}><Link to={`/users/${user.id}`}>{user.username}</Link></Table.Cell>
              <Table.Cell>{user.blogs.length} Blogs</Table.Cell>
              <Table.Cell>{ user.about ? user.about : 'Hey There! I am a Blogger :)'}</Table.Cell>
          </Table.Row>
          )}
        </Table.Body>
      </Table>
      {/* <table><tbody>
        {users.map(user => <tr key={user.id}><td></td><td>{user.blogs.length}</td></tr> )}
      </tbody></table> */}
    </div>
  )
}

export default Users