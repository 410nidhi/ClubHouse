import React from "react";
import { Link } from "react-router-dom";
import style from '../style/header.module.css'

export default function Header() {
    return(
        <div className={style.Header}>
            <Link exact="true" to="/explore">
                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="" />
            </Link>

            <div className={style.nav_items}>
            <Link exact="true" to="/friends_invite">
                <img src="https://cdn-icons-png.flaticon.com/512/937/937868.png" alt="" />
            </Link>

            <Link exact="true" to="/upcoming">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/13-time-date/calendar.png" alt="" />
            </Link>

            <Link exact="true" to="/activity">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/37-communication-chat-call/notification.png" alt="" />
            </Link>

            <Link exact="true" to="/profile">
                <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png" alt="" />
            </Link>
            </div>

        </div>
    )
}