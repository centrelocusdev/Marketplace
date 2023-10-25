import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import style from "../../styles/home-page/Banner.module.css";
import BannerImage from "../../public/img/Home-Page/People.png";
import Image from "next/image";

const banner = () => {
  return (
    <div className={style.container}>
      <div className={style.mainInner}>
        <section className={style.left}>
          <div className={style.leftBox}>
            <h1>Lorem ipsum dolor sit amet,</h1>
            <h1>consectetur adipiscing elit.</h1>

            <div className={style.inputBox}>
              <div className={style.searchBox}>
                <AiOutlineSearch color="#3943A8" size={30} />
                <input type="text" placeholder="Job Title" />
              </div>
              <div className={style.locationBox}>
                <CiLocationOn color="#3943A8" size={30} />

                <select name="location" id="location">
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="USA">USA</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              <button className={style.bannerBtn}>SEARCH</button>
            </div>
            <p>
              <span>Searh keywords e.g.</span>
              <span>Product Designer</span>
            </p>
          </div>
        </section>
        <section className={style.right}>
          <Image src={BannerImage}
          height={817}
          width={472}
          // style={{
          //   height: "100%",
          //   width:"70%"
          // }}
          // layout="responsive"
          loading="lazy"
          />
        </section>
      </div>
    </div>
  );
};

const Wrapper = styled.main`
  .container {
    height: 100vh;
    width: 100vw;
    border: 1px solid red;
    .main-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      border: 1px solid blue;
      .left {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border: 1px solid black;
        .left-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          /* margin-left:40px; */
          padding-left: 40px;
          h1 {
            font-family: "Roboto", sans-serif;
            font-size: var(--font52);
            margin: 0;
            color: #343a40;
          }
          .input-box {
            width: 80%;
            height: 55px;
            display: flex;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            background-color: #fff;
            margin-top: 50px;
            div {
              margin-top: 0;
            }
            .search-box {
              height: 100%;
              width: 33.3%;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
              padding-left: 10px;
              input {
                width: 80%;
                height: 100%;
                border: none;
                color: #adb5bd;
                font-weight: 500;
              }
            }
            .location-box {
              height: 100%;
              width: 33.3%;
              border-left: 1px solid gray;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
              padding-left: 10px;
              select {
                height: 100%;
                width: 80%;
                border: none;
              }
            }
            .banner-btn {
              height: 100%;
              width: 33.3%;
              background-color: #20c997;
              border: none;
              color: #fff;
              font-weight: 700;
              font-size: var(--font12);
            }
          }
        }
      }
      .right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
export default banner;
