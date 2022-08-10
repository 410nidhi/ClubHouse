import React, {useState} from 'react'
import style from '../style/phoneConfirm.module.css'
import {Link} from 'react-router-dom'
import PhoneInput from "react-phone-number-input"

export default function PhoneConfirmation() {
    const [value, setValue] = useState();
    return(
        <div className={style.PhoneConfirmContainer}>
            <Link exact="true" to='/' className={style.backBtn}>
                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt="" />
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput international defaultCountry='US' value={value} onChange={setValue}/>
            <p>
                By entering your number, you are agreeing to our {""}
                <span>Terms of Service and Privacy Policy. </span>
                Thanks!
            </p>
            <Link exact="true" to='/code_confirm' className="primaryBtn d-flex align-items-center">
                Next <img src="https://cutewallpaper.org/24/slider-arrow-png/index-of-.png" className="ml-1" alt="" />
            </Link>
        </div>
    )
}