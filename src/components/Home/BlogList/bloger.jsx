import React from "react";
import BlogItem from "./BlogItem";
import "./bloger.css"

const BlogList = ({blogs}) =>{
    return (
        <div className="blogList-wr">
         
              {blogs.map(blog=><BlogItem blog={blog} key={blog.id}/>)}
        </div>
    )
}


export default BlogList