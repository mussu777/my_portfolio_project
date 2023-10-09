import React from "react";

import {
  FaEnvelopeOpen,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">Mustak65ee@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaLinkedinIn className="info__icon" />

              <div>
                <span className="info__title">DM me</span>
                <h4 className="info__desc">mustak-mussu1729</h4>
              </div>
            </div>

            <div className="info__item">
              <FaTwitter className="info__icon" />

              <div>
                <span className="info__title">Reach me</span>
                <h4 className="info__desc">@MustaQ_0521</h4>
              </div>
            </div>

            <div className="info__item">
              <FaGithub className="info__icon" />

              <div>
                <span className="info__title">Check me</span>
                <h4 className="info__desc">github.com/mussu777</h4>
              </div>
            </div>
          </div>

          {/* ================= Skipped the small icon link process ==================== */}
        </div>

        <form
          className="contact__form"
          action="https://formspree.io/f/xknlpdzr"
          method="POST"
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="name" // Add name attribute
                required // Make the field required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="email" // Add name attribute
                required // Make the field required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject" // Add name attribute
                required // Make the field required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="message" // Add name attribute
              required // Make the field required
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
