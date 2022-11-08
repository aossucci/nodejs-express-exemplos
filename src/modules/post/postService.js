let posts = []

export const creatPost = (data, user) => {
    
  const post = {
    createdBy: user.email,
    ...data
  }
  posts.push(post)
  return post
}

export const getPosts = (id) => {
  if(id) {
    return
  }
  return posts
}