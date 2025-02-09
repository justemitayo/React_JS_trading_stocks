import React from 'react'
import Newsletter from '../../sections/Newsletter'
import Market from '../../sections/Blog/Market'
import Update from '../../sections/Blog/Update'
import Corporate from '../../sections/Blog/Corporate'
import Publication from '../../sections/Blog/Publication'
import Press from '../../sections/Blog/Press'


const Blog = ({posts}) => {
  return (
    <>
    <Market />
    <Update posts ={posts} />
    <Corporate posts={posts}  />
    <Publication posts={posts} />
    <Press posts={posts} />
    <Newsletter />
    </>
  )
}

export default Blog