import React, { useRef } from "react";

import styles from "./styles.module.css";

function Contact() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎");
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.form_wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.names}>
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  ref={firstNameRef}
                  name="firstName"
                  placeholder="First Name"
                  className={styles.input_text}
                  tabIndex="1"
                />
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  ref={lastNameRef}
                  name="lastName"
                  placeholder="Last Name"
                  className={styles.input_text}
                  tabIndex="2"
                />
              </div>
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                id="email"
                className={styles.input_text}
                placeholder="example@corp.com"
                tabIndex="3"
              />
              <label for="message">Message</label>

              <textarea
                placeholder="Start typing..."
                className={styles.message}
                name="message"
                ref={messageRef}
              />
              <button type="submit" className={styles.send_message}>
                Send
              </button>
            </form>
          </div>
          <div className={styles.picture_wrapper}>
            <h1>Picture</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
