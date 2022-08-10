import React from "react";
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css'
import {Link} from 'react-router-dom'
import {BsAt, BsUpload, BsPlus} from 'react-icons/bs'
import {AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'


export default function Profile() {
    return(
        <>
        <div className={style.profileContainer}>
            <div className={exploreStyle.header}>
                <div className={`${exploreStyle.head} text-end mb-0`}>
                    <Link exact="true" to='/home'>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt="" 
                    className={exploreStyle.arrow_icon}/>
                    </Link>
                    <div className={style.actionBtn}>
                        <BsAt/>
                        <BsUpload/>
                        <AiOutlineSetting/>
                    </div>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" 
            className={style.profile_image}/>
            <h4>James Bond</h4>
            <p>@jamesbd</p>
            <div className={style.follow}>
                <p>
                    <span>0</span> followers
                </p>
                <p>
                    <span>51</span> following
                </p>
            </div>
            <button>Add a bio</button>
            <div className="mb-4">
                <button className="mb-0"><AiOutlineTwitter/> Add Twitter</button>
                <button className="mb-0"><AiOutlineInstagram/> Add Instagram</button>
            </div>
            <div className={style.nominated}>
                <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <div>
                    <p>Joined 14-July-2021</p>
                    <p>Nominated by <span>Anton Alarcon</span></p>
                </div> 
            </div>
            <p>Member of</p>
            <button className={style.addMemberBtn}>
                <BsPlus/>
            </button>
        </div>
        </>
    )
}