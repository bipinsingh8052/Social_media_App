import { FaHome } from "react-icons/fa";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
 import './App.css'
import CreatePost from "./component/CreatePost";
import Post_cart from "./component/Post_cart";
function App() {


  return (
    <>
    <div className="app_container">
      <div className="store_app">
      <Sidebar/>
      </div>
      <div className="app_main_container">
        <Navbar/>
        <Post_cart/>
        <CreatePost/>
         <Footer/>
      </div>
    </div>

    </>
  )
}

export default App
