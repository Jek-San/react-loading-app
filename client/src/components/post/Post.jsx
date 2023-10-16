import React from "react"
import "./post.css"
const Post = () => {
  return (
    <div className="post">
      <div className="postImgContainer">
        <img src="https://i.ibb.co/VpfPvcj/1.png" alt="" className="postImg" />
        <span className="postDuration">13:05</span>
      </div>
      <div className="postInfoContainer">
        <img
          src="https://i.ibb.co/VpfPvcj/1.png"
          alt=""
          className="postAvatar"
        />
        <div className="postInfo">
          <span className="postTitle">Hello first video</span>
          <span className="postChannel">Jekk</span>
          <span className="postDetail">14k views • 1 week ago</span>
        </div>
      </div>
    </div>
  )
}

export default Post
