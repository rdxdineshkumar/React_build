import React from 'react'
import './MyProfile.css'
import {Link} from 'react-router-dom'
import profile_icon from '../../Images/user-icon.png'
function MyProfile() {
    const displayUser=JSON.parse(localStorage.getItem('users'));
  return (
    <div className='myprofileContainer'>
        <div className='myprofile'>
            <div className='myprofile_left'>
                <div className='myprofile_photo'>
                    <div className='img_container'>
                        <img className='myprofile_img' src={profile_icon} alt='profilePic' ></img>
                        <p className='username'> Hii! User </p>
                    </div>
                    <div className='myprofile_edit'>
                        <a href='#' className='myprofile_link'><span><i class="fa-regular fa-pen-to-square"></i></span>Edit Profile</a>
                        <a className='myprofile_link' href='#'>Manage Your Account</a>
                    </div>
                </div>
            </div>
            <div className='myprofile_info'>
                <div className='myinformation'>
                    <h4 className='myinformation_header'>Information</h4>
                    <div className='myinformation_container'>
                        <div className='email_info'>
                            <p className='email_header'>Email:</p>
                            <p className='email_details'>{displayUser.email}</p>
                        </div>
                        <div className='username_info'>
                            <p className='username_header'>Username:</p>
                            <p className='username_details'>{displayUser.username}</p>
                        </div>
                    </div>
                </div>                <div className='myOrders'>
                    <h4 className='myOrders_header'>My Orders</h4>
                    <div className='myOrders_container'>
                       <Link to='/myorders' className='myOrders_link'>view all orders</Link>
                    </div>
                </div>
                <div className='myOrders'>
                    <h4 className='myOrders_header'>my wishlist</h4>
                    <div className='myOrders_container'>
                       <a href='#' className='myOrders_link'>view your wishlist</a>
                    </div>
                </div>
                <div className='myOrders'>
                    <h4 className='myOrders_header'>My reviews</h4>
                    <div className='myOrders_container'>
                       <a href='#' className='myOrders_link'>view your reviews</a>
                    </div>
                </div>
                <div className='myOrders'>
                    <h4 className='myOrders_header'> My Questions & answers </h4>
                    <div className='myOrders_container'>
                       <a href='#' className='myOrders_link'>view your q&a</a>
                    </div>
                </div>
                <div className='logout'>
                    <div className='logout_button'>
                     <a href='#' className='logout_link' ><span><i class="fa-solid fa-arrow-right-from-bracket"></i></span>Logout</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile
