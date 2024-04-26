import React from "react";
import Layout from "../../components/layout";
import Card from "@/components/Employees/Card";
import style from "@/styles/employees/employees.module.css";
import downDark from '@/public/img/Employees/downDark.png';
import downLight from '@/public/img/Employees/downLight.svg';
import options from '@/public/img/Employees/options.svg'
import searchBlack from '@/public/img/Employees/searchBlack.svg';
import Image from "next/image";
import ListBannerSection from "@/components/listBannerSection";

const employees = () => {
  return (
    <Layout>
      {/* Banner Starts */}
        <ListBannerSection heading={"Employees List"}/>
      {/* Banner Ends */}

      {/* Cards Box Starts */}
      <div className={style.cardsContainer}>
        
      {/* Input Box Starts */}
      <div className={style.inputBox}>
        <div className={style.searchMiniBox}>
          <input type="text" placeholder="Search"/>
          <Image
          src={searchBlack}
          height={30}
          width={30}
          />
        </div>
        <div className={`${style.dropDown1} ${style.dropDown}`}>
          <select>
          <option selected disabled>Category</option>

            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
            <option>option 4</option>
          </select>
        </div>
        <div className={`${style.dropDown2} ${style.dropDown}`}>
          <select>
            <option selected disabled>
              No. of Employees</option>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
            <option>option 4</option>
          </select>
        </div>
      </div>
      {/* Input Box Ends */}

      {/* Card Starts */}
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
      {/* Card Ends */}
       
      </div>
      {/* Cards Box Ends */}
    </Layout>
  );
};

export default employees;
