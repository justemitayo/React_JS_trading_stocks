import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import About from './pages/About/About';
import Footer from './Components/Footer/Footer';
import Why from './pages/Why/Why';
import Blog from './pages/Blog/Blog';
import Journey from './pages/Journey/Journey'
import Help from './pages/Help/Help';
import DetailBlog from './pages/DetailBlog/DetailBlog';
import api from './api/Post'
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  // const [discuss, setDiscuss] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  // useEffect(() => {
  //   const getPosts = async() => {
  //     setIsLoading(true)
  //     try{
  //       const response = await api1.get('/data');
  //       if (response && Array.isArray(response.data)) {setData(response.data)}
  //       console.log(response.data)
  //     }catch (err) {
  //       if(err.response){
  //         setError(err.response.data); 
  //         console.error('API Error:', err.response.data);
  //       } else{
  //         setError(err.message);
  //         console.error('Unexpected Error:', err.message);
  //       } 
  //     }finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   getPosts()


  // }, []) 

  useEffect(() => {
    const fetchPosts = async() => {
      setIsLoading(true)
      try{
        const response = await api.get('/posts');
        if (response && Array.isArray(response.data)) {setPosts(response.data)}
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
    }

    fetchPosts()


  }, [])


  // const handleClick = (id) => {
  //   // const listItem = posts.map((dt) => dt.id?.toString() === id ? dt : "This post does not exist" );
  //   const listItem = posts.find(dt => dt?.id?.toString() === id)
  //   console.log(listItem)
  //   // navigate(`/blog/${id}`);
  //   setPosts(listItem);

  // }


  // if (isLoading) {
  //   return <div>
  //     <p>Loading...</p>
  //   </div>
  // }

  isLoading && <p>Loading...</p> 
  error && <p>Error: {error}</p>

  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/about-us' element={<About />} />
        <Route path='/why-us?' element={<Why />}/>
        <Route path='/blog/:id' element={<DetailBlog posts={posts} />} />
        <Route path='/blog' element={<Blog posts={posts} />} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/help' element={<Help/>} />
        <Route path='/' element = {<LandingPage />} />
      </Routes>

      {/* {posts.map((post, index) => <div key={index}><p>{post.title}</p></div>)} */}
    </div>
    <Footer />
    </>
  );
}

export default App;


// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App



// {isLoading && <p>Loading...</p>} 
// {error && <p>Error: {error}</p>}