import React, { useEffect, useRef } from "react";
import me from "../../assets/images/me.png";
import CountUp from "react-countup";
import Typed from "typed.js";

const Hero = ({ language }) => {
  const typedRef = useRef(null);

  const text =
    language === "EN"
      ? "As a passionate coder, I dive into a world filled with infinite possibilities, where creativity knows no bounds and ideas come to life through the power of code. My love for building things began at an early age and as a Fullstack developer, I strive for excellence every day. My ultimate ambition is to develop cutting-edge websites and applications from scratch for large corporations. To achieve this, I continuously enhance my programming skills and embrace new challenges. Currently, I serve as a Product Manager for Bitsliced LLC (GmbH), where we're pioneering a revolutionary NFT marketplace that enables the safe trading of real-world assets in digital form. As the head of product management, I oversee the product's logic, features, audits, and goals to ensure a smooth and timely delivery. During my free time, I hone my Front-end skills, mastering HTML, CSS, Javascript, and React. For a more detailed look at my work experience, please visit my page."
      : "Als een gepassioneerde programmeur duik ik in een wereld vol oneindige mogelijkheden, waar creativiteit geen grenzen kent en ideeën tot leven komen door de kracht van code. Mijn liefde voor het bouwen van dingen begon op jonge leeftijd en als Fullstack ontwikkelaar streef ik elke dag naar excellentie. Mijn ultieme ambitie is om geavanceerde websites en applicaties vanaf de basis te ontwikkelen voor grote bedrijven. Om dit te bereiken, verbeter ik voortdurend mijn programmeervaardigheden en omarm ik nieuwe uitdagingen. Momenteel werk ik als Product Manager voor Bitsliced LLC (GmbH), waar we een revolutionaire NFT-marktplaats ontwikkelen die de veilige handel in real-world assets in digitale vorm mogelijk maakt. Als hoofd van productbeheer zie ik toe op de logica, functies, audits en doelstellingen van het product om een soepele en tijdige levering te garanderen. In mijn vrije tijd verfijn ik mijn Front-end vaardigheden, waarbij ik HTML, CSS, Javascript en React beheers. Voor een meer gedetailleerde kijk op mijn werkervaring, bezoek mijn pagina.";

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
          {/* ============= hero img end ================= */}
          {/* ============= hero content right ================= */}
          <div
            className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
          md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                {language === "EN" ? "Success Rate" : "Slaagkans"}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={24} duration={1} suffix="" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                {language === "EN" ? "Age" : "Leeftijd"}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={2} suffix="" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                {language === "EN" ? "Languages Spoken" : "Talen"}
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={7} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                {language === "EN"
                  ? "Projects Completed"
                  : "Projecten afgerond"}
              </h4>
            </div>
          </div>
          {/* ============= hero content right end ================= */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
