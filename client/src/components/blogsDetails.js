
const BlogDetails = ({blogs}) =>{
    return (
        <div className="blog_details">
            <h3>{blogs.title}</h3>
            <p>{blogs.blog}</p>
            
            <img src={blogs.image} alt="blog" />
            <p>{blogs.createdAt}</p>
        </div>
    )
}

export default BlogDetails;