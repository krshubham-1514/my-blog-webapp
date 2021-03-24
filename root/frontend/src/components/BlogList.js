import {Link} from 'react-router-dom'

const BlogList = ({blogs,title}) => {
    return ( 
    <div className="blog-list">
        <h1>{title}</h1>
        {blogs.map(blog =>(
            <div className="blog-preview" key={blog._id}>
                <Link to={`/blogs/${blog._id}`}>
                    <h2 >{blog.title}</h2>
                    <p style={{color:"#7f7f7f"}}> Written By {blog.author}</p>
                </Link>
            </div>
        ))}

    </div>
     );
}
 
export default BlogList;