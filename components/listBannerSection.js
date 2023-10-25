import React from 'react'
import style from "../styles/ListBannerSection.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const ListBannerSection = ({heading}) => {
  return (
      <div className={`${heading === 'Job List' ? style.bannerJobList : style.banner}`}>
        <div className={style.bannerInner}>
          <div className={`${heading === 'Job List' ? style.bannerTopJobList : style.bannerTop}`}>
            <p>{heading}</p>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat.
            </p>
          </div>
          <div className={style.bannerBottom}>
            <div className={style.searchBox}>
              <AiOutlineSearch color="#3943A8" size={30} />
              <input type="text" placeholder="What are you looking for?" />
            </div>
            <button className="primary-btn">Search</button>
          </div>
        </div>
      </div>
  )
}

export default ListBannerSection