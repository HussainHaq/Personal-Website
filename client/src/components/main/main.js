import { useEffect, useState } from 'react';
import './main.css'
import { useBlogsContext } from '../../hooks/useBlogsContext';
import Typewritter from 'typewriter-effect'

//components
import BlogDetails from '../blogsDetails';

const Main = () =>{
    const {blogs, dispatch} = useBlogsContext()

    useEffect(() => {
        const fetchBlogs = async ()=> {
            const response = await fetch('/api/blogs')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_BLOGS', payload: json})
            }
        }
        fetchBlogs();
    }, [])
    return(
        <section className='main_section'>
            <div className='hero'>
                <div className = 'title'>
                    <h1>Hello I am developer with skills in</h1>
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
                        {blogs && blogs.map((blog) =>(
                            <BlogDetails key={blog._id} blogs={blog} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;
