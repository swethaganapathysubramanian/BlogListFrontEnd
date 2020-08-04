import React from 'react'
import posts from '../images/posts3.png'
import { Button, Icon } from 'semantic-ui-react'


const LaunchPage = ( { handleOpen, addHandleOpen }) => {
  return(
    <div className='launch'>
      <div style={{ width: '100vw', overflow:'auto'}} >
        <div style={{float:'left', width: '50vw' }}>
          <div style={{ height: '15vh' }}> </div>
        <img src = {posts} alt='Launch Page Image' style={{ height: '50vh' }} />
          <div className='motto'>Imagine. Create. Share.</div>
        </div>
        
        <div className='login-bg' style={{ float: 'right', width: '50vw', height:'100vh', backgroundColor:'##1DCAFF'}}>
          <div style={{ height: '15vh' }} className='title'>Blogopedia </div>
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