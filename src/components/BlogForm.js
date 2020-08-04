import React, { useState } from 'react'
import { Form, Message, Button } from 'semantic-ui-react'

const BlogForm = ({ handleBlogSubmit, closeModal }) => {
  //5.6
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] =useState('')
  const [desc, setDesc] = useState('')
  const [blogType, setBlogType] = useState([])
  const [insta, setInsta] = useState('')
  const [facebook,setFacebook] = useState('')
  const [twitter, setTwitter] = useState('')
  const [dribble, setDribble] = useState('')

  const [visible,setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const fileInputRef = React.createRef()
  let messageBlock

  const checkBlog = (event) => {
    event.preventDefault()
    console.log('here')

    if (title === '') {
      setMessage('Enter Blog Title')
      setVisible(true)
    }
    else if (author === '') {
      setMessage('Enter Author Name')
      setVisible(true)
    }
    else if (url === '') {
      setMessage('Enter Blog Url')
      setVisible(true)
    } else {
      setMessage('')
      setVisible(false)
      addBlog()
    }
  }

  const addBlog = () => {
    //event.preventDefault()
    console.log(image, blogType)
    const newBlog = {
      title: title,
      author: author,
      url: url,
      desc: desc,
      blogType: blogType,
      image:image,
      insta: insta,
      facebook: facebook,
      twitter: twitter,
      dribble: dribble
    }
    setTitle('')
    setAuthor('')
    setUrl('')
    setDesc('')
    setImage('')
    setBlogType('')
    setInsta('')
    setFacebook('')
    setTwitter('')
    setDribble('')
    handleBlogSubmit(newBlog)
    closeModal()
  }

  const blogTypeCheck = (value) => {
    if(blogType.includes(value)){
      setBlogType(blogType.filter(type => type !== value))
    } else {
      setBlogType(blogType.concat(value))
    }
    //console.log(blogType)
  }


  if(visible){
    messageBlock = <Message color='red'>{message}</Message>
  } else {
    messageBlock = <div></div>
  }

  return(
    <Form size='large' method="POST" encType="multipart/form-data"> {/*5.3 2/4*/}
      {messageBlock}
      <Form.Input
        required={true}
        label="Blog Title:"
        inline
        fluid
        id="title"
        type="text"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />  <br />
      <Form.Input
        label="Full Name:"
        required={true}
        inline
        fluid
        id="author"
        type="text"
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
      />  <br />
      <Form.Input
        inline
        fluid
        label = "Blog Url:"
        required={true}
        id="url"
        type="text"
        value={url}
        onChange={({ target }) => setUrl(target.value)}
      />  <br />
      <strong> Photo: </strong>
      <Button
        content="Choose File"
        labelPosition="left"
        icon="file"
        onClick={() => fileInputRef.current.click()}
      />
      <input
        ref={fileInputRef}
        type="file"
        hidden
        onChange={({ target }) => setImage(target.files[0])}
      /> {image.name} <br/>
      Upload a photo of yourself. 300 pixels maximum width or height.
      <br /> <br />
      <Form.Input
        inline
        fluid
        label = "One Line Description About your Blog:"
        required={true}
        id="desc"
        value={desc}
        onChange = {({ target }) => setDesc(target.value)}
      />
      <strong>Blog Type:</strong> <br/>
      <Form.Group>
        &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Form.Checkbox label='Art' onChange={() => blogTypeCheck('Art')} disabled={blogType.includes('Art')?false:blogType.length >= 3 ? true : false}/> &nbsp;
        <Form.Checkbox label='Beauty/Fashion' onChange={() => blogTypeCheck('Beauty/Fashion')} disabled={blogType.includes('Beauty/Fashion') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
        <Form.Checkbox label='Books/Literature' onChange={() => blogTypeCheck('Books/Literature')} disabled={blogType.includes('Books/Literature') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
      </Form.Group>
      <Form.Group>
        &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
        <Form.Checkbox label='Cooking/Food' onChange={() => blogTypeCheck('Cooking/Food')} disabled={blogType.includes('Cooking/Food') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
        <Form.Checkbox label='Craft' onChange={() => blogTypeCheck('Craft')} disabled={blogType.includes('Craft') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
        <Form.Checkbox label='Cute' onChange={() => blogTypeCheck('Cute')} disabled={blogType.includes('Cute') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
        <Form.Checkbox label='Gaming' onChange={() => blogTypeCheck('Gaming')} disabled={blogType.includes('Gaming') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
      </Form.Group>
      <Form.Group>
        &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
        <Form.Checkbox label='Other' onChange={() => blogTypeCheck('Other')} disabled={blogType.includes('Other') ? false :(blogType.length >= 3?true:false)} /> &nbsp;
        <Form.Checkbox label='Parent' onChange={() => blogTypeCheck('Parent')} disabled={blogType.includes('Parent') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
        <Form.Checkbox label='Personal' onChange={() => blogTypeCheck('Personal')} disabled={blogType.includes('Personal') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
        <Form.Checkbox label='Photography' onChange={() => blogTypeCheck('Photography')} disabled={blogType.includes('Photography') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
      </Form.Group>
      <Form.Group>
        &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
        <Form.Checkbox label='Shopping/Reviews' onChange={() => blogTypeCheck('Shopping/Reviews')} disabled={blogType.includes('Shopping/Reviews') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
        <Form.Checkbox label='Spiritual' onChange={() => blogTypeCheck('Spiritual')} disabled={blogType.includes('Spiritual') ? false : (blogType.length >= 3 ? true : false)} /> &nbsp;
        <Form.Checkbox label='Technology' onChange={() => blogTypeCheck('Technology')} disabled={blogType.includes('Technology') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
        <Form.Checkbox label='Travel' onChange={() => blogTypeCheck('Travel')} disabled={blogType.includes('Travel') ? false :(blogType.length >= 3 ? true : false)}/> &nbsp;
      </Form.Group>
      <br />
      Please select one or more categories that best suit your blog. <br/>
      <Form.Input
        label="Instagram:"
        inline
        fluid
        id="instagram"
        type="text"
        value={insta}
        onChange={({ target }) => setInsta(target.value)}
      />
      <br />
      <Form.Input
        label="Twitter:"
        inline
        fluid
        id="twitter"
        type="text"
        value={twitter}
        onChange={({ target }) => setTwitter(target.value)}
      />
      <br />
      <Form.Input
        label="Facebook:"
        inline
        fluid
        id="facebook"
        type="text"
        value={facebook}
        onChange={({ target }) => setFacebook(target.value)}
      />
      <br />
      <Form.Input
        label="Dribble:"
        inline
        fluid
        id="dribble"
        type="text"
        value={dribble}
        onChange={({ target }) => setDribble(target.value)}
      />
      <br/> <br />
      <Button floated="right" color='green' onClick={checkBlog}>Submit</Button>
      <br /> <br />
    </Form>
  )
}

export default BlogForm