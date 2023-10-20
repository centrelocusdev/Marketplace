import React from 'react'
import postJob from '../../public/img/Home-Page/post-job.png';
import style from '../../styles/home-page/PostJob.module.css';
import Image from 'next/image';
const PostJob = () => {
  return (
    <div className={style.container}>
        <div className={style.innerContainer}>
            <div className={style.left}>
                <Image 
                src={postJob}
                style={{
                    height:"100%",
                    width: "100%"
                }}/>
            </div>
            <div className={style.right}>
                <p>Get Applications from theworld best talents.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat vitae eros nec dictum. Curabitur commodo nisl in scelerisque commodo. Nunc fringilla maximus felis eu consequat. Duis odio lectus, convallis.</p>
                <button className='primary-btn'>Post a Job</button>
            </div>
        </div>
    </div>
  )
}

export default PostJob