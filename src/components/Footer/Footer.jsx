import React from "react";

const Footer = ({ language }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/*============== footer top ==============*/}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gao-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              {language === "EN"
                ? "Let's get in touch!"
                : "Neem contact met mij op!"}
            </h2>
            <a href="#contact">
              <button
                className="bg-primaryColor text-white font-[500] flex items-center gap-2
                                        hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
              >
                <i class="ri-mail-line"></i>
                {language === "EN" ? "Contact me" : "Neem contact met mij op"}
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-white leading-7 mt-4 sm:mt-0">
              {language === "EN"
                ? "Thank you for visiting my portfolio. If you have any questions or would like to work together, feel free to contact me, or you can also connect with me on:"
                : "Bedankt voor het bezoeken van mijn portfolio. Als u vragen heeft of samen wilt werken, neem dan gerust contact met mij op. U kunt ook verbinding met mij maken via:"}
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-2">
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="mailto:omarnassar1127@gmail.com"
                  className="text-gray-300 font-[500] text-[18px]"
                  target="blank"
                >
                  <i class="ri-mail-line"></i>
                </a>
              </span>{" "}
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://twitter.com/GodelTrabuco69"
                  className="text-gray-300 font-[500] text-[18px]"
                  target="blank"
                >
                  <i class="ri-twitter-line"></i>
                </a>
              </span>{" "}
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.facebook.com/omar.portero13"
                  className="text-gray-300 font-[500] text-[18px]"
                  target="blank"
                >
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>{" "}
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/omar-nassar-93a176155/"
                  className="text-gray-300 font-[500] text-[18px]"
                  target="blank"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/OmarNassar1127"
                  className="text-gray-300 font-[500] text-[18px]"
                  target="blank"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 mt-10 flex-wrap">
            <li>
              <a className="text-white font-[100]" href="#about">
                {language === "EN" ? "About" : "Over mij"}
              </a>
            </li>
            <li>
              <a className="text-white font-[100]" href="#journey">
                Journey
              </a>
            </li>
            <li>
              <a className="text-white font-[100]" href="#portfolio">
                {language === "EN" ? "Portfolio" : "Portefeuille"}
              </a>
            </li>
            <li>
              <a className="text-white font-[100]" href="#skills">
                {language === "EN" ? "Skills" : "Vaardigheden"}
              </a>
            </li>
            <li>
              <a className="text-white font-[100]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*============== footer top end ==============*/}
      {/*============== footer bottom ==============*/}
      <div className="bg-[#1b1e29] py-5 mt-5">
        <div className="container">
          <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            <div className="flex items-center justify-center">
              <p className="text-gray-400">
                Created by Omar Nassar © {year} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*============== footer bottom end ==============*/}
    </footer>
  );
};

export default Footer;
