import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


//7.16
const Navigationbar = ({ handleLogout }) => {

  return (
    <Menu color='blue' inverted size='massive'>
      <Link to={'/'}>
        <Menu.Item
          name='BlogList'
        >
        Blogopedia
        </Menu.Item>
      </Link>
      <Link to={'/'}>
        <Menu.Item
          name='Blogs'
        >
          Blogs
        </Menu.Item>
      </Link>
      <Link to={'/users'}>
        <Menu.Item
          name='BlogList'
        >
          Users
        </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        <Menu.Item
          name='Logout'
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Navigationbar