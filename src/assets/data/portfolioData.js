import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "School project",
    title: "Tablet4U",
    descriptionEN: "This was the first project I ever coded, where we created a website allowing users to view phones, tablets, and laptops. Additionally, we integrated a functionality to connect it with a tech store so that users could directly purchase the products they liked. We also utilized jQuery and JavaScript to enable filtering and implemented some animations to enhance the user experience.",
    descriptionNL: "Dit was mijn allereerste project dat ik heb gecodeerd. Voor dit project moesten we een website maken waar gebruikers telefoons, tablets en laptops konden bekijken. Daarnaast was een andere functionaliteit om deze te koppelen aan een technische winkel, zodat gebruikers er direct op konden klikken en het kopen. Daarnaast gebruikten we ook jQuery en JavaScript voor filtering en een beetje animatie.",
    technologies: ["Sublime Text", "HTML/CSS", "Javascript", "jQuery"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "School project",
    title: "First ever portfolio website",
    descriptionEN: "For my second school project, I designed and developed a portfolio website to showcase my background, personality, hobbies and experiences. Through an interactive timeline, I aimed to provide visitors with an engaging overview of my life journey, achievements, and aspirations.",
    descriptionNL: "Dit was mijn tweede project op school waar ik een portfolio-website heb gemaakt met een tijdlijn van mijn leven. Het laat mensen zien waar ik vandaan kom en wie ik ben als persoon, en dergelijke dingen.",
    technologies: ["Sublime Text", "HTML/CSS", "Javascript"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "School project",
    title: "Yamba",
    descriptionEN: "This was the first major project I undertook, where we were tasked with developing a website for a festival company. The site needed to be able to handle ticket purchases, send email notifications, and more. Additionally, we were required to create an admin panel for the owners, allowing them to monitor ticket sales, email registrations, merchandise sales, and other key data. Throughout the development process, I gained valuable experience in planning and prioritizing tasks, which ultimately resulted in the successful delivery of an exceptional product.",
    descriptionNL: "Dit was het eerste omvangrijke project dat ik moesten maken. Voor dit project moesten we een website bouwen voor een festivalbedrijf, waar gebruikers tickets konden kopen, e-mailmeldingen konden ontvangen, enzovoort. Daarnaast moesten we een beheerderspaneel maken voor de eigenaren, zodat ze dingen zoals ticketverkoop, e-mailregistraties, merchandise-verkoop, om er maar een paar te noemen, konden bijhouden. Over het algemeen heb ik met dit project veel geleerd over planning en prioritering, wat heeft geleid tot een fantastisch resultaat.",
    technologies: ["Wordpress","eCommerce plugin" ,"PHP", "VPS Hosting"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "School project",
    title: "Tic Tac Toe",
    descriptionEN: "For this collaborative project, I worked with two fellow classmates to create a web-based version of the classic game Tic Tac Toe using only Javascript and HTML/CSS. Although challenging, this project was immensely rewarding as we had to rely on extensive research to build the game's functionality. Despite limited prior experience with Javascript, we were able to develop our coding skills significantly through this project.",
    descriptionNL: "Voor dit project moest ik samenwerken met 2 andere klasgenoten en we hebben Tic Tac Toe vanaf nul gemaakt met alleen Javascript en HTML/CSS. Dit project was een van de moeilijkste, maar ook leukste om te maken, omdat we niet echt veel lessen in Javascript hadden gehad. We moesten dus veel onderzoek doen, wat leidde tot veel leren en verbeteren.",
    technologies: ["VsCode", "Javascript", "HTML/CSS"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "School project",
    title: "Snake 3D",
    descriptionEN: "Out of all the projects I've worked on, Snake 3D was the most enjoyable to create. I spent a lot of time playing the game myself to ensure it was both fun and challenging. In this game, I included unique features such as apples that made the snake grow three times larger and obstacles that appeared unexpectedly, requiring quick reflexes to avoid them.",
    descriptionNL: "3D Snake was volgens mij het leukst om te maken. Ik kan met trots zeggen dat ik voor dit project meer aan het gamen was dan aan het coderen. Ik had een aantal gekke appels die me 3x zo groot maakten en willekeurige obstakels die plotseling verschenen en waarbij ik op mijn reflexen moest vertrouwen.",
    technologies: ["Unity", "C#", "Javascript"],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "School project",
    title: "Restaurant webApp",
    descriptionEN: "For my final project in my career, I developed a professional web application called Excellent Taste for a restaurant. This web application allowed clients to make reservations, order food, and view their bill. In addition, waitstaff could view an overview of all tables and see the timing of the clients' arrival. Chefs also had their own panel to keep track of the ordered food and drinks. The web application included permission-based access and CRUD functionalities to ensure data security and accurate data management. As a final touch, I added a feature that allowed waitstaff to print a PDF ticket/bill/check for each table. I was the only member of my class to complete every assignment for this exam.",
    descriptionNL: "Voor mijn eindproject van mijn opleiding heb ik een professionele webapplicatie ontwikkeld genaamd Excellent Taste voor een restaurant. Met deze webapplicatie konden klanten reserveren, eten bestellen en hun rekening bekijken. Daarnaast konden de bediening medewerkers een overzicht van alle tafels bekijken en de timing van de aankomst van de klanten zien. Ook hadden de koks hun eigen panel om het bestelde eten en drinken bij te houden. De webapplicatie bevatte toegangsbeheer en CRUD-functionaliteiten om gegevensbeveiliging en nauwkeurig gegevensbeheer te garanderen. Als finishing touch heb ik een functie toegevoegd waarmee bedieningsmedewerkers een PDF-ticket/rekening/bon konden printen voor elke tafel. Ik was de enige student in mijn klas die alle opdrachten voor dit examen heeft afgerond.",
    technologies: [
      "VsCode",
      "PHP",
      "HTML/CSS",
      "Javascript",
      "MySQL",
      "jQuery",
    ],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Professional",
    title: "MyAddBooker",
    descriptionEN: "I worked here on the Frontend side, using tools like graphQL and design components from AntDesign I managed to put a lot of cool features together and be a better professional as a whole",
    descriptionNL: "Ik werkte hier aan de Frontend kant en gebruikte tools zoals graphQL en design componenten van AntDesign. Hiermee slaagde ik erin om verschillende coole functies te combineren en mezelf als geheel te verbeteren als professional.",
    technologies: [
      "VsCode",
      "ReactJS",
      "Ant Design",
      "Node.js",
      "cmder",
      "graphQL",
    ],
    siteUrl: "#",
  },
  {
    id: "08",
    imgUrl: portfolioImg07,
    category: "Professional",
    title: "Sliced Marketplace",
    descriptionEN: "At Bitsliced, my role involves more than just programming. As a overseer of the platform's development, I manage a range of tasks to ensure our team is successful. This includes overseeing deadlines, quality assurance, and ensuring that our team meets its goals. Maintaining a positive team environment is also a top priority. Additionally, I am responsible for researching new technologies, keeping up with market standards, hiring new team members, and overseeing audits, among other responsibilities.",
    descriptionNL: "Bij Bitsliced houdt mijn functie meer in dan alleen programmeren. Als toezichthouder op de ontwikkeling van het platform beheer ik een scala aan taken om ervoor te zorgen dat ons team succesvol is. Dit omvat het bewaken van deadlines, kwaliteitsborging en ervoor zorgen dat ons team zijn doelen bereikt. Het handhaven van een positieve teamomgeving is ook een topprioriteit. Daarnaast ben ik verantwoordelijk voor het onderzoeken van nieuwe technologieën, het bijhouden van marktstandaarden, het aannemen van nieuwe teamleden en het toezicht houden op audits, naast andere verantwoordelijkheden.",
    technologies: [
      "VsCode",
      "React",
      "Tailwind css",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "HTML/CSS",
    ],
    siteUrl: "#",
  }
];

export default portfolios;
