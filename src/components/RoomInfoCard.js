import React, {useState, useEffect} from "react";
import style from '../style/roomCard.module.css'
import data from '../data/roomCard.json'
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from 'react-icons/bs'

export default function RoomInfoCard() {
    return(
        <>
        {data.map((item) => (
            <div>
                <div>
                    <div className={style.roomCardContainer} >
                        <h6>{item.title}</h6>
                        <h2>{item.sub_title}</h2>
                        <div className={style.roomMembers}>
                            <div>
                                <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
                                <img src="https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000" alt=""/>
                            </div>
                            <div>
                                {item.members.map((person) => (
                                    <p>
                                        {person.first_name} {person.last_name} <BsChatDots/>
                                    </p>
                                ))}
                                <p className= "d-flex align-items-center">
                                    <span className="mr-2">1.8</span>
                                    <BsFillPersonFill/>
                                    <span className="mx-2"></span>{" "}
                                    <span className="mr-2">5</span> <BsChatDotsFill/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}