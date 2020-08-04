import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


//7.16
const Navigationbar = ({ handleLogout }) => {

  return (
    <Menu secondary stackable pointing size='massive'>
      <Link to={'/'}>
        <Menu.Item
          name='BlogList'
          link
        >
        Blogopedia
        </Menu.Item>
      </Link>
      <Link to={'/'}>
        <Menu.Item
          name='Blogs'
          link
        >
          Blogs
        </Menu.Item>
      </Link>
      <Link to={'/users'}>
        <Menu.Item
          name='BlogList'
          link>
          Users
        </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        <Menu.Item
          name='Logout'
          onClick={handleLogout}
          link
        >
          Logout
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Navigationbar