import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    },[])

    return (
        <div className="md:w-2/3">
            <h1>Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    // eslint-disable-next-line no-undef
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};



export default Blogs;