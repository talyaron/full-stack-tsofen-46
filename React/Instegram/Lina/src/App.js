import React from "react";

import "./App.css";
import logo from "./img/logo.jpg";
import PostGrid from "./view/components/PostGrid/PostGrid";
import Stories from "./view/components/Stories/Stories";

// Chats array
const posts = [
  {
    img:
      "data:image/jpeg;base64,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",
    name: "linanijem",
  },
  {
    img:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/bd0c16e45a91d9f4-profile_banner-480.jpeg",
    name: "touchnoy",
  },
];

function App() {
  return (
    <div className="App">
      <div className="chats-wrapper">
        <div className="header">
          <img src={logo} alt="" />
        </div>
        {posts.map((postItem, index) => {
          return <Stories key={index} postItem={postItem} />;
        })}

        {/* {posts.map((postItem, index) => {
          return <PostGrid key={index} postItem={postItem} />;
        })} */}
      </div>
    </div>
  );
}

export default App;