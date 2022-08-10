import React from "react";
import style from '../style/explore.module.css'
import {DownOutlined, FireOutlined} from '@ant-design/icons'
import data from "../data/Explore.json"
import {Input} from 'antd'
import Subheader from "../components/Subheader";

export default function Explore() {
    const {people, conversation} = data;

    return(
        <div className={style.exploreContainer}>
            <div className={style.header}>
                <Subheader pageTitle="EXPLORE"/>
                <Input style={{
                    backgroundColor : "#f4f4f4",
                    borderRadius : "0.8em",
                    padding: "0.3em 1em",
                    border: "none",
                    boxShadow: "none"
                }}
                size="large"
                placeholder="Find People and Clubs"
                prefix={<img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="" />}
                ></Input>
            </div>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.peopleContainer}>
                {people.map((item) => (
                    <div>
                        <div className="d-flex align-items-center">
                            <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                            <div className="ml-2">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                ))}
                <button className={style.showMore}>
                    Show more people <DownOutlined/>
                </button>
            </div>
            <h6>FIND CONVERSATIONS ABOUT...</h6>
                <div className="row mx-0">
                    {conversation.map((item) => (
                      <div className="col-6 px-2 mb-3">
                          <div className={style.conversationCard}>
                              <h6>
                                  <FireOutlined/>
                                  {item.title}
                              </h6>
                              <p>{item.description}</p>
                          </div>
                      </div>
                    ))}
                </div>
        </div>
    )
}