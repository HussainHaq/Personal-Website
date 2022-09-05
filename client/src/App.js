import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages & components
import Main from './components/main/main'
import Navbar from './components/navbar/Navbar';
import PostBlog from './components/pages/postBlog'
import About from './components/pages/aboutPage';

// This is running React-Router-dom v6

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Main />}/>  
            <Route path='/blog_form' element={<PostBlog />}/>  
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
