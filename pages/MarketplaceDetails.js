import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import style from "../styles/marketplaceDetails.module.css";
import Image from "next/image";
import bannerProfile from "@/public/img/Marketplace Details/banner profile.svg";
import backArrow from "@/public/img/Marketplace Details/back-arrow.svg";
import certificate from "@/public/img/Marketplace Details/Certificate.png";
import facebook from "@/public/img/Marketplace Details/facebook.svg";
import instagram from "@/public/img/Marketplace Details/Instagram.svg";
import linkedin from "@/public/img/Marketplace Details/LinkedIn.svg";
import news from "@/public/img/Marketplace Details/News.png";
import review2 from "@/public/img/Marketplace Details/review 2.svg";
import filledStar from "@/public/img/Marketplace Details/filledStar.svg";
import emptyStar from "@/public/img/Marketplace Details/emptyStar.svg";
import twitter from "@/public/img/Marketplace Details/Twitter.svg";
import view from "@/public/img/Marketplace Details/view.png";
import nextArrow from "@/public/img/Marketplace Details/next-arrow.svg";

import Layout from "@/components/layout";
import Slider from "react-slick";

const MarketplaceDetails = () => {
  const reviewCardData = [
    {
      review:
        "“Their proactive approaches and enthusiasm helped us to achieve what we have considered impossible in our domain.”",
      ratings: 4,
      img: review2,
      name: "Jane Smith",
      post: "Freelancer Designer",
    },
    {
      review:
        "“Looking for the best solutions to your problems? I’d suggest everyone seek help from the UAATEAM for the best advice. The experience of working with UAATEAM has been the best to date. They are very efficient and promising. They even manage to complete their work before the promised deadline. Thank you for the cool SEO of my site.”",
      ratings: 5,
      img: review2,
      name: "Mars",
      post: "Freelancer Designer",
    },
    {
      review:
        "“Their proactive approaches and enthusiasm helped us to achieve what we have considered impossible in our domain.”",
      ratings: 3,

      img: review2,
      name: "Kavya",
      post: "Freelancer Designer",
    },
    {
      review:
        "“Their proactive approaches and enthusiasm helped us to achieve what we have considered impossible in our domain.”",
      ratings: 2,

      img: review2,
      name: "Lorence",
      post: "Freelancer Designer",
    },
    {
      review:
        "“Looking for the best solutions to your problems? I’d suggest everyone seek help from the UAATEAM for the best advice. The experience of working with UAATEAM has been the best to date. They are very efficient and promising. They even manage to complete their work before the promised deadline. Thank you for the cool SEO of my site.”",
      ratings: 3,

      img: review2,
      name: "Jane Smith",
      post: "Freelancer Designer",
    },
    {
      review:
        "“Their proactive approaches and enthusiasm helped us to achieve what we have considered impossible in our domain.”",
      ratings: 2,

      img: review2,
      name: "Jane Smith",
      post: "Freelancer Designer",
    },
    {
      review:
        "“Their proactive approaches and enthusiasm helped us to achieve what we have considered impossible in our domain.”",
      ratings: 4,

      img: review2,
      name: "Jane Smith",
      post: "Freelancer Designer",
    },
    {
      review:
        "“Looking for the best solutions to your problems? I’d suggest everyone seek help from the UAATEAM for the best advice. The experience of working with UAATEAM has been the best to date. They are very efficient and promising. They even manage to complete their work before the promised deadline. Thank you for the cool SEO of my site.”",
      ratings: 5,

      img: review2,
      name: "Jane Smith",
      post: "Freelancer Designer",
    },
    {
      review:
        "“Looking for the best solutions to your problems? I’d suggest everyone seek help from the UAATEAM for the best advice. The experience of working with UAATEAM has been the best to date. They are very efficient and promising. They even manage to complete their work before the promised deadline. Thank you for the cool SEO of my site.”",
      ratings: 3,

      img: review2,
      name: "Jane Smith",
      post: "Freelancer Designer",
    },
    {
      review:
        "“Their proactive approaches and enthusiasm helped us to achieve what we have considered impossible in our domain.”",
      ratings: 2,

      img: review2,
      name: "Jane Smith",
      post: "Freelancer Designer",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Layout>
      <div className={style.main}>
        {/* Banner Starts */}
        <div className={style.bannerContainer}>
          <div className={style.bannerLeft}>
            <div>
              <Image src={bannerProfile} alt={"banner-profile"} />
              <p>Company's Name</p>
            </div>
            <div>
              <Image src={facebook} alt="facebook" height={40} width={40} />
              <Image src={twitter} alt="twitter" height={40} width={40} />
              <Image src={instagram} alt="instagram" height={40} width={40} />
              <Image src={linkedin} alt="linkedin" height={40} width={40} />
            </div>
          </div>
          <div className={style.bannerRight}>
            <p className={style.rightHeading}>Ratings</p>
            <div className={style.ratings}>
              <div className={style.rateTag}>
                <p>Excellent</p>
                <div></div>
              </div>
              <div className={style.rateTag}>
                <p>Very Good</p>
                <div></div>
              </div>
              <div className={style.rateTag}>
                <p>Good</p>
                <div></div>
              </div>
              <div className={style.rateTag}>
                <p>Poor</p>
                <div></div>
              </div>
              <div className={style.rateTag}>
                <p>Terrible</p>
                <div></div>
              </div>
            </div>
            <div className={style.reviews}>
              <div className={style.reviewsLeft}>
                <div>
                  <span>4.5</span>
                  <Image src={filledStar} alt="star" height={16} width={16} />
                </div>
                <p>273 Reviews</p>
              </div>
              <div className={style.reviewsRight}>
                <p>88%</p>
                <p>Recommended</p>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Ends */}

        {/* About and Achievements Starts */}
        <div className={style.aboutAndAchievementsContainer}>
          <div className={style.about}>
            <div>
              <button>About</button>
              <button>Case Studies</button>
              <button>Articles</button>
            </div>
            <div>
              <section>
                <h3>About</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus consectetur ullamcorper quam, et lacinia mauris porta
                  ut. Praesent ac scelerisque lacus. Nulla non auctor tortor.
                  Aliquam erat volutpat. Aliquam in sapien arcu. Curabitur
                  ligula erat, condimentum at rhoncus sed, pulvinar vel nibh.
                  Nam lobortis vulputate urna et auctor. Nulla in enim eget
                  magna pharetra tempus. Cras orci nisi, dignissim non ex
                  fringilla, vestibulum egestas diam. Curabitur facilisis erat
                  eget lacus finibus, a dapibus ligula ultrices. Donec id rutrum
                  ipsum. Mauris blandit tempor est. Interdum et malesuada fames
                  ac ante ipsum primis in faucibus. Fusce nec orci vestibulum,
                  varius ligula sit amet, sagittis dolor. Mauris scelerisque in
                  dolor sit amet elementum.
                </p>
                <p>
                  Proin interdum dui ac mauris laoreet, nec imperdiet leo
                  tincidunt. Integer sed dignissim ante, et tempor felis.
                  Phasellus justo nulla, pulvinar quis orci sit amet, pretium
                  eleifend nisl. Etiam pretium lobortis magna a luctus. Aliquam
                  erat volutpat. Ut sem mauris, consectetur eu scelerisque non,
                  tristique ut ex. Suspendisse vel sollicitudin augue, eu
                  dignissim ligula. Nunc consequat accumsan ex. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia
                </p>
              </section>
              <section>
                <h3>Team</h3>
                <p>
                  Over 50 experts make up our team. Since they are all spread
                  out over the globe, we have the opportunity to get knowledge
                  of the marketplaces of many nations. The departments include
                  PPC, SEO, Email, SMM, and CRO.All of our specialists are
                  experts in their fields.
                </p>
              </section>
              <section>
                <h3>Typical Hourly rate</h3>
                <p>45</p>
              </section>
            </div>
          </div>
          <div className={style.achievements}>
            <div className={style.achievementsBox}>
              <div className={style.achievementsTop}>
                <Image
                  src={certificate}
                  alt="certificate"
                  height={100}
                  width={100}
                />
                <p>Achievements</p>
              </div>
              <div className={style.achievementsBottom}>
                <div>
                  <Image src={view} alt="view" height={60} width={60} />
                  <span>5 Case Studies Published</span>
                </div>
                <div>
                  <Image src={news} alt="news" height={60} width={60} />
                  <span>1 Article Published</span>
                </div>
              </div>
            </div>
            <div className={style.extraStuffBox}>
              <div>
                <p>Location</p>
                <p>Ukraine</p>
              </div>
              <div>
                <p>Language</p>
                <p>English | German</p>
              </div>
              <div>
                <p>Hourly Rate</p>
                <p>Project Dependent</p>
              </div>
              <div>
                <p>Typical Project Size</p>
                <p>$25-$50</p>
              </div>
            </div>
          </div>
        </div>
        {/* About and Achievements Ends */}

        {/* Reviews Section Starts */}
        <div className={style.reviewContainer}>
          <div className={style.reviewTopHeadingBox}>
            <div className={style.reviewHeading}>
              <h2>Reviews</h2>
              <p>
                Don't just take our word for it - see what actual users of our
                service{" "}
              </p>
              <p>have to say about their experience.</p>
            </div>
            {/* <div className={style.reviewButtons}>
              <button>
                <Image
                  src={backArrow}
                  alt="back-arrow"
                  height={24}
                  width={24}
                />
              </button>
              <button>
                <Image
                  src={nextArrow}
                  alt="next-arrow"
                  height={24}
                  width={24}
                />
              </button>
            </div> */}
          </div>
          <div className={style.reviewsBox}>
            <Slider {...settings}>
              {reviewCardData.map((item) => {
                return (
                  <div  className={style.reviewCard}>
                    <p>
                     {item.review}
                    </p>
                    <div className={style.ratingsStars}>
                        {Array.from({length:item.ratings}).map((rating) => {
                            return(
                                <Image src={filledStar} height={20} width={20} />
                            )
                        })}
                         {Array.from({length: 5-item.ratings}).map((rating) => {
                            return(
                                <Image src={emptyStar} height={20} width={20} />
                            )
                        })}
                     
                    </div>
                    <div className={style.reviewUser}>
                      <Image
                        src={item.img}
                        alt="review-user"
                        height={50}
                        width={50}
                      />
                      <p>{item.name}</p>
                      <p>{item.post}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        {/* Reviews Section Ends */}
        {/* Get what you need starts */}
        <div className={style.getWhatYouNeed}>
          <div className={style.getWhatYouNeedInner}>
            <div>
              <h2>Get What You Need?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                consectetur ullamcorper quam,
              </p>
            </div>
            <div>
              <button>Post Now</button>
            </div>
          </div>
        </div>
        {/* Get what you need ends */}
      </div>
    </Layout>
  );
};

export default MarketplaceDetails;
