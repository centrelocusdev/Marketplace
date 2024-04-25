import React from "react";
import style from "../styles/signup.module.css";
import Image from "next/image";
import signup from "../public/img/signup.png";
import { useState, useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {PiDotBold} from 'react-icons/pi';
import {BiArrowBack} from 'react-icons/bi';
import Link from "next/link";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [userType, setUserType] = useState("");
  const [errs, seterrs] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  async function handleSubmit(event) {
    try {
      setIsFormSubmitted(true);
      event.preventDefault();
      if (isFormValid) {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            serviceType,
            userType,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        event.target.value = "";
        if (!response) {
          throw new err("Something went wrong!");
        }
        const data = await response.json();

        if (data) {
          toast(data.message);
        }
        console.log(data);
      }else{
        toast('fill all the fields in the form.');
      }
    } catch (err) {
      console.log("err in signup", err.message);
      if (err && err.message) {
        toast(err.message);
      }
    }
  }
  useEffect(() => {
    validateForm();
  }, [firstName, lastName, email, password, serviceType, userType]);
  // Validate form
  const validateForm = () => {
    let errs = {};

    if (!firstName || !lastName) {
      errs.name = "Name is required.";
    }

    if (!email) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = "Email is invalid.";
    }

    if (!password) {
      errs.password = "Password is required.";
    } else if (password.length < 7) {
      errs.password = "Password must be at least 6 characters.";
    }
    if (!serviceType) {
      errs.serviceType = "Service Type is required.";
    }
    if (!userType) {
      errs.userType = "User Type is required.";
    }

    seterrs(errs);
    setIsFormValid(Object.keys(errs).length === 0);
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.leftInner}>
           <div style={{display: "flex" , gap: "10px", alignItems: "center"}}>
              <Link href="/">
              <BiArrowBack/>
              </Link>
              <p className={style.leftHeading}>Sign up</p>
           </div>
            <form className={style.form} onSubmit={handleSubmit}>
              <div className={style.nameBox}>
                <div className={style.inputTextBox}>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                {isFormSubmitted && errs.name && <p className={style.err}>{errs.name}</p>}
                </div>

                <div className={style.inputTextBox}>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                {isFormSubmitted && errs.name && <p className={style.err}>{errs.name}</p>}
                </div>
              </div>
              <div>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {isFormSubmitted && errs.password && <p className={style.err}>{errs.password}</p>}
              </div>

             <div>
             <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {isFormSubmitted && errs.email && <p className={style.err}>{errs.email}</p>}
             </div>

              <div className={style.radioBox}>
                <div>
                  <h4>Service type:</h4>
                  {isFormSubmitted && errs.serviceType && (
                    <p className={style.err}>{errs.serviceType}</p>
                  )}

                  <section>
                    <input
                      type="radio"
                      name="serviceType"
                      value="Service taker"
                      onChange={(e) => {
                        setServiceType(e.target.value);
                      }}
                    />
                    <label>Service taker</label>
                  </section>
                  <section>
                    <input
                      type="radio"
                      name="serviceType"
                      value="Service Provider"
                      onChange={(e) => {
                        setServiceType(e.target.value);
                      }}
                    />
                    <label>Service provider</label>
                  </section>
                </div>
                <div>
                  <h4>User type:</h4>
                  {isFormSubmitted && errs.userType && (
                    <p className={style.err}>{errs.userType}</p>
                  )}

                  <section>
                    <input
                      type="radio"
                      name="userType"
                      value="Individual"
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                    />
                    <label>Individual</label>
                  </section>
                  <section>
                    <input
                      type="radio"
                      name="userType"
                      value="Organisation"
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                    />
                    <label>Organisation</label>
                  </section>
                </div>
              </div>
            </form>
            <button onClick={handleSubmit}>Sign Up</button>
          </div>
         <div className={style.terms}>
         <span>Terms and conditions</span>
         <PiDotBold size={50}/>
          <span>Privacy Policy</span>
         </div>
        </div>
        <div className={style.right}>
          <div className={style.imageContainer}>
            <Image src={signup} className={style.image} alt="signup"/>
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

export default Signup;
