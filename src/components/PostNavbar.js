import React from 'react'
import "../styles/PostNavbar.css"
import { Link } from 'react-router-dom'
const PostNavbar = () => {
  return (
    <div id='post-navbar'>
        <Link class="HotAccessoriesLink" to="/music">Music Store</Link>
        <Link class="HotAccessoriesLink" to="/smartDevice">Smart Devices</Link>
        <Link class="HotAccessoriesLink" to="/home">Home</Link>
        <Link class="HotAccessoriesLink" to="/lifestyle">Lifestyle</Link>
        <Link class="HotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
} 

export default PostNavbar