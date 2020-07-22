import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'
import image from '../images/noimage.jpg'


const Blog = ({ blog, updateBlog, deleteBlog }) => {

  // const [show,setShow] = useState(false)

  // const toggleShow = (event) => {
  //   event.preventDefault()
  //   setShow(!show)
  // }
  //5.8
  const addLike = () => {
    const updatedBlog = {
      ...blog,
      likes: blog.likes+1
    }
    updateBlog(blog.id, updatedBlog)
  }
  //5.10
  const removeBlog = (event) => {
    event.preventDefault()
    const decision = window.confirm(`Remove Blog ${blog.title} by ${blog.author}`)
    if(decision){
      deleteBlog(blog.id)
    }
  }

  const colorChange = (type) => {
    console.log(type)
    switch(type){
      case 'Art':
      case 'Craft':
      case 'Cooking/Food':
      return 'orange'
      
      case 'Personal':
      case 'Other':
      return 'blue'

      case 'Beauty/Fashion':
      case 'Cute':
      case 'Shopping/Reviews':
      return 'pink'
    
      case 'Technology':
      case 'Gaming':
      return 'black'

      case 'Photography':
      return 'teal'

      case 'Travel':
      case 'Spiritual':
      return 'green'
      
      case 'Books/Literature':
      case 'Parent':
        return 'purple'
        break
      default:
        return 'blue'
    }

  }

  return(
    //5.7
    // show?
    //   <div className="segment-cover">
    //     <Segment raised className="blog">
    //       <div className='showBlog Blog'>
    //         {blog.title} by {blog.author}<button onClick={toggleShow}>Hide</button> <br />
    //         {blog.url}<br/>
    //         {/* 5.8 */}
    //         {blog.likes} <button onClick={addLike}>Like</button> <br />
    //         {blog.user.username}<br/>
    //         <button onClick={removeBlog} id='remove'>Remove</button>
    //       </div>
    //     </Segment>
    //   </div>
    //   :
    //   <div className="segment-cover">
    //     <Segment raised className="blog">
    //       <div className='defaultBlog Blog'>
    //         <Link to={`/blogs/${blog.id}`}>{blog.title} by {blog.author} </Link> <button onClick={toggleShow}>Show</button>
    //       </div>
    //     </Segment>
    //   </div>
    <Card color={colorChange(blog.blogType[0])}>
      <Image wrapped ui={true} fluid centered size='small'>
      <img src={blog.image ? blog.image : image} className='crd-img'/>
      </Image>
      <Card.Content>
        <Label as='a' color={colorChange(blog.blogType[0])} ribbon>
          {blog.blogType[0]?blog.blogType[0]:'Other'}
        </Label>
        <Card.Header> <Link to={`/blogs/${blog.id}`}>{blog.title} </Link> </Card.Header>
        <Card.Meta>
          <span className='date'>  by {blog.author} </span>
        </Card.Meta>
        <Card.Description>
          {blog.desc}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {blog.likes} Likes
          <Button color='red' onClick={addLike}>
            <Icon name='heart' />
              Like
          </Button>
          <Button onClick={removeBlog}>
            Delete
          </Button>
        </a>
      </Card.Content>
    </Card>
  )
}
//5.11
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  updateBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired
}

export default Blog