import React, { useEffect, useState } from 'react';
import Heading from '../../sections/Detail/Heading';
import Lower from '../../sections/Detail/Lower';
import Discuss from '../../sections/Detail/Discuss';
import api from '../../api/Post'
import {useParams} from 'react-router-dom'

const DetailBlog = ({posts}) => {
  const params = useParams();
  const blog_id = params?.id || '';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState({});


  useEffect(() => {
    const fetchPosts = async() => {
      setIsLoading(true)
      setError('');
      if (blog_id) {

        try{
          const response = await api.get(`/posts/${blog_id}`);
          if (response.data) {
            setPost(response.data)
          }
          console.log(response.data)
        }catch (err) {
          if(err.response){
            setError(err.response.data); 
            console.error('API Error:', err.response.data);
          } else{
            setError(err.message);
            console.error('Unexpected Error:', err.message);
          } 
        }finally {
          setIsLoading(false);
        }
      } else {
        setError('Invalid Blog ID')
      }
    }

    fetchPosts()


  }, [blog_id])

  if (isLoading) {
    return <>
    <p>Loading...</p>
    </>
  }
  error && <p>Error: {error}</p>

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '75% 25%', /* 3:1 ratio (75% and 25%) */
      gap: '10px'
    }}>
      <Discuss post={post} />
      <div>
        <Heading posts={posts} />
        <Lower posts={posts}  />
      </div>
    </div>
  )
}

export default DetailBlog