import React from "react";
import "./Stories.css";

function Stories(props) {
  const { postItem } = props;
  return (
    <div className="story">
      <div className="oneStory">
        <img src={postItem.img} alt="" />
        <p>{postItem.name}</p>
      </div>
    </div>
  );
}
export default Stories;
