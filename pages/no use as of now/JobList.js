import React from 'react'
import ListBannerSection from '@/components/listBannerSection'
import Layout from '@/components/layout'
import style from '@/styles/JobList/JobList.module.css';
import Image from 'next/image';
import searchBlack from "@/public/img/Employees/searchBlack.svg";
import Card from "@/components/JobList/Card";

const JobList = () => {
    return (
        <Layout>
            <div style={{display:'flex', justifyContent: 'flex-end'}}>
            <ListBannerSection heading={"Job List"} />
            </div>
            {/* Cards Box Starts */}
            <div className={style.cardsContainer}>
                {/* Input Box Starts */}
                <div className={style.inputBox}>
                    <div className={style.searchMiniBox}>
                        <input type="text" placeholder="Search" />
                        <Image src={searchBlack} height={30} width={30} />
                    </div>
                    <div className={`${style.dropDown1} ${style.dropDown}`}>
                        <select>
                            <option selected disabled>
                                Filter By
                            </option>
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                        </select>
                    </div>
                    <div className={`${style.dropDown3} ${style.dropDown}`}>
                        <select>
                            <option selected disabled>
                                Country
                            </option>
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                        </select>
                    </div>
                    <div className={`${style.dropDown4} ${style.dropDown}`}>
                        <select>
                            <option selected disabled>
                                Date
                            </option>
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                        </select>
                    </div>
                </div>
                {/* Input Box Ends */}

                <div className={style.cardRow}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        </Layout>
    )
}

export default JobList