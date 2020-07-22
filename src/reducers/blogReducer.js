import blogService from '../services/blogs'
//7.9
const blogReducer = (state = [], action) => {
  switch(action.type){
  case 'NEW_BLOG':
    return state.concat(action.data)
  case 'INIT_BLOGS':
    return action.data
  case 'RETURN_BLOGS':
    console.log('hello', action.data)
    return action.data
  case 'LIKE_BLOG':
    return state.map( blog => blog.id === action.data.id ? action.data.updatedBlog : blog)
  case 'COMMENT_BLOG':
    return state
  case 'DELETE_BLOG':
    return state.filter(blog => blog.id !== action.data)
  case 'DELETE_BLOG_ERROR':
    return state
  default:
    return state
  }
}

const arrayBufferToBase64 = (buffer) => {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};

//7.10
export const createBlog = (newBlog) => {
  return dispatch => {
    blogService.create(newBlog).then(dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    }))

  }
}
//7.11
export const likeBlog = (id, updatedBlog) => {
  return dispatch => {
    blogService.update(id, updatedBlog).then(dispatch({
      type: 'LIKE_BLOG',
      data: { id, updatedBlog }
    }))
  }
}
//7.18
export const addCommentReducer = (id, comment) => {
  //console.log('here')
  return async dispatch => {
    //console.log('govinda govinda')
    const data = await blogService.addComment(id, comment)
    console.log(data)
    dispatch({
      type: 'COMMENT_BLOG',
      data: data
    })
  }
}

export const returnAll = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    blogs.map(blog =>{
      var base64Flag = 'data:image/jpeg;base64,';
      var imageStr = arrayBufferToBase64(blog.image.data.data);
      blog.image = base64Flag + imageStr
      return blog
    })
    console.log(blogs)
    dispatch({
      type: 'RETURN_BLOGS',
      data: blogs,
    })
  }
}
//7.11
export const deleteTheBlog = (id) => {
  return async dispatch => {
    await blogService.deleteBlog(id)
    dispatch({
      type: 'DELETE_BLOG',
      data: id
    })
  }
}

export const initializeBlog = () => {
  return async dispatch => {
    const nonSortedBlogs = await blogService.getAll()
    const blogs = nonSortedBlogs.sort((a, b) => b.likes - a.likes)
    //console.log(blogs)
    blogs.map(blog => {
      if(blog.image){
      var base64Flag = 'data:image/jpeg;base64,';
      var imageStr = arrayBufferToBase64(blog.image.data.data);
      blog.image = base64Flag + imageStr
      return blog
    }
      else {
      return blog
      }
    })
    console.log(blogs)
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}

export default blogReducer