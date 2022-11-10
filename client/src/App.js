import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
//pages & components
import Main from './components/main/main'
import Navbar from './components/navbar/Navbar';
import PostBlog from './components/pages/postBlog'
import About from './components/pages/aboutPage';
import Footer from './components/footer/Footer';
import Projects from './components/pages/Projects';
import Login from './components/pages/Login'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/login' element={ user ? <Navigate to="/" /> :  <Login />} />
            <Route path='/' element={<Main />}/>  
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            {/* Protected Route*/}
            <Route path='/blog_form' element={user ? <PostBlog /> : <Main/> } />  
            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
