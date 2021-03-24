import {useHistory,useParams} from 'react-router-dom'
import useFetch from '../useFetch'



const BlogDetails = () => {
    const {id}=useParams();
    const {blogs,IsPending,Error}=useFetch('http://localhost:5000/articles/'+id)

    return ( 
        <div className="blog-details">
            {Error && <h2>{Error}</h2>}
            { IsPending && <div>Loading...</div> }
            { blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Writtet by {blogs.author}</p>
                    <div>{blogs.body}</div>
                </article>
            )}    
        </div>
     );
}
 
export default BlogDetails;