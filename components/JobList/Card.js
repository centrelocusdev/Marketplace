import React from 'react'
import style from '../../styles/JobList/JobList.module.css';
import starBig from "../../public/img/Employees/starBig.svg";
import starSmall from "../../public/img/Employees/starSmall.svg";
import frame from "../../public/img/Employees/frame.png";
import Dot from '../../public/img/JobList/Dot.svg';
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
        <p>Blockchain Developer For Lorem Ipsum</p>
      </div>
      
     <div className={style.third}>
        <p>$125k -$135k Hourly</p>
        <Image src={Dot} alt="dot" height={8} width={8}/>
        <p>1 - 5 Days</p>
        <Image src={Dot} alt="dot" height={8} width={8}/>
        <p>Expensive</p>
        <Image src={Dot} alt="dot" height={8} width={8}/>
        <p>Remote</p>

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