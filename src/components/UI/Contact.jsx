import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = ({ language }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: ""
  });

  const content = {
    EN: {
      title: "Get in touch!",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Write your message",
      sendButton: "Send Message",
      successToast: "Thank you for your message!",
      errorToast: "Sorry, something went wrong. Please try again",
      mapTitle: "Find me in Amsterdam"
    },
    NL: {
      title: "Neem contact op!",
      namePlaceholder: "Vul uw naam in",
      emailPlaceholder: "Voer uw e-mailadres in",
      subjectPlaceholder: "Onderwerp",
      messagePlaceholder: "Schrijf uw bericht",
      sendButton: "Verstuur Bericht",
      successToast: "Bedankt voor uw bericht!",
      errorToast: "Sorry, er is iets misgegaan. Probeer het opnieuw",
      mapTitle: "Vind mij in Amsterdam"
    }
  };

  const currentContent = content[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      user_name: "",
      user_email: "",
      user_subject: "",
      message: ""
    });
    form.current.reset();
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_a7vkxnt",
        "template_e8yb2rm",
        form.current,
        "TSqjyuUZdiEwALBRn"
      );
      
      resetForm();
      toast.success(currentContent.successToast, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(currentContent.errorToast, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-headingColor mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-primaryColor mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-headingColor mb-2">
                  {currentContent.mapTitle}
                </h3>
                <p className="text-smallTextColor">
                  Amsterdam-Zuid, Netherlands
                </p>
              </div>
              <div className="relative h-80 sm:h-96">
                <iframe
                  title="google-maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19500.474268381622!2d4.848801944608884!3d52.342140875020675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609fd919e5b05%3A0xfadb36a3b89991d8!2sAmsterdam-Zuid%2C%20Amsterdam!5e0!3m2!1sen!2snl!4v1680872096824!5m2!1sen!2snl"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="user_name" className="sr-only">
                    {currentContent.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    required
                    placeholder={currentContent.namePlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="user_email" className="sr-only">
                    {currentContent.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    required
                    placeholder={currentContent.emailPlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="user_subject" className="sr-only">
                    {currentContent.subjectPlaceholder}
                  </label>
                  <input
                    type="text"
                    id="user_subject"
                    name="user_subject"
                    value={formData.user_subject}
                    onChange={handleInputChange}
                    required
                    placeholder={currentContent.subjectPlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="sr-only">
                    {currentContent.messagePlaceholder}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder={currentContent.messagePlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primaryColor text-white font-semibold py-4 px-6 rounded-xl hover:bg-opacity-90 focus:ring-4 focus:ring-primaryColor focus:ring-opacity-50 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{language === "EN" ? "Sending..." : "Versturen..."}</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line text-lg"></i>
                      {currentContent.sendButton}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;