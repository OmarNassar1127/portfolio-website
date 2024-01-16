import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsdImg from "../../assets/images/apps.png";

const Journey = ({ language }) => {
  const text =
    language === "EN"
      ? "In 2017, I began my software development career at MBO Amstelland, learning HTML/CSS, PHP, Javascript, and MySQL, and quickly excelling in coding. After a year-long internship and an additional year of work at CSDM post-graduation, topping my class, I ventured into entrepreneurship with Bitsliced, focusing on blockchain and cryptocurrencies to create an NFT marketplace for trading real-world assets. In 2023, I further expanded my career by joining Vloto B.V as a Backend Developer. At Vloto, a luxury car-sharing service boasting a fleet from Audi e-tron Q8 to Polestar 2 Dual Motor, I used Laravel for creating RestFul APIs, initially enhancing our internal dashboard. My work has also involved innovating our app with features like discount coupons and flexible booking date edits, thereby significantly enriching user experience, and currently, I am automating various manual processes to elevate service efficiency."
      : "In 2017 begon ik mijn carrière in softwareontwikkeling bij MBO Amstelland, waar ik HTML/CSS, PHP, Javascript en MySQL leerde, en ik blonk snel uit in coderen. Na een jaar stage en een extra jaar werk bij CSDM na mijn afstuderen, aan de top van mijn klas, waagde ik me aan het ondernemerschap met Bitsliced, gericht op blockchain en cryptocurrencies om een NFT-marktplaats te creëren voor het verhandelen van echte activa. In 2023 breidde ik mijn carrière verder uit door me aan te sluiten bij Vloto B.V. als Backend Ontwikkelaar. Bij Vloto, een luxe autodeelservice met een vloot van Audi e-tron Q8 tot Polestar 2 Dual Motor, gebruikte ik Laravel voor het creëren van RestFul API's, aanvankelijk om ons interne dashboard te verbeteren. Mijn werk heeft ook betrekking gehad op het innoveren van onze app met functies zoals kortingscoupons en flexibele boekingsdatumaanpassingen, waardoor de gebruikerservaring aanzienlijk is verrijkt, en momenteel automatiseer ik verschillende handmatige processen om de service-efficiëntie te verhogen.";
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
  const text6 =
    language === "EN"
      ? "I joined Vloto B.V as a Backend Developer in mid-2023, quickly diving into exciting challenges. Our company, a luxury car-sharing service, boasts an impressive fleet from the Audi e-tron Q8 to the Polestar 2 Dual Motor, all accessible through our proprietary app. My initial focus was enhancing our internal dashboard, but I've also innovated our app with complex features like discount coupons and flexible booking date edits, significantly enriching the user experience. Currently, I'm working on automating some of our manual processes, aiming to streamline operations and elevate our service efficiency."
      : "Ik ben in het midden van 2023 bij Vloto B.V. begonnen als Backend Ontwikkelaar en heb me snel op boeiende uitdagingen gestort. Ons bedrijf, een luxe autodeel service, pronkt met een indrukwekkende vloot variërend van de Audi e-tron Q8 tot de Polestar 2 Dual Motor, allemaal toegankelijk via onze eigen app. Aanvankelijk concentreerde ik me op het verbeteren van ons interne dashboard, maar ik heb ook complexe functies aan onze app toegevoegd, zoals kortingscoupons en flexibele boekingsdatumaanpassingen, wat de gebruikerservaring aanzienlijk verrijkte. Momenteel werk ik aan het automatiseren van enkele van onze handmatige processen, met als doel onze bedrijfsvoering te stroomlijnen en de efficiëntie van onze service te verhogen.";
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
                              ? "2017 - First 18 months of the career"
                              : "2017 - Eerste 18 maanden van de opleiding"}
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
                              ? "2020 - Last 18 months of the career"
                              : "2020 - Laatste 18 maanden van de opleiding"}
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
                            2020 - 2021 Frontend Developer
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
                              ? "2021 - Self development year"
                              : "2021 - Jaar van zelfontwikkeling"}
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
                            2021 - 2023 Product Manager
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
                              ? "2023 - Backend Developer at Vloto"
                              : "2023 - Backend Developer bij Vloto"}
                          </h3>
                          <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                            {text6}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
