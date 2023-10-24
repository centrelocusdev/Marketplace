import React from 'react'
import style from '../../styles/freelancers/freelancers.module.css';
import girl from '../../public/img/Freelancers/girl.png';
import starSmall from "../../public/img/Employees/starSmall.svg";

import Image from 'next/image';
const Card = () => {
  return (
    <div className={style.card}>
        <div className={style.cardInner}>
            <Image src={girl} height={110} width={110}/>
            <p>Robert Fox</p>
            <p>Developer</p>
            <div>
                <p>4.5</p>
                <Image src={starSmall} height={16} width={16} />
                <p>273 Reviews</p>
            </div>
            <div>
                <span>Ethereum</span>
                <span>Solana</span>
                <span>Blockchain</span>
            </div>
            <div>
                <div>
                    <span>Location</span>
                    <span>London</span>
                </div>
                <div> 
                    <span>Rate</span>
                    <span>$ 90/hr</span>
                </div>
                <div>
                    <span>Job Success</span>
                    <span>98%</span>
                </div>
            </div>
            <button>Send Proposal</button>
        </div>
    </div>
  )
}

export default Card