import React from 'react'
import style from '../style/welcome.module.css'
import {Link} from 'react-router-dom'

export default function Welcome() {
    return(
        <div className={style.WelcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    We'er working hard to get Clubhouse ready for everyone! While we wrap up the 
                    finishing touches, we'er adding people gradually to make sure nothing breaks.
                </p>
                <p>
                    Anyone can join with an invite from an existing user or reserve your username 
                    and we'll text you if you have a friend on the app who can let you in. We are 
                    so grate full you are here and can't wait for you to join!
                </p>
                <p>The Clubhouse Team</p>
            </div>

            <div className={style.actionBtn}>
                <Link exact="true" to ='/invite' className= 'primaryBtn d-flex align-items-center mb-3'>
                    Get your username {/* <img src="" alt=""/> */}
                    
                </Link>
                <Link exact="true" to ='/invite' className= 'primaryBtn d-flex align-items-center mb-3'>
                    Have an invite text? Sign in
                </Link>
            </div>
        </div>
    )
}