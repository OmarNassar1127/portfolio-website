import React, { useEffect, useRef } from "react";
import me from "../../assets/images/me.png";
import CountUp from "react-countup";
import Typed from "typed.js";
import EnglishCV from "../../assets/cv/Omar-cv-en.pdf";
import DutchCV from "../../assets/cv/Omar-cv-nl.pdf";

const Hero = ({ language }) => {
  const typedRef = useRef(null);
  const cvLink = language === 'EN' ? EnglishCV : DutchCV;

  const text =
    language === "EN"
      ? "As a quick learner who thrives on challenges, I began in cryptocurrency trading, founding CIWW to educate on market strategies. At Vloto B.V., I’m a Backend Developer, building efficient APIs and enhancing automation. Recently, I've been focusing on AI projects, including a Private Document QA system using RAG and vector databases, and a neural network for recognizing nails even in blurry images. I’m passionate about shaping the future of digital technologies. Let’s connect to drive innovation forward."
      : "Als snelle leerling die gedijt op uitdagingen, begon ik in cryptocurrency-handel en richtte CIWW op om marktstrategieën te onderwijzen. Bij Vloto B.V. werk ik als Backend Developer, waar ik efficiënte API's bouw en automatisering verbeter. Recentelijk heb ik me gericht op AI-projecten, waaronder een Private Document QA-systeem met RAG en vectordatabases en een neuraal netwerk voor het herkennen van nagels. Ik ben gepassioneerd over het vormgeven van de toekomst van digitale technologieën. Laten we verbinden om innovatie vooruit te drijven.";

  useEffect(() => {
    const options = {
      strings: ["Software Development", "Product Management", "QA"],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    };

    typedRef.current = new Typed("#typed-text", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ============= hero left content ================= */}
          <div className="w-full md:w-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-blueGray-700 font-bold text-sm md:text-base"
            >
              {language === "EN" ? "Hello, my name is" : "Hallo, ik ben"}
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-blueGray-700 font-black tracking-wide text-3xl md:text-5xl leading-tight"
            >
              Omar Nassar{" "}
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-blueGray-700 font-bold text-sm md:text-base"
              >
                {language === "EN" ? "and I'm a" : "en ik ben een"}
              </h5>{" "}
              <span>Developer</span>
            </h1>
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-blueGray-700 font-bold text-sm md:text-base mt-1"
            >
              {language === "EN" ? "With experience in :" : "Met ervaring in:"}{" "}
              <span className="text-primaryColor" id="typed-text" />
            </h5>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                                        hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line"></i>
                  {language === "EN" ? "Contact me" : "Neem contact met mij op"}
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                {language === "EN" ? "See my portfolio" : "Zie mijn portfolio"}
              </a>
              <a href={cvLink} target="_blank" rel="noopener noreferrer">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                                        hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-article-line"></i>
                  {language === "EN" ? "CV" : "CV"}
                </button>
              </a>
            </div>
            <div>
              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 lg:max-w-[700px] text-headingColor lg:max-w-[400px]text-sm font-[500] lg:mx-auto mt-12 sm:pr-10 leading-7"
              >
                <span>
                  <i className="ri-apps-line"></i>
                </span>
                {text}
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-4 mt-14">
              <span className="text-blueGray-700 text-sm font-bold w-full mb-2">
                {language === "EN" ? "My socials:" : "Mijn socials:"}
              </span>
              <div className="flex flex-wrap gap-4">
                <span className="w-[35px] h-[35px] bg-primaryColor p-1 rounded-[50px] cursor-pointer text-center">
                  <a
                    href="mailto:omarnassar1127@gmail.com"
                    className="text-white font-bold text-[18px]"
                    target="blank"
                  >
                    <i class="ri-mail-line"></i>
                  </a>
                </span>{" "}
                <span className="w-[35px] h-[35px] bg-primaryColor p-1 rounded-[50px] cursor-pointer text-center">
                  <a
                    href="https://twitter.com/GodelTrabuco69"
                    className="text-white font-bold text-[18px]"
                    target="blank"
                  >
                    <i class="ri-twitter-line"></i>
                  </a>
                </span>{" "}
                <span className="w-[35px] h-[35px] bg-primaryColor p-1 rounded-[50px] cursor-pointer text-center">
                  <a
                    href="https://www.facebook.com/omar.portero13"
                    className="text-white font-bold text-[18px]"
                    target="blank"
                  >
                    <i class="ri-facebook-circle-fill"></i>
                  </a>
                </span>{" "}
                <span className="w-[35px] h-[35px] bg-primaryColor p-1 rounded-[50px] cursor-pointer text-center">
                  <a
                    href="https://www.linkedin.com/in/omar-nassar-93a176155/"
                    className="text-white font-bold text-[18px]"
                    target="blank"
                  >
                    <i class="ri-linkedin-box-fill"></i>
                  </a>
                </span>
                <span className="w-[35px] h-[35px] bg-primaryColor p-1 rounded-[50px] cursor-pointer text-center">
                  <a
                    href="https://github.com/OmarNassar1127"
                    className="text-white font-bold text-[18px]"
                    target="blank"
                  >
                    <i class="ri-github-fill"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* ============= hero right content ================= */}

          <div
            data-aos="fade-zoom-in"
            data-aos-delay="250"
            data-aos-duration="1000"
            className="basis-1/3 sm:mt-0"
          >
            <figure className="flex items-center justify-center">
              <img src={me} alt="" />
            </figure>
          </div>
          {/* ============= hero content right ================= */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 text-center mt-10 md:mt-0 md:text-end">
            {[
              { end: 120, labelEN: "APIs Developed", labelNL: "APIs Onwikkeld" },
              { end: 10, labelEN: "Automations Implemented", labelNL: "Geimplementeerde Automatiseringen" },
              { end: 15, labelEN: "Projects Completed", labelNL: "Projecten afgerond" },
              { end: 4, labelEN: "AI projects", labelNL: "AI-projecten" },
            ].map((item, index) => (
              <div className="mb-10" key={index}>
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <CountUp start={0} end={item.end} duration={2} suffix={index === 1 ? "" : "+"} />
                </h2>
                <h4 className="text-headingColor font-[700] text-[18px]">
                  {language === "EN" ? item.labelEN : item.labelNL}
                </h4>
              </div>
            ))}
          </div>
          {/* ============= hero content right end ================= */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
