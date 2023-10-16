const express = require("express")
const { videos, user } = require("./fakeData")
const app = express()
app.use(express.json())

app.get("/api/user/1", (req, res) => {
  setImmediate(() => {
    res.json(user)
  }, 5000)
})

app.get("/api/videos/1", (req, res) => {
  setTimeout(() => {
    res.json(videos)
  })
})

app.listen(8800, () => {
  console.log("Backend server is running!");
});
