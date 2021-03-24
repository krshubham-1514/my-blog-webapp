import BlogList from './BlogList'
import useFetch from '../useFetch'

const Home = () => {
    const {blogs,IsPending,Error}=useFetch('http://localhost:5000/articles',{
        method: 'GET'
    });
    return (
        <div className="home">
            {Error && <h2>{Error}</h2>}
            { IsPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs"/>} 
        </div>
    )
    
}
 
export default Home;