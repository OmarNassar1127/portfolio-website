import React, { useRef, useEffect, useState } from "react";
import me2 from "../../assets/images/me2.png";

const Header = ({ toggleLanguage, language }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [activeSection, setActiveSection] = useState("#about");

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });

    setActiveSection(targetAttr);

    setTimeout(() => {
      window.scrollTo({
        top: location - 80,
        left: 0,
      });
    }, 200); 
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =============LOGO================= */}
          <div>
            <a className="flex items-center gap-[10px]" href="#about">
              <span
                className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] 
            rounded-full flex items-center justify-center "
              >
                <figure className="flex items-center justify-center">
                  <img src={me2} alt="" />
                </figure>
              </span>
              <div className="leading-[20px]">
                <h2 className="text-xl text-smallTextColor font-[700]">Omar</h2>
                <p className="text-smallTextColor text-[18px] font-[500]">
                  Personal
                </p>
              </div>
            </a>
          </div>
          {/* ============= LOGO END ================= */}
          {/* ============= MENU START ================= */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className={`text-smallTextColor font-[600] ${activeSection === "#about" ? "active" : ""}`}
                  href="#about"
                >
                  {language === "EN" ? "About" : "Over mij"}
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={`text-smallTextColor font-[600] ${activeSection === "#journey" ? "active" : ""}`}
                  href="#journey"
                >
                  Journey
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={`text-smallTextColor font-[600] ${activeSection === "#portfolio" ? "active" : ""}`}
                  href="#portfolio"
                >
                  {language === "EN" ? "Portfolio" : "Portefeuille"}
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={`text-smallTextColor font-[600] ${activeSection === "#skills" ? "active" : ""}`}
                  href="#skills"
                >
                  {language === "EN" ? "Skills" : "Vaardigheden"}
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={`text-smallTextColor font-[600] ${activeSection === "#contact" ? "active" : ""}`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* ============= MENU END ================= */}
          {/* ============= MENU RIGHT ================= */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-white flex items-center justify-center border bg-primaryColor hover:bg-headingColor py-2 px-4 rounded-[10px] max-h-[35px]  max-w-[60px]"
            >
              {language === "EN" ? "NL" : "EN"}
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/* ============= MENU END ================= */}
        </div>
      </div>
    </header>
  );
};

export default Header;
