import React from 'react'
import style from '../../styles/home-page/featuredJobs.module.css';
import Save from '../../public/img/Home-Page/save.svg';
import FullTime from '../../public/img/Home-Page/full-time.svg';
import Location from '../../public/img/Home-Page/location.svg';
import Google from '../../public/img/Home-Page/Google.png';
import Image from 'next/image';
const FeaturedJobs = () => {
    const cardData = [
        {},
        {},
        {}
    ]
  return (
    <div className={style.container}>
        <div className={style.containerInner}>
            <div className={style.heading}>
                <p>Featured Jobs:</p>
                <button className='primary-btn'>Explore</button>
            </div>
            <div className={style.contentBox}>
                {cardData.map((card)=> {
                    return(
                        <div className={style.card}>
                            <div className={style.cardUpper}>
                                <div className={style.first}>
                                    <Image src={Google}/>
                                    <p>Google INC</p>
                                    <p>Product Designer</p>
                                </div>
                                <div className={style.second}>
                                    <div>
                                    <Image src={FullTime}/>
                                        Full-Time
                                    </div>
                                    <div>
                                    <Image src={Location}/>
                                        Country
                                    </div>
                                    <div>
                                        $ 80k-90k
                                    </div>
                                </div>
                                <div className={style.third}>
                                <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
                                </div>
                            </div>
                            <div className={style.cardBottom}>
                                <button className='primary-btn'>Explore</button>
                                <button className='primary-btn'><Image src={Save} height={24} width={24}/>Save</button>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>

    </div>
  )
}

export default FeaturedJobs