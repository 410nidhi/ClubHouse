import React from 'react'
import style from '../style/phoneConfirm.module.css'
import {Link} from 'react-router-dom'

export default function CodeConfirm() {
    return(
        <div className={style.PhoneConfirmContainer}>
            <div className="text-center">
                <Link exact="true" to='/get_username' className={style.backBtn}>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt="" />
                </Link>
                <h1 style={{width:"100%", maxWidth: "200px", marginBottom: "1em"}}>
                    Enter the code we just texted you
                </h1>
                <input type="text" style={{width:"100%", border: 'none', textAlign: "center", outline: "none"}}/>
                <p className="mt-2">Didn't receive it? <span>Tap to Resend.</span></p>
            </div>
                <Link exact="true" to='/allow_notification' className="primaryBtn d-flex align-items-center">
                    Next <img src="https://cutewallpaper.org/24/slider-arrow-png/index-of-.png" className="ml-1" alt="" />
                </Link>
        </div>
    )
}