import React from "react";
import ListBannerSection from "@/components/listBannerSection";
import Layout from "../components/layout";
import style from "../styles/Servide Providers/ServiceProvidersList.module.css";
import Image from "next/image";
import searchBlack from "../public/img/Employees/searchBlack.svg";
import options from "../public/img/Employees/options.svg";
import Card from "@/components/Freelancers/Card";
const freelancers = () => {
  return (
    <Layout>
      {/* Banner starts */}
      <ListBannerSection heading={"Freelancer List"} />
      {/* Banner Ends */}

      {/* Cards Box Starts */}
      <div className={style.cardsContainer}>
        {/* Input Box Starts */}
        <div className={style.inputBox}>
          <div className={style.searchMiniBox}>
            <input type="text" placeholder="Search" />
            <Image src={searchBlack} height={30} width={30} />
          </div>
          <div className={`${style.dropDown1} ${style.dropDown}`}>
            <select>
              <option selected disabled>
                Category
              </option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
          <div className={`${style.dropDown2} ${style.dropDown}`}>
            <select>
              <option selected disabled>
                No. of Employees
              </option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
          <div className={`${style.dropDown3} ${style.dropDown}`}>
            <select>
              <option selected disabled>
                Country
              </option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
          <div className={`${style.dropDown4} ${style.dropDown}`}>
            <select>
              <option selected disabled>
                Date
              </option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
        </div>
        {/* Input Box Ends */}

        <div className={style.cardRow}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      
      </div>
      {/* Cards Box Ends */}
    </Layout>
  );
};

export default freelancers;
