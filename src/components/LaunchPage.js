import React from 'react'
import posts from '../images/posts3.png'
import { Button, Icon } from 'semantic-ui-react'


const LaunchPage = ( { handleOpen, addHandleOpen }) => {
  return(
    <div className='launch'>
      <div className='l-page' >
        <div className='launch-image'>
          <div className='page-top title top' >Blogopedia  </div>
          <img src = {posts} alt='Launch Page' />
          <div className='motto'>Imagine. Create. Share.</div>
        </div>
        <div className='login-bg'>
          <div style={{ height: '15vh' }} className='title bottom'>Blogopedia </div>
          <Button id='login' className='page' animated onClick={handleOpen}>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button> <br/>
          <Button id='signup' className='page' animated onClick={addHandleOpen}>
            <Button.Content visible>Sign-up</Button.Content>
            <Button.Content hidden>
              <Icon name='add' />
            </Button.Content>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LaunchPage