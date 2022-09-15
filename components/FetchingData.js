import React from 'react'
import { useEffect, useState } from 'react'
//import axios from 'axios'

const FetchingData = () => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
  return (
    <div>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  )
}

export default FetchingData
