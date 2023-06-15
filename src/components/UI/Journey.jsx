import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsdImg from "../../assets/images/apps.png";

const Journey = ({ language }) => {
  const text =
    language === "EN"
      ? "In 2017, I began my software development career at MBO Amstelland, where I learned HTML/CSS and later PHP, Javascript, and MySQL. I excelled in coding, finding it engrossing and comfortable. After interning for a year at CSDM, I continued working there for another year after graduation. I graduated at the top of my class, and subsequently worked for another year before starting my own company, Bitsliced. As a product manager, I am pursuing my passion for blockchain and cryptocurrencies by building an NFT marketplace for trading real-world assets as digital assets."
      : "In 2017 begon ik mijn loopbaan in de softwareontwikkeling bij MBO Amstelland, waar ik HTML/CSS leerde en later PHP, Javascript en MySQL. Ik blonk uit in programmeren en vond het boeiend en comfortabel. Na een jaar stage te hebben gelopen bij CSDM, werkte ik daar nog een jaar na mijn afstuderen. Ik ben afgestudeerd als beste van mijn klas en heb vervolgens nog een jaar gewerkt voordat ik mijn eigen bedrijf, Bitsliced, startte. Als productmanager volg ik mijn passie voor blockchain en cryptocurrencies door een NFT-marktplaats te bouwen voor de handel in real-world assets als digitale assets.";
  const text1 =
    language === "EN"
      ? "During the initial 18 months of my education, the emphasis was on frontend development, where I gained a comprehensive understanding of HTML/CSS and the integration of JavaScript to enhance the functionality and interactivity of web applications. Although the curriculum leaned towards frontend development, I thoroughly enjoyed every aspect of it."
      : "Gedurende de eerste 18 maanden van mijn opleiding lag de nadruk op frontend-ontwikkeling, waar ik een grondig begrip van HTML/CSS verwierf en van de integratie van JavaScript om de functionaliteit en interactiviteit van webapplicaties te verbeteren. Hoewel het curriculum gericht was op frontend-ontwikkeling, heb ik elk aspect ervan grondig genoten.";
  const text2 =
    language === "EN"
      ? "During the last 18 months of school, we were introduced to a range of technologies including PHP, MySQL, C# and Wordpress. However, the focus was primarily on PHP and MySQL, where we learned how to create tables, establish connections between them, retrieve data from databases, and build applications with essential CRUD functionalities."
      : "Gedurende de laatste 18 maanden van school werden we geïntroduceerd aan verschillende technologieën, waaronder PHP, MySQL, C# en Wordpress. De nadruk lag echter voornamelijk op PHP en MySQL, waar we hebben geleerd hoe we tabellen kunnen creëren, verbindingen tussen hen kunnen opzetten, gegevens uit databases kunnen ophalen en applicaties kunnen bouwen met de essentiële CRUD-functionaliteiten.";
  const text3 =
    language === "EN"
      ? "This year, I delved into the fascinating world of blockchain and cryptography. I gained extensive knowledge about blockchains, including the various types and consensus mechanisms. However, the most intriguing aspect for me was exploring the limitless possibilities of smart contracts. These contracts are capable of automating complex tasks that would otherwise require days or even weeks to complete."
      : "Dit jaar dook ik in de fascinerende wereld van blockchain en cryptografie. Ik heb uitgebreide kennis opgedaan over blockchains, inclusief de verschillende soorten en consensusmechanismen. Het meest intrigerende aspect voor mij was echter het verkennen van de onbegrensde mogelijkheden van smart contracts. Deze contracten zijn in staat om complexe taken te automatiseren die anders dagen of zelfs weken zouden kosten om te voltooien.";
  const text4 =
    language === "EN"
      ? "During my time at CSDM, I served as a front-end developer, utilizing ReactJS and myGraphQL to develop web applications. Through my internship experience, I gained valuable insight into the workings of a company. Following my graduation, I took on more significant responsibilities, including the opportunity to stay at CSDM as a junior software developer. In this new role, I had the chance to design and implement features for high-profile clients such as Coca-Cola, Shell, and Schiphol, to name a few. This offer to continue my journey at CSDM further validated my capabilities and allowed me to expand my skills in a professional setting."
      : "Tijdens mijn tijd bij CSDM werkte ik als front-end ontwikkelaar, waarbij ik gebruik maakte van ReactJS en myGraphQL om webapplicaties te ontwikkelen. Via mijn stage-ervaring heb ik waardevol inzicht gekregen in hoe een bedrijf functioneert. Na mijn afstuderen kreeg ik de mogelijkheid om als junior softwareontwikkelaar bij CSDM te blijven. In deze nieuwe rol kreeg ik de kans om belangrijkere verantwoordelijkheden op me te nemen, waaronder het ontwerpen en implementeren van functies voor gerenommeerde klanten zoals Coca-Cola, Shell en Schiphol, om er een paar te noemen. Dit aanbod om mijn traject bij CSDM voort te zetten bevestigde mijn capaciteiten en bood mij de gelegenheid om mijn vaardigheden verder uit te breiden in een professionele omgeving.";
  const text5 =
    language === "EN"
      ? "After a year of focusing on self-development, I embarked on a teaching career where I imparted the fundamentals to aspiring learners. During this time, a student introduced me to a compelling business idea that I couldn't refuse: Bitsliced. As mentioned earlier, Bitsliced is an NFT marketplace that leverages blockchain technology to create digital representations of real-world assets as NFTs, thereby streamlining the trading process while ensuring safety and efficiency. To bring this idea to fruition, I assembled a team of four professionals whom I currently manage while overseeing project development and ensuring quality assurance."
      : "Na een jaar gericht te hebben op zelfontwikkeling, begon ik aan een carrière in het onderwijs waarbij ik de basisprincipes overbracht aan aspirant-leerlingen. Tijdens deze periode introduceerde een student me bij een boeiend bedrijfsidee dat ik niet kon weigeren: Bitsliced. Zoals eerder vermeld, is Bitsliced een NFT-marktplaats die gebruikmaakt van blockchaintechnologie om digitale representaties van real-world assets als NFT's te creëren, waardoor het handelsproces wordt gestroomlijnd terwijl de veiligheid en efficiëntie worden gegarandeerd. Om dit idee te verwezenlijken, heb ik een team van vier professionals samengesteld die ik momenteel beheer terwijl ik het projectontwikkeling superviseer en zorg voor kwaliteitsborging.";

  return (
    <div>
      <section id="journey">
        <div className="container lg:pt-5">
          <div className="text-center">
            <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
              {language === "EN" ? "My journey" : "Mijn reis"}
            </h2>
            <p className="lg:max-w-[800px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
              {text}
            </p>
            <div className="mt-2">
              <span className="text-primaryColor font-bold text-[20px] mt-5">
                {" "}
                {language === "EN"
                  ? "Here below is a timline with more details about my journey."
                  : "Hieronder is een tijdlijn met meer details over mijn journey."}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-6xl sm:mx-auto sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                {/* ============= Vertical line running through the middle ================= */}
                <div
                  className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform 
                    -translate-x-1/2"
                ></div>
                {/* ============= Left card ================= */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-delay="100"
                          data-aos-duration="1300"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easi-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mt-3 mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            {language === "EN"
                              ? "First 18 months of the career"
                              : "Eerste 18 maanden van de opleiding"}
                          </h3>
                          <h5 className=" font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-[15px]">
                            Frontend Development
                          </h5>
                          <p className="text-[15px] text-gray-600 group-hover:text-white group-hover:font-[500] leading-7">
                            {text1}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                    >
                      <figure>
                        <img src={frontendImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ============= Right card ================= */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-delay="50"
                          data-aos-duration="1400"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easi-in duration-150"
                        >
                          <h3 className="text-primaryColor mt-3 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            {language === "EN"
                              ? "Last 18 months of the career"
                              : "Laatste 18 maanden van de opleiding"}
                          </h3>
                          <h5 className=" font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-[15px]">
                            Backend Development
                          </h5>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            {text2}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ============= Left card ================= */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-delay="50"
                          data-aos-duration="1300"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easi-in duration-150"
                        >
                          <h3 className="text-primaryColor mt-3 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            Frontend Developer
                          </h3>
                          <h5 className=" font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-[15px]">
                            {language === "EN" ? "at CSDM" : "bij CSDM"}
                          </h5>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            {text4}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                    >
                      <figure>
                        <img src={uiImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ============= Right card ================= */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-delay="50"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easi-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mt-3 mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            {language === "EN"
                              ? "Self development year"
                              : "Jaar van zelfontwikkeling"}
                          </h3>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            {text3}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                    >
                      <figure>
                        <img src={appsdImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* ============= Left card ================= */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-delay="50"
                          data-aos-duration="1300"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer easi-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mt-3 mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            Product Manager
                          </h3>
                          <h5 className=" font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-[15px]">
                            {language === "EN"
                              ? "at Bitsliced"
                              : "bij Bitsliced"}
                          </h5>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            {text5}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                    justify-center"
                    >
                      <figure>
                        <img src={frontendImg} alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
