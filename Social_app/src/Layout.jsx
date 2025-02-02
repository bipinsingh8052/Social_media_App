import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbardata from './component/Navbar';
import Footer from './component/Footer';

export default function Layout() {
    // let[home,sethome]=useState("");
    // let [post,set_post]=useState("");
    // let [Create,set_create]=useState("");
  return (
    <div>
        <Link to="home">Home</Link>
        <Link to="createpost">createpost</Link>
        <main>



        <Outlet/> 




        </main>
        <Footer/>
  
    </div>
  )
}
