import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import style from '../styles/home-page/Navbar.module.css';
import { AiOutlineSearch } from "react-icons/ai";

const nav = () => {
  return (
      <div className={style.main}>
        <nav className={style.mainInner}>
          <ul>
            <div className={style.left}>
              <li>logo</li>
            </div>
            <div className={style.mid}>
              <div className={style.searchBox}>
              <AiOutlineSearch color="#7d8181"/>
              <input type="text" placeholder="Search"/>
              </div>
            </div>
            <div className={style.right}>
              <li className={style.navDropdown}>
                <p>Marketplace</p>
                <RiArrowDropDownLine />
              </li>
              <li className={style.navDropdown}>
                <p>Service Providers</p>
                <RiArrowDropDownLine />
              </li>
              <li className={style.navDropdown}>
                <p>content</p>
                <RiArrowDropDownLine />
              </li>
              <li>
              <button className="primary-btn">Login</button>
              </li>
              <li>
                <button className="primary-btn">Sign Up</button>
              </li>
            </div>
          </ul>
        </nav>
      </div>
  );
};


export default nav;
