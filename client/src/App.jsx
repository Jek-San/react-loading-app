import Feed from "./components/feed/Feed"
import Topbar from "./components/feed/topbar/Topbar"
import "./app.css"
import Sidebar from "./components/sidebar/Sidebar"
function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="home">
          <Topbar />
          <Feed />
        </div>
      </div>
    </>
  )
}

export default App
