import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LoadingOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ language }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_a7vkxnt",
        "template_e8yb2rm",
        form.current,
        "TSqjyuUZdiEwALBRn"
      )
      .then(
        () => {
          form.current.reset();
          toast.success(
            language === "EN"
              ? "Thank you for your message!"
              : "Bedankt voor uw bericht!"
          );
        },
        () => {
          toast.error("Sorry, something went wrong. Please try again");
        }
      )
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1300);
      });
  };

  return (
    <section id="contact" className="pb-16 m-[5px]">
      <ToastContainer />
      <div className="contact container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8 flex items-center justify-center">
          {language === "EN" ? "Get in touch!" : "Neem contact op!"}
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19500.474268381622!2d4.848801944608884!3d52.342140875020675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609fd919e5b05%3A0xfadb36a3b89991d8!2sAmsterdam-Zuid%2C%20Amsterdam!5e0!3m2!1sen!2snl!4v1680872096824!5m2!1sen!2snl"
              className="tune w-full h-full"
              allowFullScreen=""
              loading="lazy"
              ferrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="tune2 w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px]  lg:flex items-center bg-black-100 px-4 lg:px-8 py-8">
            <form
              className="w-full"
              ref={form}
              onSubmit={(e) => {
                sendEmail(e);
                form.current.reset();
              }}
            >
              <div className="mb-5">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder={
                    language === "EN" ? "Enter your name" : "Vul uw naam in"
                  }
                  className="contactInput w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder={
                    language === "EN"
                      ? "Enter your email"
                      : "Voer uw e-mailadres in"
                  }
                  className="contactInput w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="user_subject"
                  required
                  placeholder={language === "EN" ? "Subject" : "Onderwerp"}
                  className="contactInput w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  name="message"
                  required
                  rows={3}
                  placeholder={
                    language === "EN"
                      ? "Write your message"
                      : "Schrijf uw bericht"
                  }
                  className="contactInput w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-primaryColor text-white hover:bg-smallTextColor text-center ease-linear duration-150"
              >
                {loading ? (
                  <LoadingOutlined className="animate-spin" />
                ) : language === "EN" ? (
                  "Send"
                ) : (
                  "Versturen"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
