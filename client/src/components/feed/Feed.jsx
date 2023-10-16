import React, { useEffect, useState } from "react"
import Post from "../post/post"
import "./feed.css"
import axios from "axios"
const Feed = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get("/api/videos/1")
        setVideos(res.data)
        console.log(res)
      } catch (err) {
        setIsLoading(false)
      }
    }
    getVideos()
  }, [])

  console.log(videos)
  return (
    <div className="feed">
      <Post />
    </div>
  )
}

export default Feed
