import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { likeBlog, initializeBlog, addCommentReducer } from '../reducers/blogReducer'
//import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import noimage from '../images/noimage.jpg'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
//7.15
const BlogData = ({ blogs, likeBlog, addCommentReducer, user }) => {
  initializeBlog()
  const [update,setUpdate] = useState(0)
  const [blogList, setBlogs] = useState(blogs)
  const [comment, setComment] = useState('')
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

 
  const displayImage = (image) => {
    if(image.data){
    const arrayBufferToBase64 = (buffer) => {
      var binary = '';
      var bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => binary += String.fromCharCode(b));
      return window.btoa(binary);
    };
    var base64Flag = 'data:image/jpeg;base64,';
      var imageStr = arrayBufferToBase64(image.data.data);
      image = base64Flag + imageStr
      return image
  }
  return image
  } 

  
  return(
    <div className='Blog home'>
      <h2>{blog.title} by {blog.author} </h2>
      <a href={blog.url}>{blog.url}</a><br/>
      <img src={blog.image ? displayImage(blog.image) : noimage} style={{height:300, width:'auto'}}/> <br/>
      {console.log(blog.image)}
      {blog.likes} <button onClick={addLike}>Like</button> <br />
      {blog.user.username}<br/>
      added by { blog.user.username } <br/>
      Instagram: {blog.insta}

      <br/>
      <Comment.Group>
        <Header as='h3' dividing>
          Comments
      </Header>
      <ul>
        {blog.comments.map((comment,index) => comment ? 
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={noimage}/>
              <Comment.Content>
                <Comment.Author as='a'></Comment.Author>
                <Comment.Text>{comment}</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
         : 
         <></>) }
      </ul>
        <Form reply onChange={({ target }) => setComment(target.value)} >
          <Form.TextArea />
          <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={addCommentData} />
        </Form>
      </Comment.Group>
      {/* <input type = 'text' value= { comment } onChange = {({ target }) => setComment(target.value)}></input>
      <button onClick={ addCommentData } type='submit'>Add Comment </button> <br /> */}
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
