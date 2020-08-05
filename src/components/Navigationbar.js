import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Responsive, Sidebar } from 'semantic-ui-react'


//7.16
const Navigationbar = ({ handleLogout }) => {

  const [visible, setVisible] = useState(false)

  const onToggle = () => {
    setVisible(!visible)
  }

  return (
    <>
      <Responsive minWidth={600} >
        <Menu secondary pointing size='massive'>
          <Link to={'/'}>
            <Menu.Item
              name='BlogList'
              link
              className='menu-item'
            >
            Blogopedia
            </Menu.Item>
          </Link>
          <Link to={'/'}>
            <Menu.Item
              name='Blogs'
              link
              className='menu-item'
            >
              Blogs
            </Menu.Item>
          </Link>
          <Link to={'/users'}>
            <Menu.Item
              name='BlogList'
              link className='menu-item'>
              Users
            </Menu.Item>
          </Link>
          <Menu.Menu position='right' style={{ float: 'right' }}>
            <Menu.Item
              name='Logout'
              onClick={handleLogout}
              link
              className='menu-item'
            >
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Responsive>
      <Responsive maxWidth={600}>
        <Sidebar.Pushable >
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            onHide={() => setVisible(false)}
            direction='top'
            visible={visible}
            width='very thin'
          >
            <Link to={'/'}>
              <Menu.Item
                name='Blogs'
                link
                className='menu-item'
              >
              Blogs
              </Menu.Item>
            </Link>
            <Link to={'/users'}>
              <Menu.Item
                name='BlogList'
                link className='menu-item'>
                Users
              </Menu.Item>
            </Link>
            <Menu.Item
              name='Logout'
              onClick={handleLogout}
              link
              className='menu-item'
            >
            Logout
            </Menu.Item>
            <Menu.Item onClick={onToggle}>
              <Icon name="close" />
            </Menu.Item>
          </Sidebar>
          <Menu secondary pointing size='massive'>
            <Menu.Item onClick={onToggle} style={{ float: 'right' }}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
          {/* <Sidebar.Pusher style={{ minHeight: '100vh' }}>
          </Sidebar.Pusher> */}
        </Sidebar.Pushable>
      </Responsive>
    </>
  )
}

export default Navigationbar