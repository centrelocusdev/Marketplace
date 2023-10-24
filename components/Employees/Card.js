import React from 'react'
import style from "../../styles/employees/employees.module.css";
import starBig from "../../public/img/Employees/starBig.svg";
import starSmall from "../../public/img/Employees/starSmall.svg";
import frame from "../../public/img/Employees/frame.png";
import Image from "next/image";
const Card = () => {
  return (
    <div className={style.card}>
    <div className={style.left}>
      <div className={style.first}>
        <Image src={frame} height={72} width={72} />
        <p>Linear comapany</p>
      </div>
      <div className={style.second}>
        <p>4.5</p>
        <Image src={starSmall} height={16} width={16} />
        <p>273 Reviews</p>
      </div>
      <div className={style.third}>
        <div className={style.thirdInner}>
          <p>Location</p>
          <p>London</p>
        </div>
        <div className={style.thirdInner}>
          <p>Open Jobs</p>
          <p>29</p>
        </div>
      </div>
    </div>
    <div className={style.right}>
      <Image src={starBig}
      height={30}  width={30}/>
    </div>
  </div>
  )
}

export default Card