import React, {useState} from "react";
import Header from '../components/Header'
import DailyInfoCard from '../components/DailyInfoCard'
import style from '../style/home.module.css'
import RoomInfoCard from '../components/RoomInfoCard'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsGrid3X3Gap} from 'react-icons/bs'
import data from '../data/roomCard.json'
import BottomSheet from '../components/BottomSheet'
import newRoomData from '../data/newRoom.json'

export default function Home() {
    const [itemsVisible, setItemsVisible] = useState(true)
    const [sheetVisible, setSheetVisible] = useState(false)
    const [sheetCreatRoom, setSheetCreateRoom] = useState(false)
    const [loaderVisiblity, setLoaderVisiblity] = useState(false)
    const [cardId, setCardId] = useState(1)

    return(
        <>
        {loaderVisiblity ? (
            <div style={{
                position:"fixed", 
                top:'0', 
                right:'0', 
                left:'0', 
                bottom:'0', 
                display:'flex', 
                alignItems:'center', 
                justifyContent:'center'
            }}>
                <img src="https://c.tenor.com/NqKNFHSmbssAAAAj/discord-loading-dots-discord-loading.gif" alt="" />
            </div>
        ) : ("")}

        <Header/>

        <div className={style.home_container}>
            <DailyInfoCard/>
            <RoomInfoCard/>
        </div>

        <div className={style.action_btn}>
            <button onClick={() => setSheetVisible(true)}>
                <AiOutlinePlus className="mr-2"/>
                Start a room
            </button>
            <button>
                <BsGrid3X3Gap/>
            </button>
        </div>

        <BottomSheet className={style.bottom_sheet}
        sheetTitle="start room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={data.find((item) => item.id===cardId)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
            setLoaderVisiblity(true)
            setTimeout(() =>{
                setSheetCreateRoom(item)
                setLoaderVisiblity(false)
            }, 1000)
        }}
        />

        <BottomSheet className={style.bottom_sheet}
        sheetTitle="new room"
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        sheetVisible={sheetCreatRoom}
        cardDetail={newRoomData}
        setItemsVisible={(item) => setItemsVisible(item)}
        />
        </>
    )
}