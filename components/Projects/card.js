import React from 'react'
import CardLogo from '../../public/img/All Details Pages/Company Details/card-logo.png'
import style from '../../styles/All Details Files/CompanyDetails.module.css';
import StarBlue from '../../public/img/All Details Pages/Company Details/star-blue.svg';
import dot from '../../public/img/All Details Pages/Company Details/black-dot.svg';

import Image from 'next/image';
const CardProject = () => {
  return (
    <div className={style.card}>
       <div className={style.cardLeft}>
       <Image src={CardLogo} height={100} width={100}/>
       <div className={style.cardTop}>
        <p className={style.cardHeading}>Blockchain Developer For Lorem Ipsum</p>
        <p>Linear company</p>
        <div className={style.cardBottom}>
            <p>$125k -$135k Hourly</p>
            <Image src={dot} height={8} width={8}/>
            <p>1 - 5 Days</p>
            <Image src={dot} height={8} width={8}/>
            <p>Expensive</p>
            <Image src={dot} height={8} width={8}/>
            <p>Remote</p>
        </div>
       </div>
       </div>
       <Image src={StarBlue} height={30} width={30}/>

    </div>
  )
}

export default CardProject