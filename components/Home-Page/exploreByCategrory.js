import React from "react";
import style from "../../styles/home-page/ExploreByCategory.module.css";
import SmartContacts from "../../public/img/Home-Page/diploma.png";
import NativeBlockChain from "../../public/img/Home-Page/Blockchain Technology.png";
import ExchangeDevelopment from "../../public/img/Home-Page/Dollar Euro Exchange.png";
import Play2Earn from "../../public/img/Home-Page/Cash In Hand.png";
import DeFi from "../../public/img/Home-Page/Omnichannel.png";
import PrivateBlockChain from "../../public/img/Home-Page/Grand Master Key.png";
import GameFi from "../../public/img/Home-Page/Apple Arcade.png";
import Web3Wallets from "../../public/img/Home-Page/Wallet.png";
import Image from "next/image";

const ExploreByCategrory = () => {
  const topCategories = [
    {
      img: SmartContacts,
      name: "Smart Contacts",
    },
    {
      img: NativeBlockChain,
      name: "Native Block Chain",
    },
    {
      img: ExchangeDevelopment,
      name: "Exchange Development",
    },
    {
      img: Play2Earn,
      name: "Play 2 Earn",
    },
  ];
  const bottomCategories = [
    {
      img: DeFi,
      name: "DeFi",
    },
    {
      img: PrivateBlockChain,
      name: "Private Block Chain",
    },
    {
      img: GameFi,
      name: "GameFi",
    },
    {
      img: Web3Wallets,
      name: "Web3 Wallets",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.containerInner}>
        <div className={style.heading}>
          <h2>Explore By Category:</h2>
          <button className="primary-btn">Explore All</button>
        </div>
        <div className={style.categories}>
          <div className={style.top}>
            {topCategories.map((category)=> {
              return(
                <div className={style.categoryBox}>
                <Image src={category.img} width={150} height={150} />
                <p>{category.name}</p>
              </div>
              )
            })}
          </div>
          <div className={style.bottom}>
          {bottomCategories.map((category)=> {
              return(
                <div className={style.categoryBox}>
                <Image src={category.img} width={150} height={150} />
                <p>{category.name}</p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreByCategrory;
