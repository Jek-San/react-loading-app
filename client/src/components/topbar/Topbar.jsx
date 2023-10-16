import React from "react"
import "./topbar.css"
import {
  VideoCall,
  Notifications,
  Apps,
  Search,
  Mic,
} from "@mui/icons-material"

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topLeft">
        <img className="logo" src="https://i.ibb.co/KDtnJVY/logo.png" alt="" />
        <span className="logoText">Jekk.</span>
      </div>
      <div className="topCenter">
        <div className="topSearch">
          <input type="text" placeholder="Search" />
          <div className="topSearchIconContainer">
            <Search className="topSearchIcon" />
          </div>
          <Mic />
        </div>
      </div>

      <div className="topRight">
        <VideoCall className="topIcon" />
        <Apps className="topIcon" />
        <Notifications className="topIcon" />
        <img
          className="topImg"
          src={
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
          alt=""
        />
      </div>
    </div>
  )
}

export default Topbar
