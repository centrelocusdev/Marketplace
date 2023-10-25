import React from 'react'
import style from '../styles/All Details Files/CompanyDetails.module.css';
import Image from 'next/image';
import CardLogo from '../public/img/All Details Pages/Company Details/card-logo.png'
import BannerGroup from '../public/img/All Details Pages/Company Details/banner-group.png';
import locationBlack from '../public/img/All Details Pages/Company Details/location-black.svg'
import calender from '../public/img/All Details Pages/Company Details/calender.svg';
import yellowStar from '../public/img/All Details Pages/Company Details/star-yellow.svg';
import PrimaryIndustry from '../public/img/All Details Pages/Company Details/primary-industry.svg';
import companySize from '../public/img/All Details Pages/Company Details/company-size.svg';
import LocationBlue from '../public/img/All Details Pages/Company Details/location-blue.svg';
import LastDelivery from '../public/img/All Details Pages/Company Details/last-delivery.svg';
import email from '../public/img/All Details Pages/Company Details/email.svg';
import phone from '../public/img/All Details Pages/Company Details/phone.svg';
import Layout from '@/components/layout';
import Card from '@/components/Employees/Card';
import CardProject from '@/components/Projects/card';

const CompanyDetails = () => {
    return (
        <Layout>
            {/* Banner Starts */}
            <div className={style.banner}>
                <div className={style.bannerInner}>
                    <Image src={CardLogo} width={100} height={100} />
                    <div className={style.bannerInnerRight}>
                        <p className={style.firstPara}>Linear Comapany</p>
                        <p>Lorem Ipsum Dolar</p>
                        <div className={style.bannerInnerRightBottom}>
                            <div>
                                <Image src={locationBlack} height={16} width={16} />
                                <p>Brussels</p>
                            </div>
                            <div>
                                <Image src={calender} height={16} width={16} />
                                <p>Member since</p>
                            </div>
                            <div>
                                <p>4.5</p>
                                <Image src={yellowStar} height={16} width={16} />
                                <p>273 Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image className={style.bannerGroup} src={BannerGroup} />
            </div>
            {/* Banner Ends */}
            {/* Body Starts */}
            <div className={style.container}>
                    <div className={style.containerLeft}>
                        <div className={style.paraBoxes}>
                            <p>About Company</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ullamcorper quam, et lacinia mauris porta ut. Praesent ac scelerisque lacus. Nulla non auctor tortor. Aliquam erat volutpat. Aliquam in sapien arcu. Curabitur ligula erat, condimentum at rhoncus sed, pulvinar vel nibh. Nam lobortis vulputate urna et auctor. Nulla in enim eget magna pharetra tempus. Cras orci nisi, dignissim non ex fringilla, vestibulum egestas diam. Curabitur facilisis erat eget lacus finibus, a dapibus ligula ultrices. Donec id rutrum ipsum. Mauris blandit tempor est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce nec orci vestibulum, varius ligula sit amet, sagittis dolor. Mauris scelerisque in dolor sit amet elementum.</p>
                        </div>
                        <div className={style.paraBoxes}>
                            <p>Who are we?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ullamcorper quam, et lacinia mauris porta ut. Praesent ac scelerisque lacus. Nulla non auctor tortor. Aliquam erat volutpat. Aliquam in sapien arcu. Curabitur ligula erat, condimentum at rhoncus sed, pulvinar vel nibh. Nam lobortis vulputate urna et auctor. Nulla in enim eget magna pharetra tempus. Cras orci nisi, dignissim non ex fringilla, vestibulum egestas diam. Curabitur facilisis erat eget lacus finibus, a dapibus ligula ultrices. Donec id rutrum ipsum. Mauris blandit tempor est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce nec orci vestibulum, varius ligula sit amet, sagittis dolor. Mauris scelerisque in dolor sit amet elementum.</p>
                        </div>
                        <div className={style.paraBoxes}>
                            <p>What do we do?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ullamcorper quam, et lacinia mauris porta ut. Praesent ac scelerisque lacus. Nulla non auctor tortor. Aliquam erat volutpat. Aliquam in sapien arcu. Curabitur ligula erat, condimentum at rhoncus sed, pulvinar vel nibh. Nam lobortis vulputate urna et auctor. Nulla in enim eget magna pharetra tempus. Cras orci nisi, dignissim non ex fringilla, vestibulum egestas diam. Curabitur facilisis erat eget lacus finibus, a dapibus ligula ultrices. Donec id rutrum ipsum. Mauris blandit tempor est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce nec orci vestibulum, varius ligula sit amet, sagittis dolor. Mauris scelerisque in dolor sit amet elementum.</p>
                        </div>
                        <div className={style.projectsListBox}>
                            <p className={style.cardBoxHeading}>Projects</p>
                            <CardProject/>
                            <CardProject/>
                            <CardProject/>
                        </div>
                    </div>
                    <div className={style.containerRight}>
                        <div className={style.containerRightInner}>
                            <p>$ 29/ per hour</p>
                            <div className={style.rightInnerBox}>
                                <div>
                                    <div>
                                        <Image src={PrimaryIndustry} width={30} height={30}/>
                                        <p>Primary Industry</p>
                                    </div>
                                    <p>London, Uk</p>
                                </div>
                                <div>
                                    <div>
                                        <Image src={companySize} width={30} height={30}/>
                                        <p>Company Size</p>
                                    </div>
                                    <p>London, Uk</p>
                                </div>
                                <div>
                                    <div>
                                        <Image src={LocationBlue} width={30} height={30}/>
                                        <p>Location</p>
                                    </div>
                                    <p>London, Uk</p>
                                </div>
                                <div>
                                    <div>
                                        <Image src={LastDelivery} width={30} height={30}/>
                                        <p>Last Delivery</p>
                                    </div>
                                    <p>London, Uk</p>
                                </div>
                                <div>
                                    <div>
                                        <Image src={email} width={30} height={30}/>
                                        <p>Email</p>
                                    </div>
                                    <p>London, Uk</p>
                                </div>
                                <div>
                                    <div>
                                        <Image src={phone} width={30} height={30}/>
                                        <p>Phone</p>
                                    </div>
                                    <p>London, Uk</p>
                                </div>
                            </div>
                        </div>
                        <button className='primary-btn'>Contact me</button>
                    </div>
            </div>
            {/* Body Ends */}
        </Layout>
    )
}

export default CompanyDetails