import { FaHome } from "react-icons/fa";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
 import './App.css'
import CreatePost from "./component/CreatePost";
import Post_cart from "./component/Post_cart";
import { useState } from "react";
import All_Carts from "./component/All_Carts";
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import Layout from "./Layout";
function App() {
  let [navbar,setNavbar]=useState("");


  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout/>} />
            <Route index element={<All_Carts/>}/>
            <Route path="post" element={<All_Carts/>}/>

          </Route>
        </Routes>
        </BrowserRouter>
    {/* <div className="app_container">
      {/* <div className="store_app">
      <Sidebar Selected={navbar} />
      </div> */}
      {/*</><div className="app_main_container">
        <Navbar/>
       <div>
           <All_Carts/>
           <CreatePost/>
       </div>
        
         <Footer/>
      </div>
    </div> */}

    </>
  )
}

export default App
