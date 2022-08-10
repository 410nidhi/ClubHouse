import React from 'react'
import style from '../style/phoneConfirm.module.css'
import {Link} from 'react-router-dom'

export default function AllowNotification() {
    return(
        <div className={style.PhoneConfirmContainer}>
            <div className="text-center">
                <h1 className="mb-4">Last, Important Step!</h1>
                <h1 className="mb-3">Enable notifications to know when people are talking</h1>
                <div className={style.notificationContainer}>
                    <div className="p-3">
                        <h3>"Clubhouse" Would Like to Send You Notifications</h3>
                        <p>Notifications may include alerts, sound, and icon badges</p>
                    </div>
                    <div className={style.action_btn}>
                        <Link exact="true" to="/home">Don't Allow</Link>
                        <Link exact="true" to="/home">Allow</Link>
                        <img src="https://iconarchive.com/download/i96285/iconsmind/outline/Hand-Touch-2.ico" alt="" className={style.hand_icon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}