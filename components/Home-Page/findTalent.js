import React from "react";
import style from "../../styles/home-page/findTalent.module.css";
import findTalentPicture from "../../public/img/Home-Page/Technology.png";
import Vector from "../../public/img/Home-Page/Vector.png";
import Image from "next/image";
const FindTalent = () => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
          <div className={style.leftImageBox}>
          <div className={style.talentImages}>
            <Image
              src={findTalentPicture}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
        </div>
          </div>
          <div className={style.rightContentBox}>
            <div className={style.rightContainer}>
              <div className={style.rightContainerInner}>
                <div className={style.content}>
                  <p>Find the talent needed to </p>
                  <p>get your business growing.</p>
                </div>
                <p>
                  Advertise your jobs to millions of monthly users and search
                  million CV’s
                </p>
              </div>
              <button className="primary-btn">Explore</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FindTalent;
