import React from "react";
import Layout from "@/components/layout";

import locationBlack from "../public/img/All Details Pages/location-black.svg";
import calender from "../public/img/All Details Pages/calender.svg";
import yellowStar from "../public/img/All Details Pages/star-yellow.svg";
import style from "../styles/All Details Files/ServiceProvidersDetails.module.css";
import englishLevel from "../public/img/All Details Pages/Service Providers Details/english-level.svg";
import gender from "../public/img/All Details Pages/Service Providers Details/gender.svg";
import girl from "../public/img/All Details Pages/Service Providers Details/girl.png";
import inQueueService from "../public/img/All Details Pages/Service Providers Details/in-queue-service.svg";
import jobSuccess from "../public/img/All Details Pages/Service Providers Details/job-success.svg";
import languages from "../public/img/All Details Pages/Service Providers Details/languages.svg";
import lastDelivery from "../public/img/All Details Pages/Service Providers Details/last-delivery.svg";
import memberSince from "../public/img/All Details Pages/Service Providers Details/member-since.svg";
import totalHours from "../public/img/All Details Pages/Service Providers Details/total-hours.svg";
import totalJobs from "../public/img/All Details Pages/Service Providers Details/total-jobs.svg";
import BannerGroup from "../public/img/All Details Pages/Company Details/banner-group.png";
import LocationBlue from "../public/img/All Details Pages/Service Providers Details/location-blue.svg";

import Image from "next/image";
const DeveloperDetails = () => {
    const bottomCardsData = [
        {
            title: "Education",
            cards: [
                {
                    cardTitle: "Los Angeles University",
                    cardData: "Bachelors, GPA: 3.4/4.0",
                    tag: "2005-2007"
                },
                {
                    cardTitle: "Los Angeles University2",
                    cardData: "Bachelors, GPA: 3.4/4.02",
                    tag: "2000-2002"
                }

            ]
        },
        {
            title: "Work and Experience",
            cards: [
                {
                    cardTitle: "Developer at Market Studios",
                    cardData: "Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design theme and graphics for marketing and sales presentations, training videos and corporate websites.",
                    tag: "2012-2015"
                },
                {
                    cardTitle: "Developer at Market Studios2",
                    cardData: "Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design theme and graphics for marketing and sales presentations, training videos and corporate websites2.",
                    tag: "2010-2012"
                }

            ]
        },
        {
            title: "Awards and Recognitions",
            cards: [
                {
                    cardTitle: "Los Angeles University",
                    cardData: "Bachelors, GPA: 3.4/4.0",
                    tag: "2005-2007"
                },
                {
                    cardTitle: "Los Angeles University2",
                    cardData: "Bachelors, GPA: 3.4/4.02",
                    tag: "2000-2003"
                },

            ]
        }
    ]
  return (
    <Layout>
      {/* Banner Starts */}
      <div className={style.banner}>
        <div className={style.bannerContainer}>
          <p className={style.firstPara}>
            I will develop blockchain based project
          </p>

          <div className={style.bannerInner}>
            <Image src={girl} width={100} height={100} />
            <div className={style.bannerInnerRight}>
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
              <p className={style.paraHeading}>Leslie Alexeander</p>
              <p>Developer</p>
            </div>
          </div>
        </div>
        <Image className={style.bannerGroup} src={BannerGroup} />
      </div>
      {/* Banner Ends */}

      {/* Body Starts */}
      <div className={style.container}>
        <div className={style.containerLeft}>
          <div className={style.topHeaders}>
            <div className={style.topHeadersCard}>
              <div>
                <Image src={totalJobs} height={30} width={30} />
              </div>
              <div>
                <p>Total Jobs</p>
                <p>Company</p>
              </div>
            </div>
            <div className={style.topHeadersCard}>
                <div>
                    <Image src={jobSuccess} height={30} width={30} />
                </div>
              <div>
                <p>Jop Success</p>
                <p>Company</p>
              </div>
            </div>
            <div className={style.topHeadersCard}>
                <div>
              <Image src={inQueueService} height={30} width={30} />
              </div>
              <div>
                <p>In queue service</p>
                <p>Company</p>
              </div>
            </div>
            <div className={style.topHeadersCard}>
                <div>
              <Image src={totalHours} height={30} width={30} />
              </div>
              <div>
                <p>Total Hours</p>
                <p>Company</p>
              </div>
            </div>
          </div>
          <div className={style.description}>
                <p className={style.cardsHeading}>Description</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ullamcorper quam, et lacinia mauris porta ut. Praesent ac scelerisque lacus. Nulla non auctor tortor. Aliquam erat volutpat. Aliquam in sapien arcu. Curabitur ligula erat, condimentum at rhoncus sed, pulvinar vel nibh. Nam lobortis vulputate urna et auctor. Nulla in enim eget magna pharetra tempus. Cras orci nisi, dignissim non ex fringilla, vestibulum egestas diam. Curabitur facilisis erat eget lacus finibus, a dapibus ligula ultrices. Donec id rutrum ipsum. Mauris blandit tempor est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce nec orci vestibulum, varius ligula sit amet, sagittis dolor. Mauris scelerisque in dolor sit amet elementum.</p>
          </div>
         {bottomCardsData.map((item)=> {
            return(
                <div className={style.bottomCards}>
                <p className={style.cardsHeading}>{item.title}</p>
                <div className={style.bottomCardsDiv2}>
                   {item.cards.map((card)=> {
                    return(
                        <div className={style.bottomCardsDiv2Card}>
                        <div>
                            <p>{card.cardTitle}</p>
                            <p>{card.cardData}</p>
                        </div>
                        <span>{card.tag}</span>
                    </div>
                    )
                   })}
                    
                </div>
              </div>
            )
         })}
        </div>
        <div className={style.containerRight}>
          <div className={style.containerRightInner}>
            <p>$ 29/ per hour</p>
            <div className={style.rightInnerBox}>
              <div>
                <div>
                  <Image src={LocationBlue} width={30} height={30} />
                  <p>Location</p>
                </div>
                <p>London, Uk</p>
              </div>
              <div>
                <div>
                  <Image src={memberSince} width={30} height={30} />
                  <p>Member Since</p>
                </div>
                <p>London, Uk</p>
              </div>
              <div>
                <div>
                  <Image src={lastDelivery} width={30} height={30} />
                  <p>Last Delivery</p>
                </div>
                <p>London, Uk</p>
              </div>
              <div>
                <div>
                  <Image src={gender} width={30} height={30} />
                  <p>Gender</p>
                </div>
                <p>London, Uk</p>
              </div>
              <div>
                <div>
                  <Image src={languages} width={30} height={30} />
                  <p>Languages</p>
                </div>
                <p>London, Uk</p>
              </div>
              <div>
                <div>
                  <Image src={englishLevel} width={30} height={30} />
                  <p>English Level</p>
                </div>
                <p>London, Uk</p>
              </div>
            </div>
          </div>
          <button className="primary-btn">Contact me</button>
        </div>
      </div>
      {/* Body Ends */}
    </Layout>
  );
};

export default DeveloperDetails;
