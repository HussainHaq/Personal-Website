import { useState } from 'react'
import { useBlogsContext } from '../hooks/useBlogsContext'
import Luigi from '../assets/images/Luigi_fireball.png'
import { useLogout } from '../hooks/useLogout'

const BlogForm = () =>{
    const { dispatch } = useBlogsContext()
    const { logout } = useLogout()

    const [title, setTitle] = useState('')
    const [blog, setBlog] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState('')
    
    const handleLog = () =>{
        logout()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const blogPost = {title, blog, image}

        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(blogPost),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        if (response.ok){
            setTitle('')
            setBlog('')
            setImage('')
            setError(null)
            console.log('new blog added', json)
            dispatch({type: 'CREATE_BLOG', payload: json})
        }
    }

    return(
        <section className='main_form'>
            <div className='snorlax'>
                <img src={Luigi} alt='Luigi' height='120' width='90'/>
            </div>
            <form className="create_form" onSubmit={handleSubmit}>
                <h1>Add a Blog</h1>
                <h3>Add Title</h3>
                <input 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                    placeholder="Blog Title" 
                    autoFocus
                />
                <h3>Blog Paragraph</h3>
                <textarea
                    className='blog_input'
                    type="text"
                    onChange={(e) => setBlog(e.target.value)} 
                    value={blog} 
                    placeholder="max 250 characters"
                    maxlength="300"
                />            
                <h3>Image Url (optional)</h3>
                <input 
                    type="text"
                    onChange={(e) => setImage(e.target.value)} 
                    value={image}
                    placeholder="Image Url"                
                />

                <button>Add Blog</button>
                {error && <div className="error">{error}</div>}
                <button onClick={handleLog}>logout</button>
            </form>
        </section>
    )
}

export default BlogForm