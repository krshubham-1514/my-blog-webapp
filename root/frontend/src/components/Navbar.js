import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h2>The Shubham Blog</h2>
            </div>
            <div className="blog_list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li style={{backgroundColor:"crimson",color:"white",padding:"5px",borderRadius:"6px",cursor:"pointer"}}><Link to ="/create">New Blog</Link></li>
                </ul>
            </div>
            
        </div>
      );
}
 
export default Navbar;