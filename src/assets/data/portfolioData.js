import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import portfolioImg08 from "../images/portfolio-08.jpg";
import portfolioImg09 from "../images/portfolio-09.png";
import portfolioImg10 from "../images/portfolio-10.png";
import portfolioImg11 from "../images/portfolio-11.png";
import portfolioImg12 from "../images/portfolio-12.png";
import portfolioImg13 from "../images/portfolio-13.png"; // License Plate Detection placeholder

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "School project",
    title: "Tablet4U",
    date: "2019-03",
    year: 2019,
    descriptionEN:
      "This was the first project I ever coded, where we created a website allowing users to view phones, tablets, and laptops. Additionally, we integrated a functionality to connect it with a tech store so that users could directly purchase the products they liked. We also utilized jQuery and JavaScript to enable filtering and implemented some animations to enhance the user experience.",
    descriptionNL:
      "Dit was mijn allereerste project dat ik heb gecodeerd. Voor dit project moesten we een website maken waar gebruikers telefoons, tablets en laptops konden bekijken. Daarnaast was een andere functionaliteit om deze te koppelen aan een technische winkel, zodat gebruikers er direct op konden klikken en het kopen. Daarnaast gebruikten we ook jQuery en JavaScript voor filtering en een beetje animatie.",
    technologies: ["Sublime Text", "HTML/CSS", "Javascript", "jQuery"],
    siteUrl: "",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "School project",
    title: "First ever portfolio website",
    date: "2019-06",
    year: 2019,
    descriptionEN:
      "For my second school project, I designed and developed a portfolio website to showcase my background, personality, hobbies and experiences. Through an interactive timeline, I aimed to provide visitors with an engaging overview of my life journey, achievements, and aspirations.",
    descriptionNL:
      "Dit was mijn tweede project op school waar ik een portfolio-website heb gemaakt met een tijdlijn van mijn leven. Het laat mensen zien waar ik vandaan kom en wie ik ben als persoon, en dergelijke dingen.",
    technologies: ["Sublime Text", "HTML/CSS", "Javascript"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "School project",
    title: "Yamba",
    date: "2019-09",
    year: 2019,
    descriptionEN:
      "This was the first major project I undertook, where we were tasked with developing a website for a festival company. The site needed to be able to handle ticket purchases, send email notifications, and more. Additionally, we were required to create an admin panel for the owners, allowing them to monitor ticket sales, email registrations, merchandise sales, and other key data. Throughout the development process, I gained valuable experience in planning and prioritizing tasks, which ultimately resulted in the successful delivery of an exceptional product.",
    descriptionNL:
      "Dit was het eerste omvangrijke project dat ik moesten maken. Voor dit project moesten we een website bouwen voor een festivalbedrijf, waar gebruikers tickets konden kopen, e-mailmeldingen konden ontvangen, enzovoort. Daarnaast moesten we een beheerderspaneel maken voor de eigenaren, zodat ze dingen zoals ticketverkoop, e-mailregistraties, merchandise-verkoop, om er maar een paar te noemen, konden bijhouden. Over het algemeen heb ik met dit project veel geleerd over planning en prioritering, wat heeft geleid tot een fantastisch resultaat.",
    technologies: ["Wordpress", "eCommerce plugin", "PHP", "VPS Hosting"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "School project",
    title: "Tic Tac Toe",
    date: "2020-01",
    year: 2020,
    descriptionEN:
      "For this collaborative project, I worked with two fellow classmates to create a web-based version of the classic game Tic Tac Toe using only Javascript and HTML/CSS. Although challenging, this project was immensely rewarding as we had to rely on extensive research to build the game's functionality. Despite limited prior experience with Javascript, we were able to develop our coding skills significantly through this project.",
    descriptionNL:
      "Voor dit project moest ik samenwerken met 2 andere klasgenoten en we hebben Tic Tac Toe vanaf nul gemaakt met alleen Javascript en HTML/CSS. Dit project was een van de moeilijkste, maar ook leukste om te maken, omdat we niet echt veel lessen in Javascript hadden gehad. We moesten dus veel onderzoek doen, wat leidde tot veel leren en verbeteren.",
    technologies: ["VsCode", "Javascript", "HTML/CSS"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "School project",
    title: "Snake 3D",
    date: "2020-04",
    year: 2020,
    descriptionEN:
      "Out of all the projects I've worked on, Snake 3D was the most enjoyable to create. I spent a lot of time playing the game myself to ensure it was both fun and challenging. In this game, I included unique features such as apples that made the snake grow three times larger and obstacles that appeared unexpectedly, requiring quick reflexes to avoid them.",
    descriptionNL:
      "3D Snake was volgens mij het leukst om te maken. Ik kan met trots zeggen dat ik voor dit project meer aan het gamen was dan aan het coderen. Ik had een aantal gekke appels die me 3x zo groot maakten en willekeurige obstakels die plotseling verschenen en waarbij ik op mijn reflexen moest vertrouwen.",
    technologies: ["Unity", "C#", "Javascript"],
    siteUrl: "#",
  },
  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "School project",
    title: "Restaurant webApp",
    date: "2020-07",
    year: 2020,
    descriptionEN:
      "For my final project in my career, I developed a professional web application called Excellent Taste for a restaurant. This web application allowed clients to make reservations, order food, and view their bill. In addition, waitstaff could view an overview of all tables and see the timing of the clients' arrival. Chefs also had their own panel to keep track of the ordered food and drinks. The web application included permission-based access and CRUD functionalities to ensure data security and accurate data management. As a final touch, I added a feature that allowed waitstaff to print a PDF ticket/bill/check for each table. I was the only member of my class to complete every assignment for this exam.",
    descriptionNL:
      "Voor mijn eindproject van mijn opleiding heb ik een professionele webapplicatie ontwikkeld genaamd Excellent Taste voor een restaurant. Met deze webapplicatie konden klanten reserveren, eten bestellen en hun rekening bekijken. Daarnaast konden de bediening medewerkers een overzicht van alle tafels bekijken en de timing van de aankomst van de klanten zien. Ook hadden de koks hun eigen panel om het bestelde eten en drinken bij te houden. De webapplicatie bevatte toegangsbeheer en CRUD-functionaliteiten om gegevensbeveiliging en nauwkeurig gegevensbeheer te garanderen. Als finishing touch heb ik een functie toegevoegd waarmee bedieningsmedewerkers een PDF-ticket/rekening/bon konden printen voor elke tafel. Ik was de enige student in mijn klas die alle opdrachten voor dit examen heeft afgerond.",
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
    date: "2021-03",
    year: 2021,
    descriptionEN:
      "I worked here on the Frontend side, using tools like graphQL and design components from AntDesign I managed to put a lot of cool features together and be a better professional as a whole",
    descriptionNL:
      "Ik werkte hier aan de Frontend kant en gebruikte tools zoals graphQL en design componenten van AntDesign. Hiermee slaagde ik erin om verschillende coole functies te combineren en mezelf als geheel te verbeteren als professional.",
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
    imgUrl: portfolioImg08,
    category: "Professional",
    title: "Sliced Marketplace",
    date: "2022-01",
    year: 2022,
    descriptionEN:
      "At Bitsliced, my role involves more than just programming. As a overseer of the platform's development, I manage a range of tasks to ensure our team is successful. This includes overseeing deadlines, quality assurance, and ensuring that our team meets its goals. Maintaining a positive team environment is also a top priority. Additionally, I am responsible for researching new technologies, keeping up with market standards, hiring new team members, and overseeing audits, among other responsibilities.",
    descriptionNL:
      "Bij Bitsliced houdt mijn functie meer in dan alleen programmeren. Als toezichthouder op de ontwikkeling van het platform beheer ik een scala aan taken om ervoor te zorgen dat ons team succesvol is. Dit omvat het bewaken van deadlines, kwaliteitsborging en ervoor zorgen dat ons team zijn doelen bereikt. Het handhaven van een positieve teamomgeving is ook een topprioriteit. Daarnaast ben ik verantwoordelijk voor het onderzoeken van nieuwe technologieën, het bijhouden van marktstandaarden, het aannemen van nieuwe teamleden en het toezicht houden op audits, naast andere verantwoordelijkheden.",
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
  },
  {
    id: "09",
    imgUrl: portfolioImg09,
    category: "Professional",
    title: "Blog Website",
    date: "2022-08",
    year: 2022,
    descriptionEN:
      "I have built a blog post website using Laravel, PHP, and other relevant technologies. The website includes functionalities such as user registration, login, logout, profile photo upload (with server-side resize and storage), the use of the Blade Template Engine, Composer (the PHP Dependency Manager), form validation, security with gates, policies, and permissions, user relationships (including the ability to follow other blog creators), editing their own posts, editing their username, and performing similar actions. Additionally, the website incorporates features such as sending automated emails, adding API URLs for external interaction, and utilizing Docker for deployment.",
    descriptionNL:
      "Ik heb een blogpost-website gebouwd met Laravel, PHP en andere relevante technologieën. De website heeft functionaliteiten zoals gebruikersregistratie, inloggen, uitloggen, profielfoto-upload (met server-side resize en opslag), het gebruik van de Blade Template Engine, Composer (de PHP Dependency Manager), formuliervalidatie, beveiliging met gates, policies en permissies, gebruikersrelaties (inclusief de mogelijkheid om andere blogmakers te volgen), het bewerken van hun eigen berichten, het bewerken van hun gebruikersnaam en het uitvoeren van soortgelijke acties. Daarnaast bevat de website functies zoals het verzenden van geautomatiseerde e-mails, het toevoegen van API-URL's voor externe interactie en het gebruik van Docker voor implementatie.",
    technologies: [
      "VsCode",
      "PHP",
      "Bootstrap",
      "Node.js",
      "MySql",
      "Javascript",
      "HTML/CSS",
      "Composer",
      "HTML/CSS",
    ],
    siteUrl: "#",
  },
  {
    id: "10",
    imgUrl: portfolioImg10,
    category: "Professional",
    title: "Vloto B.V.",
    date: "2023-02",
    year: 2023,
    descriptionEN:
      "At Vloto B.V., I have been responsible for constructing an administrative dashboard, which I continue to work on to this day. Additionally, I have implemented various intricate features for our app, such as family sharing and coupon integration. These features involve complex backend development due to the extensive data testing requirements they entail. In my role at Vloto, I leverage a diverse range of technologies, with a primary focus on building robust APIs. Looking ahead, our next milestone involves harnessing the power of AI for automation.",
    descriptionNL:
      "Bij Vloto B.V. ben ik verantwoordelijk geweest voor de ontwikkeling van een administratief dashboard, een project waar ik nog steeds aan werk. Daarnaast heb ik complexe functies geïmplementeerd voor onze app, zoals familiedeling en kortingsbonintegratie. Deze functies vergen een ingewikkelde backend-ontwikkeling vanwege de uitgebreide datatestvereisten. In mijn rol bij Vloto maak ik gebruik van een breed scala aan technologieën, met een nadruk op het bouwen van robuuste API's. Vooruitkijkend houdt onze volgende mijlpaal in dat we de kracht van AI gaan benutten voor automatisering.",
    technologies: [
      "VsCode",
      "PHP",
      "Laravel",
      "API's",
      "MySql",
      "AI",
      "HTML/CSS",
      "Composer",
      "Imagick",
      "RapidAPI",
    ],
    siteUrl: "https://vloto.nl/",
  },
  {
    id: "11",
    imgUrl: portfolioImg11,
    category: "ai/ml",
    title: "AI - Document Q&A",
    date: "2024-01",
    year: 2024,
    descriptionEN: "Developed an AI-driven Question Answering (QA) system that leverages OpenAI's models and Meilisearch for document retrieval. This system enhances document comprehension and retrieval by providing users with precise answers based on the context of uploaded documents. The project utilized Retrieval-Augmented Generation (RAG) to combine the power of document retrieval and generative models, ensuring contextually accurate answers. Additionally, question optimization techniques were employed using AI to refine and enhance user queries, improving the overall performance of the system. The project involved creating a seamless interface and integrating backend services to ensure efficient performance.",
    descriptionNL: "Ontwikkelde een AI-gestuurd Vraag-Antwoord (QA) systeem dat gebruikmaakt van OpenAI's modellen en Meilisearch voor documentophaling. Dit systeem verbetert documentbegrip en -ophaling door gebruikers nauwkeurige antwoorden te geven op basis van de context van geüploade documenten. Het project maakte gebruik van Retrieval-Augmented Generation (RAG) om de kracht van documentophaling en generatieve modellen te combineren, waardoor contextueel nauwkeurige antwoorden werden gegarandeerd. Bovendien werden technieken voor vraagoptimalisatie toegepast met behulp van AI om gebruikersvragen te verfijnen en te verbeteren, wat de algehele prestaties van het systeem verbeterde. Het project omvatte het creëren van een naadloze interface en het integreren van backend-services om een efficiënte werking te garanderen.",
    technologies: [
      "Python",
      "Flask",
      "Streamlit",
      "OpenAI API",
      "Meilisearch",
      "HTML/CSS",
      "JavaScript",
      "Docker",
      "REST APIs"
    ],
    siteUrl: "#",
  },
  {
    id: "12",
    imgUrl: portfolioImg12,
    category: "ai/ml",
    title: "Image Segmentation Model",
    date: "2024-06",
    year: 2024,
    descriptionEN: "Engineered a deep learning model for image segmentation that effectively highlights specific regions within images. The project encompassed dataset preparation, model architecture design, training, and evaluation. Utilizing advanced techniques in computer vision, I achieved high accuracy and robust performance in segmenting various objects within images.",
    descriptionNL: "Ontwikkelde een deep learning-model voor beeldsegmentatie dat specifieke regio's binnen beelden effectief markeert. Het project omvatte datasetvoorbereiding, modelarchitectuurontwerp, training en evaluatie. Door gebruik te maken van geavanceerde technieken in computervisie, bereikte ik een hoge nauwkeurigheid en robuuste prestaties bij het segmenteren van verschillende objecten binnen beelden.",
    technologies: [
      "VsCode",
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib"
    ],
    siteUrl: "#",
  },
  {
    id: "13",
    imgUrl: portfolioImg13,
    category: "Professional",
    title: "License Plate Detection System",
    date: "2024-09",
    year: 2024,
    descriptionEN: "Engineered a sophisticated computer vision system for a Spanish parking company to revolutionize their access control infrastructure. The system employs advanced optical character recognition (OCR) and machine learning algorithms to achieve 97.3% accuracy in license plate detection across various lighting conditions and weather scenarios. Built with C++ for optimal performance, the solution processes real-time video streams at 30 FPS, instantly identifying and logging vehicle entries/exits. The system seamlessly integrates with existing parking management software, reducing manual oversight by 85% and eliminating unauthorized access incidents. Features include multi-language support for European license plates, automatic database synchronization, and comprehensive analytics dashboard for parking utilization insights.",
    descriptionNL: "Ontwikkelde een geavanceerd computer vision-systeem voor een Spaans parkeerbedrijf om hun toegangscontrole-infrastructuur te revolutioneren. Het systeem gebruikt geavanceerde optische karakterherkenning (OCR) en machine learning-algoritmen om 97,3% nauwkeurigheid te bereiken bij kentekenherkenning onder verschillende lichtomstandigheden en weersomstandigheden. Gebouwd met C++ voor optimale prestaties, verwerkt de oplossing real-time videostreams op 30 FPS en identificeert en registreert onmiddellijk voertuigingang/-uitgang. Het systeem integreert naadloos met bestaande parkeerbeheersoftware, vermindert handmatig toezicht met 85% en elimineert ongeautoriseerde toegangsincidenten. Functies omvatten meertalige ondersteuning voor Europese kentekens, automatische databasesynchronisatie en uitgebreid analytics-dashboard voor inzichten in parkeerbenutting.",
    technologies: [
      "C++",
      "OpenCV",
      "Visual Studio",
      "Computer Vision",
      "OCR",
      "Machine Learning",
      "Real-time Processing",
      "SQL Database",
      "Windows API"
    ],
    siteUrl: "#",
  },
];

export default portfolios;