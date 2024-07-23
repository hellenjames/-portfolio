"use client";
import React, { useState, useEffect, useContext, StateContext } from "react";
import Link from "next/link";

function Contact({ navigation }) {
  // const {currentUserDetails, setCurrentUserDetails} = useContext(StateContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Submit
  const handleSubmit = () => {
    useEffect(() => {
      validateForm();
    }, [name, email, message]);
    // Validate form
    const validateForm = () => {
      let errors = {};
      if (!name) {
        errors.name = "Name is required.";
      }

      if (!email) {
        errors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
      }

      if (!message) {
        errors.message = "Messsage is required.";
      } else if (message.length < 100) {
        errors.message = "message must be field.";
      }

      setErrors(errors);
      setIsFormValid(Object.keys(errors).length === 0);
      console.log(errors);
      console.log(name);
      console.log(email);
      console.log(message);
    };

    if (isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <section>
      {/* <div style={styles.container}> */}
      {/* <div style={styles.form}> */}

      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-[#03A9F5] text-3xl flex justify-center my-7">
            CONTACT
          </h2>
          <p className="flex justify-center text-center mb-4">
            {/* For more information about me and any inquiries and feedback feel free */}
            {/* to reach out to me.{" "} */}
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <div className="bg-[#03A9F5] w-[50%] justify-center items-center mt-5  p-5 rounded-xl">
            <p className="text-red-500">{errors.name && errors.name}</p>
            <p className="font-light text-sm">Name</p>
            <input
              className=" w-[80%] bg-white  text-[#03A9F5]  rounded-full my-5 p-4  outline-none "
              // style={styles.input}
              name="name"
              type="text"
              placeholder="Enter Your Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="text-red-500">{errors.email && errors.email}</p>
            <p className="font-light text-sm">Email</p>
            <input
              className=" w-[80%] bg-white  text-[#03A9F5]  rounded-full my-5 p-4  outline-none "
              // style={styles.input}
              name="name"
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
                        <p className="text-red-500">{errors.message && errors.message}</p>

            <p className="font-light text-sm">Message</p>
            <textarea
              // style={styles.input}
              value={message}
              placeholder="Enter Your Message"
              className="bg-white text-[#03A9F5] pl-3 outline-none"
              cols="50"
              rows="10"
              onChange={(e) => setPassword(e.target.value)}
              type="message"
            />
            {/* {errors.message && <p style={styles.error}>{errors.message}</p>} */}
            <button
              className="  border border-[black] rounded-full py-[13px] px-[20px] ml-[415px] text-[white] font-bold hover:bg-[black] hover:border-white cursor-pointer"
              // style={{ ...styles.button, opacity: isFormValid ? 1 : 0.5 }}
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
            <p className="text-red-500">{errors.message}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
export default Contact;
