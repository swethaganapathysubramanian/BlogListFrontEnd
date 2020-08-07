import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { likeBlog, initializeBlog, addCommentReducer } from '../reducers/blogReducer'
//import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
//import noimage from '../images/noimage.jpg'
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import person4 from '../images/person4.png'
import person5 from '../images/person5.png'
import person6 from '../images/person6.png'
import blogimage from '../images/blog_img.png'
import { Button, Comment, Form, Header, Icon, Label } from 'semantic-ui-react'
//7.15
const BlogData = ({ blogs, likeBlog, addCommentReducer }) => {
  initializeBlog()
  const [update,setUpdate] = useState(0)
  const [blogList, setBlogs] = useState(blogs)
  const [comment, setComment] = useState('')
  const imageList = [person1, person2, person3, person4, person5, person6]

  //const [blog, setBlog] = useState('')
  //console.log('before',blogList)
  const id = useParams().id
  let blog


  useEffect( () => {
    const callthis = async () => {
      const List = await blogService.getAll()
      setBlogs(List)
      //console.log('List', blogList)
    }
    callthis()
    console.log('called')
  },[update])

  blog = blogList.find(blog => blog.id === id)
  console.log('everytime?')


  if(!blog){
    return null
  }


  const addLike = () => {
    const updatedBlog = {
      ...blog,
      likes: blog.likes + 1
    }
    likeBlog(blog.id, updatedBlog)
    //initializeBlog()
    setUpdate(update+1)
    //history.push(`/blogs/${blog.id}`)
  }
  //7.17
  const addCommentData = () => {
    //blogService.addComment(blog.id, comment)
    addCommentReducer(blog.id, comment)
    //console.log('Done')
    blog.comments.concat(comment)
    console.log(blog.comments)
    setUpdate(update + 1)
    updateComments()
  }

  const updateComments = () => {
    console.log(blog.comments)
    setComment('')
    //initializeBlog()
    setUpdate(update + 1)
    console.log(update)
  }

  const commentData = (event) => {
    event.preventDefault()
    setComment(event.target.value)
  }

  const displayImage = (image) => {
    if(image.data){
      const arrayBufferToBase64 = (buffer) => {
        var binary = ''
        var bytes = [].slice.call(new Uint8Array(buffer))
        bytes.forEach((b) => binary += String.fromCharCode(b))
        return window.btoa(binary)
      }
      var base64Flag = 'data:image/jpeg;base64,'
      var imageStr = arrayBufferToBase64(image.data.data)
      image = base64Flag + imageStr
      return image
    }
    return image
  }


  return(
    <div className='blog'>
      <h2>{blog.title} </h2><h3 style={{ color:'#606060' }}> &nbsp; by {blog.author} </h3>
      <div className='blog-data'>
        <h3> Checkout the Blog @  <a href={blog.url}>{blog.url}</a> </h3> <br />
        <img src={blog.image ? displayImage(blog.image) : blogimage} style={{ height:200, width:'auto' }} alt='blog' draggable/> <br/> <br />
        {console.log(blog.image)}

        <Button as='div' labelPosition='right'>
          <Button color='red' onClick={addLike}>
            <Icon name='heart' />
          Like
          </Button>
          <Label as='a' basic color='red' pointing='left'>
            {blog.likes}
          </Label>
        </Button> <br /> <br />
        {/* </Button> <button onClick={addLike}>Like</button> <br /> */}
        This Blog was added by <strong style={{ textTransform:'capitalize' }}>{blog.user.username}</strong> <br/><br/>
        <a href={blog.insta}><Icon color='pink' name='instagram' size='large'/></a>
        <a href={blog.facebook}><Icon color='blue' name='facebook' size='large' /></a>
        <a href={blog.twitter}><Icon color='teal' name='twitter' size='large'/></a>
        <a href={blog.dribble}><Icon color='pink' name='dribbble square' size='large'/></a>
        <br/>
        <Comment.Group>
          <Header as='h3' dividing>
            Comments
          </Header>
          <ul>
            {blog.comments.map((comment,index) => comment ?
              <Comment.Group size='large'>
                <Comment>
                  <Comment.Avatar src={imageList[index%6]}/>
                  <Comment.Content>
                    <Comment.Author as='a'>Anonymus</Comment.Author>
                    <Comment.Text>{comment}</Comment.Text>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
              :
              <></>) }
          </ul>
          <Form reply onChange={commentData} >
            <Form.TextArea value={comment}/>
            <Button content='Add Comment Anonymously' labelPosition='left' icon='edit' primary onClick={addCommentData} />
          </Form>
        </Comment.Group>
        {/* <input type = 'text' value= { comment } onChange = {({ target }) => setComment(target.value)}></input>
        <button onClick={ addCommentData } type='submit'>Add Comment </button> <br /> */}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ blogs: state.blog, user: state.user })

const mapDispatchToProps = {
  likeBlog, initializeBlog, addCommentReducer
}

const connectedBlog = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogData)

export default connectedBlog

// const BlogData = ({ blogs }) => {
//   const dispatch = useDispatch()

//   const history = useHistory()

//   const id = useParams().id
//   const blog = blogs.find(blog => blog.id === id)

//   console.log(useSelector(state => state.blog))

//   const addLike = () => {
//     const updatedBlog = {
//       title: blog.title,
//       author: blog.author,
//       url: blog.url,
//       likes: blog.likes + 1
//     }
//     dispatch(likeBlog(blog.id, updatedBlog))
//     history.push(`/blogs/${blog.id}`)
//   }
//   return (
//     <div className='Blog'>
//       <h2>{blog.title} by {blog.author} </h2>
//       {blog.url}<br />
//       {blog.likes} <button onClick={addLike}>Like</button> <br />
//       {blog.user.username}<br />
//     </div>

//   )
// }


// export default BlogData
