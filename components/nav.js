import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import style from "../styles/home-page/Navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
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
              <AiOutlineSearch color="#7d8181" />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className={style.right}>
            <Link href="MarketplaceDetails">
            <li className={style.navDropdown}>
              Marketplace
              {/* <select>
                <option selected disabled>
                  Marketplace
                </option>

                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
              </select> */}
            </li>
            </Link>
           
            <li className={style.navDropdown}>
              <select>
                <option selected disabled>
                  Service Providers
                </option>

                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
              </select>
            </li>
            <li className={style.navDropdown}>
              <select>
                <option selected disabled>
                  Content
                </option>

                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
              </select>
            </li>
            <Link href="/Signin">
              <li>
                <button className="primary-btn">Login</button>
              </li>
            </Link>
            <Link href="/Signup">
              <li>
                <button className="primary-btn">Sign Up</button>
              </li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default nav;
