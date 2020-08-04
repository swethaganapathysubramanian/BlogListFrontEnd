import React from 'react'
import { useParams } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import noimage from '../images/noimage.jpg'
//7.14
const User = ({ users }) => {
  const id = useParams().id
  const user = users.find(user => user.id === id )
  const history = useHistory()

  if (!user) {
    history.push('/users')
    return null
  }
   

  return (
    <div className='user'>
      
      <h2 style={{ textTransform:'capitalize'}}> {user.username} </h2>
      <h3> Added Blogs </h3>
      <Table striped collapsing className='user-table' color='blue'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Blog Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {user.blogs ? 
          user.blogs.map(blog =>
            <Table.Row key={blog.id}>
              <Table.Cell style={{ textTransform: 'capitalize' }}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></Table.Cell>
              <Table.Cell>{blog.description ? blog.description : 'No Description provided :)'}</Table.Cell>
            </Table.Row>
          ) 
          :
          <Table.Row>
            <Table.Cell style={{ textTransform: 'capitalize' }}>None</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
        }
        </Table.Body>
      </Table>
    </div>
  )
}

export default User