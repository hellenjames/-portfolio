"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Successfully from "./Successmessage";
function Contact() {
  const [showSuccesspop, setShowSuccessPop] = useState(false);

  const form = useRef();

  // const {currentUserDetails, setCurrentUserDetails} = useContext(StateContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(null);

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    let formErrors = {};
    if (name === "") {
      formErrors.name = "Name is required.";
    }

    if (email === "") {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid.";
    }

    if (phonenumber === "") {
      formErrors.phonenumber = "Number is required.";
    }

    if (message === "") {
      formErrors.message = "Messsage is required.";
    }

    setErrors(formErrors);

    console.log(errors);
    console.log(name);
    console.log(email);
    console.log(phonenumber);
    console.log(message);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully!");
      console.log(Object.keys(errors).length);
      console.log(formErrors);

      emailjs
        .sendForm("service_m3fuma9", "template_4pqkce7", form.current, {
          publicKey: "wtsJWZ4x8eikwctTH",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setShowSuccessPop(true);
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };
  return (
    <section className="relative">
      <form ref={form} onSubmit={(e) => handleSubmit(e)}>
        {/* <div style={styles.container}> */}
        {/* <div style={styles.form}> */}

        <div className="container mx-auto">
          <div className="flex justify-center flex-col items-center">
            {showSuccesspop && (
              <Successfully
                showSuccesspop={showSuccesspop}
                setShowSuccessPop={setShowSuccessPop}
              />
            )}
            <h2 className="text-[#03A9F5] text-3xl flex justify-center my-7">
              CONTACT
            </h2>
            <p className="flex justify-center text-center mb-4">
              {/* For more information about me and any inquiries and feedback feel free */}
              {/* to reach out to me.{" "} */}
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
            {console.log(errors)}
            <div className="bg-[#03A9F5] w-[50%] flex flex-col justify-center items-center mt-5   rounded-xl">
              <p className="text-red-500">
                {errors && errors.name && errors.name}
              </p>
              <p className=" my-2 font-light ">Full Name</p>
              <input
                className=" w-[80%] bg-white  text-[#03A9F5]  rounded-full my-5 p-4  outline-none "
                // style={styles.input}
                name="user_name"
                type="text"
                placeholder="Enter Your Name "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-red-500">
                {errors && errors.email && errors.email}
              </p>
              <p className="font-light ">Email</p>
              <input
                className=" w-[80%] bg-white  text-[#03A9F5]  rounded-full my-5 p-4  outline-none "
                // style={styles.input}
                name="user_email"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               <p className="text-red-500">
                {errors && errors.phonenumber && errors.phonenumber}
              </p>
              <p className="font-light ">Phone Number</p>

              <input
                className=" w-[80%] bg-white  text-[#03A9F5]  rounded-full my-5 p-4  outline-none "
                // style={styles.input}
                name="user_phonenumber"
                type="number"
                placeholder="Enter Your Phone Number"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <p className="text-red-500">
                {errors && errors.message && errors.message}
              </p>
              <p className="font-light "> Your Message</p>
              <textarea
                // style={styles.input}
                name="message"
                value={message}
                placeholder="Enter Your Message"
                className="bg-white text-[#03A9F5] pl-3 outline-none"
                cols="50"
                rows="10"
                onChange={(e) => setMessage(e.target.value)}
                type="submit"
              />
              {/* {errors.message && <p style={styles.error}>{errors.message}</p>} */}
              <input
                className="  border border-[black] rounded-full py-[13px] px-[20px] ml-[415px] my-2 text-[white] font-bold hover:bg-[black] hover:border-white cursor-pointer"
                type="submit"
                value={"SEND MESSAGE"}
                // style={{ ...styles.button, opacity: isFormValid ? 1 : 0.5 }}
              />
              {/* <p className="text-red-500">{errors.message}</p> */}
            </div>
          </div>
        </div>
      </form>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
export default Contact;
