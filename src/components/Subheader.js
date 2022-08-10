import React from "react";
import style from '../style/explore.module.css'
import {Link} from 'react-router-dom'

export default function Subheader(props) {
    return(
        <div className={style.head}>
            <Link exact="true" to="/home">
                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt="" />
            </Link>
            <h3>{props.pageTitle}</h3>
        </div>
    )
}