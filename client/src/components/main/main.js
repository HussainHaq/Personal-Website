import { useEffect, useState } from 'react';
import './main.css'
import { useBlogsContext } from '../../hooks/useBlogsContext';
import Typewritter from 'typewriter-effect'

//components
import BlogDetails from '../blogsDetails';

const Loader = () =>{
    return (
        <div className="spinner-container">
          <div className="loading-spinner">
          </div>
        </div>
      );
}

const Main = () =>{
    const {blogs, dispatch} = useBlogsContext()
    const [loading, isLoading] = useState(true);
    useEffect(() => {
        const fetchBlogs = async ()=> {
            const response = await fetch('https://us-central1-husain-haq-server.cloudfunctions.net/app/api/blogs')
            const json = await response.json()
            if (response.ok) {
                isLoading(false);
                dispatch({type: 'SET_BLOGS', payload: json})
            }
            else if (!response.ok){
                return(
                    <h1>Unable to fetch blogs</h1>
                )           
            }
        }
        fetchBlogs();
    }, [])
    return(
        <section className='main_section'>
            <div className='hero'>
                <div className = 'title'>
                    <h1>Hello everyone I am developer with skills in</h1>
                    <Typewritter className='typewriter' options={{
                        strings: ['React.js ', 'Flutter.js', 'Flask.py ', 'Node.js', 'SQL', 'NoSQL', 'Java', 'C++', 'Google Cloud'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
            </div>
            <div className='main_content'>
                <div className='main_itms'>
                    <div className="blogs_container">
                        { loading? <Loader /> : 
                            blogs && blogs.map((blog) =>(
                                <BlogDetails key={blog._id} blogs={blog} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;