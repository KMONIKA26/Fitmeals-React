import React from "react";
import "./styles.css";
import Chip from "../../../common/Chip";
import { Link } from "react-router-dom";
import { CalendarOutlined, CommentOutlined } from "@ant-design/icons";

const BlogItem = ({
  blog: {
    id,
    title,
    category,
    cover,
    description,
    createdAt,
    comments,
    authorOcuu,
    authorName,
    authorAvatar,
    authorBio,
  },
}) => {
   
  return (
    <div className="blogItem-wrap">
      <img src={cover} alt="cover" className="blogItem-cover" />
      <div className="bottomdiv">
        <h3 >{title}</h3>
        <p>{description}</p>
      </div>

      <div className="lastdiv">
        <span className="leftspan">
          <CalendarOutlined className="calender" />
          {createdAt}{" "}
        </span>
        <span className="rightspan">
          <CommentOutlined className="com" />
          {comments}{" comments"}
        </span>

       
      </div>

      {/* <Link className="blogItem-link" to={`/blog/${id}`}>➡</Link> */}
    </div>
  );
};

export default BlogItem;
