import React from "react";
import SearchBar from "./Home/SearchBar/search";
import BlogList from "./Home/BlogList/bloger";
import { blogList } from "./config/data";
import { RightOutlined, DownOutlined } from "@ant-design/icons";
import { CalendarOutlined, CommentOutlined } from "@ant-design/icons";
import "./blogHome.css";
const Home = () => {
  return (
    <div className="wrapper">
      <div className="align">
        <BlogList blogs={blogList} />
        <div className="right-box">
          <SearchBar />
          <div className="blogger-div">
            <img
              src="https://www.fitmeals.co.in/wp-content/uploads/2019/06/38387CD2-DC0A-4974-9C4C-2A50BE34899C-1-169x300.jpg"
              alt=""
            />
            <h6>Hafsaa</h6>
            <span >Nutrition Blogger</span>
            <p>
              Passionate about anything related to health and fitness and loves
              to bust ridiculous diet myths using evidence based explanations.
            </p>
          </div>

          <div className="category">
            <h3>Categories</h3>
            <hr className="hr-green" />
            <ul>
              <div className="ul-div">
                <RightOutlined className="right-arrow" />{" "}
                <li>
                  <a href="Nutrition">Nutrition(2)</a>
                </li>
              </div>
              <div className="ul-div">
                <RightOutlined className="right-arrow" />{" "}
                <li>
                  {" "}
                  <a href="">Uncategorized(1)</a>
                </li>
              </div>
            </ul>
          </div>

          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <hr />
            {blogList.map((blog) => (
              <div className="posts-div">
                <div className="post-div">
                  <img src={blog.cover} alt="" />
                  <div className="post-right">
                    <a href="">{blog.category}</a>
                    <h6>{blog.title}</h6>
                    <div className="lastdi">
                      <span className="leftspan">
                        <CalendarOutlined className="calenderr" />
                        {blog.createdAt}{" "}
                      </span>
                      <span className="rightspan">
                        <CommentOutlined className="comm" />
                        {blog.comments}
                        {" comments"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button>View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
