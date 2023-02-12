import React, {useEffect, useState}from 'react'
import Post  from '../Post/Post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function PostsHolder() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
      const fetchData = async () => {               // Structure of getting array of objects from server and catching mistakes 
        try {                                       // Using useEffect to avoid loop rerendering 
            const res = await fetch(API_URL)        // We can't get async/await as a first argument of useEffect cause it returs promise, 
            const posts = await res.json()          // but the function in first argument of hook useEffect should return undefiend or 
            setPosts(posts)                         // other function, thats why i assign the async/await to arrow func fetchData 
        } catch {

        }
      }
       fetchData() 
    
    }, [])
    

  return (
    <div>
        <Post />
    </div>
  )
}

export default PostsHolder