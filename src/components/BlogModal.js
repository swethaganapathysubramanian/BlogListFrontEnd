import React, { useState } from 'react'
import BlogForm from './BlogForm'
import { Button, Header, Modal } from 'semantic-ui-react'

const BlogModal = ({ handleBlogSubmit, user }) => {

  const [modalOpen, setModalOpen] = useState(false)
  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)
  return(
    <Modal trigger={<Button color='blue' onClick={handleOpen}>Add new Blog</Button>} open={modalOpen} onClose={handleClose} size='large' closeIcon dimmer='blurring'>
      <Header icon='blogger b' content='Add New Blog' />
      <Modal.Content>
        <BlogForm handleBlogSubmit={handleBlogSubmit} user={user} closeModal={handleClose}/>
      </Modal.Content>
    </Modal>
  )
}

export default BlogModal