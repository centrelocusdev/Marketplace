import React from "react";
import style from "../styles/signin.module.css";
import Image from "next/image";
import signin from "../public/img/signin.png";
import { useState, useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {PiDotBold} from 'react-icons/pi';
import {BiArrowBack} from 'react-icons/bi';
import Link from "next/link";
// import { signIn } from "next-auth/react";
const Signin = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errs, seterrs] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // async function handleSubmit(event) {
  //   try {
  //     setIsFormSubmitted(true);
  //     event.preventDefault();
  //     if (isFormValid) {
  //      const result = await signIn("credentials" , {
  //       redirect: false,
  //       email,
  //       password,
  //      })
  //      if(result){
  //       console.log(result);
  //      }
  //     }else{
  //       toast('fill all the fields in the form.');
  //     }
  //   } catch (err) {
  //     console.log("err in signin", err.message);
  //     if (err && err.message) {
  //       toast(err.message);
  //     }
  //   }
  // }
  // useEffect(() => {
  //   validateForm();
  // }, [email, password]);
  // // Validate form
  // const validateForm = () => {
  //   let errs = {};
  //   if (!email) {
  //     errs.email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errs.email = "Email is invalid.";
  //   }

  //   if (!password) {
  //     errs.password = "Password is required.";
  //   } 
   
  //   seterrs(errs);
  //   setIsFormValid(Object.keys(errs).length === 0);
  // };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.leftInner}>
           <form className={style.form} onSubmit={handleSubmit}> 
           <div style={{display: "flex" , gap: "10px", alignItems: "center"}}>
              <Link href="/">
              <BiArrowBack/>
              </Link>
              <p className={style.leftHeading}>Sign in</p>
           </div>
              <input type="email" placeholder="Email Address*" name="email" value={email} onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
              <input type="password" placeholder="Password*" name="password" value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}/>
              <div className={style.buttonBox}>
              <button >Sign In</button>
              <p>Forgot your password?</p>
              <p>for development only</p>
              <button>service provider</button>
              <Link href="/ServiceProvidersList">
              <button>servide taker</button>
              </Link>
              </div>
           </form>
           <div className={style.newAccount}>
            <p>Or</p>
            <button>Create New Account</button>
           </div>
          </div>
         <div className={style.terms}>
         <span>Terms and conditions</span>
         <PiDotBold size={50}/>
          <span>Privacy Policy</span>
         </div>
        </div>
        <div className={style.right}>
          <div className={style.imageContainer}>
            <Image src={signin} className={style.image} alt="signin"/>
          </div>
        </div>
        
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
    </div>
  );
};

export default Signin;
