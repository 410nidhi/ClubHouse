import React, {useState} from "react";
import style from '../../style/roomDetail.module.css'
import {AiOutlineFile, AiOutlinePlus} from 'react-icons/ai'
import {BsMicMuteFill, BsMicFill} from 'react-icons/bs'

export default function NewRoom(props) {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState(true)
    const card = props.cardDetail;

    return(
        <>
        <div className={style.roomDetailContainer}>
            <div className={style.head}>
                <div className="d-flex align-items-center">
                    <a href="" onClick={() => {props.setSheetVisible(false)}}>
                        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" alt="" className={style.arrow_icon} />
                    </a>
                    <span>Hallway</span>
                </div>
                <div>
                    <AiOutlineFile/>
                    <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&w=1000&q=80" 
                    alt="" className={style.profile_img} />
                </div>
            </div>
            <div className={style.roomDetailCard}>
                <div className="d-flex align-items-center justify-content-between flex-wrap"
                style={{padding :'0.5em 1em'}}>
                    {card.members.map((item) => (
                        <div className= {style.memberContainer}>
                            {micMuteVisible ? (
                                <div className={style.audio_icon}>
                                    <BsMicMuteFill/>
                                </div>
                            ) : ''}
                            <img src="https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000" alt="" />
                            <p>
                                <span>*</span>
                                {item.first_name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.footer}>
                <button onClick={() => {props.setSheetVisible(false)}}>
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45012/victory-hand-emoji-clipart-md.png" alt="" />
                    Leave Quietly
                </button>
                <div>
                    <button>
                        <AiOutlinePlus/>
                    </button>
                    <button>
                        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45836/raised-back-of-hand-emoji-clipart-md.png" alt="" />
                    </button>
                    <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                        {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill/> }
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}