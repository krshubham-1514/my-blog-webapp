import { useState } from "react";
import {useHistory} from "react-router-dom"

const Create = () => {
    const [title,setTitle] =useState(" ")
    const [body,setBody]=useState(" ")
    const [author,setAuthor] = useState("Shubham Kumar")
    const history=useHistory();

    const handleSubmit=(e) => {
        e.preventDefault();

        const blog={title,body,author}

        fetch('http://localhost:5000/articles',
        {method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(blog)
        }).then(()=>{
            history.push('/');
        })
    }
     
    return ( <div className="create">
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit} >
            <label>Blog Title:</label><br/>
            <input type="text" className="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <label>Blog Body:</label><br/>
            <input type="text" className="body" value={body} onChange={(e)=>setBody(e.target.value)}/>
            <br/>
            <label>Blog Author:</label><br/>
            <input type="text" className="author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            <br/>
            <button>Submit</button>
        </form>
        
    </div> );
}
 
export default Create;