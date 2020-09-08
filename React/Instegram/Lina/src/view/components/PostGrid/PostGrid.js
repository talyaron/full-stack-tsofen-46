import React from "react";
import "./PostGrid.css";

function PostGrid(props) {
  const { postItem } = props;
  return (
    <div>
      <div className="post">
        <img src={postItem.img} alt="" />
        <div className="msgArea">
          <p id="name">{postItem.name}</p>
        </div>
      </div>
      <div>
        <img src={postItem.img} alt="" />
      </div>
    </div>
  );
}
export default PostGrid;
