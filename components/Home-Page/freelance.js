import React from 'react'
import style from '../../styles/home-page/Freelance.module.css';
import freelanceImage from '../../public/img/Home-Page/freelance-main.png';
import safe from '../../public/img/Home-Page/safe.svg';
import quality from '../../public/img/Home-Page/quality.svg';
import cost from '../../public/img/Home-Page/cost.svg';
import Image from 'next/image';
const Freelance = () => {
  return (
    <div className={style.container}>
        <div className={style.innerContainer}>
            <div className={style.left}>
                <span>A whole world of freelance talent at your fingertips</span>
                <div className={style.freelanceContent}>
                    <div className={style.freelanceCard}>
                        <Image height={75} width={75} src={quality}/>
                        <div>
                            <p>Proof  of quality</p>
                            <p>Check any pro’s work samples, client reviews, and identity verification.</p>
                        </div>
                    </div>
                    <div className={style.freelanceCard}>
                        <Image height={75} width={75} src={cost}/>
                        <div>
                            <p>No cost until hired</p>
                            <p>Interview potential fits for your job, negotiate rates, and only pay for work you approve.</p>
                        </div>
                    </div>
                    <div className={style.freelanceCard}>
                        <Image height={75} width={75} src={safe}/>
                        <div>
                            <p>Safe and Secure</p>
                            <p>Focus on your work knowing we help protect your data and privacy.  We’re here with 24/7 support if you need it.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <Image
                src={freelanceImage}
                style={
                    {
                        height: "100%",
                        width: "100%"
                    }
                }
                />
            </div>
        </div>
    </div>
  )
}

export default Freelance