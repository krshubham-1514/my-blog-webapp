import {useState,useEffect} from 'react'


const useFetch = (url) => {
    const [blogs,setBlogs]=useState(null);
    const [IsPending,setIsPending]=useState(true);
    const [Error,setError]=useState(null);
    
    useEffect(() =>{
        fetch(url).then((response) =>{
            if(!response.ok) {
                throw new Error("Could Not Fetch Data")
            }
            return response.json();

        }).then((blogs) =>{
            setBlogs(blogs);
            setIsPending(false);
            setError(null);
            
        }).catch(error =>{
            setIsPending(false);
            console.log(error);
            setError(error.message);
        })
    },[url])

    return {blogs,IsPending,Error}
    
}
 
export default useFetch;