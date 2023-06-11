import earth from "../images/earth2.gif";
import React, { useRef} from "react";
import emailjs from "@emailjs/browser";

const FeedbackSection = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        form.current,
        "from_id"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-section">
        <div className="earth-container">
          <img src={earth} alt="earth gif" />
        </div>

        <div className="feedback-container">
          <h2>Give Feedback</h2>
          <form ref={form} onSubmit={handleSubmit} className="feedback-form">
            <input
              type="email"
              name="from_email"
              className="input-field"
              placeholder="your email"
              required
            />
            <textarea
              rows="6"
              name="message"
              className="input-field"
              placeholder="your message"
              required
            ></textarea>
            <input
              className="submit-button"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>

      <footer>
        <p>copyright @hafsamalik 2023</p>
      </footer>
    </div>
  );
};

export default FeedbackSection;
