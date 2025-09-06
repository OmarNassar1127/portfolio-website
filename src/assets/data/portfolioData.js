import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/yamba.jpeg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/restaurant.jpeg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import portfolioImg08 from "../images/portfolio-08.jpg";
import portfolioImg09 from "../images/blog-site.jpeg";
import portfolioImg10 from "../images/portfolio-10.png";
import portfolioImg11 from "../images/rag.jpeg";
import portfolioImg12 from "../images/portfolio-12.png";
import portfolioImg13 from "../images/licenese-plate.jpeg"; // License Plate Detection placeholder
import portfolioImg14 from "../images/portfolio-14.jpeg"; // House Scraper placeholder
import portfolioImg15 from "../images/portfolio-15.jpeg"; // Medical Technical File Builder (temporary placeholder)
import portfolioImg16 from "../images/ai-customer-support.jpeg"; // AI Customer Support (temporary placeholder)

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg10,
    category: "Professional",
    title: "Vloto B.V.",
    date: "2023-02",
    year: 2023,
    priority: 1,
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
    id: "02",
    imgUrl: portfolioImg13,
    category: "Professional",
    title: "License Plate Detection System",
    date: "2024-09",
    year: 2024,
    priority: 2,
    descriptionEN:
      "Engineered a sophisticated computer vision system for a Spanish parking company to revolutionize their access control infrastructure. The system employs advanced optical character recognition (OCR) and machine learning algorithms to achieve 97.3% accuracy in license plate detection across various lighting conditions and weather scenarios. Built with C++ for optimal performance, the solution processes real-time video streams at 30 FPS, instantly identifying and logging vehicle entries/exits. The system seamlessly integrates with existing parking management software, reducing manual oversight by 85% and eliminating unauthorized access incidents. Features include multi-language support for European license plates, automatic database synchronization, and comprehensive analytics dashboard for parking utilization insights.",
    descriptionNL:
      "Ontwikkelde een geavanceerd computer vision-systeem voor een Spaans parkeerbedrijf om hun toegangscontrole-infrastructuur te revolutioneren. Het systeem gebruikt geavanceerde optische karakterherkenning (OCR) en machine learning-algoritmen om 97,3% nauwkeurigheid te bereiken bij kentekenherkenning onder verschillende lichtomstandigheden en weersomstandigheden. Gebouwd met C++ voor optimale prestaties, verwerkt de oplossing real-time videostreams op 30 FPS en identificeert en registreert onmiddellijk voertuigingang/-uitgang. Het systeem integreert naadloos met bestaande parkeerbeheersoftware, vermindert handmatig toezicht met 85% en elimineert ongeautoriseerde toegangsincidenten. Functies omvatten meertalige ondersteuning voor Europese kentekens, automatische databasesynchronisatie en uitgebreid analytics-dashboard voor inzichten in parkeerbenutting.",
    technologies: [
      "C++",
      "OpenCV",
      "Visual Studio",
      "Computer Vision",
      "OCR",
      "Machine Learning",
      "Real-time Processing",
      "SQL Database",
      "Windows API",
    ],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg14,
    category: "Professional",
    title: "House Scraper Platform",
    date: "2024-11",
    year: 2024,
    priority: 3,
    descriptionEN:
      "Built a real-estate aggregation platform to tackle the ultra-competitive Dutch housing market where properties disappear within hours. This Node.js system automatically scrapes Funda, VBO Verhuurders, MVGM, and other major platforms every 10 minutes, filtering listings based on my requirements and sending instant email notifications. Thanks to this automation, I found my apartment in just 2 months (vs. the 8-12 month Amsterdam average). The platform processes thousands of daily listings with PostgreSQL storage and anti-detection measures for continuous operation.",
    descriptionNL:
      "Bouwde een vastgoed-aggregatieplatform om de ultra-competitieve Nederlandse woningmarkt aan te pakken waar woningen binnen uren verdwijnen. Dit Node.js systeem scrapt automatisch Funda, VBO Verhuurders, MVGM en andere grote platforms elke 10 minuten, filtert aanbiedingen op mijn eisen en stuurt directe email notificaties. Dankzij deze automatisering vond ik mijn appartement in slechts 2 maanden (vs. het 8-12 maanden Amsterdam gemiddelde). Het platform verwerkt duizenden dagelijkse aanbiedingen met PostgreSQL opslag en anti-detectie maatregelen voor continue werking.",
    technologies: [
      "VSCode",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Axios",
      "Nodemailer",
      "Render",
      "Web Scraping",
      "Real-time Processing",
      "Anti-detection",
    ],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg12,
    category: "ai/ml",
    title: "Image Segmentation Model",
    date: "2024-06",
    year: 2024,
    priority: 4,
    descriptionEN:
      "Engineered a deep learning model for image segmentation that effectively highlights specific regions within images. The project encompassed dataset preparation, model architecture design, training, and evaluation. Utilizing advanced techniques in computer vision, I achieved high accuracy and robust performance in segmenting various objects within images.",
    descriptionNL:
      "Ontwikkelde een deep learning-model voor beeldsegmentatie dat specifieke regio's binnen beelden effectief markeert. Het project omvatte datasetvoorbereiding, modelarchitectuurontwerp, training en evaluatie. Door gebruik te maken van geavanceerde technieken in computervisie, bereikte ik een hoge nauwkeurigheid en robuuste prestaties bij het segmenteren van verschillende objecten binnen beelden.",
    technologies: [
      "VsCode",
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg11,
    category: "ai/ml",
    title: "AI - Document Q&A",
    date: "2024-01",
    year: 2024,
    priority: 5,
    descriptionEN:
      "Developed an AI-driven Question Answering (QA) system that leverages OpenAI's models and Meilisearch for document retrieval. This system enhances document comprehension and retrieval by providing users with precise answers based on the context of uploaded documents. The project utilized Retrieval-Augmented Generation (RAG) to combine the power of document retrieval and generative models, ensuring contextually accurate answers. Additionally, question optimization techniques were employed using AI to refine and enhance user queries, improving the overall performance of the system. The project involved creating a seamless interface and integrating backend services to ensure efficient performance.",
    descriptionNL:
      "Ontwikkelde een AI-gestuurd Vraag-Antwoord (QA) systeem dat gebruikmaakt van OpenAI's modellen en Meilisearch voor documentophaling. Dit systeem verbetert documentbegrip en -ophaling door gebruikers nauwkeurige antwoorden te geven op basis van de context van geüploade documenten. Het project maakte gebruik van Retrieval-Augmented Generation (RAG) om de kracht van documentophaling en generatieve modellen te combineren, waardoor contextueel nauwkeurige antwoorden werden gegarandeerd. Bovendien werden technieken voor vraagoptimalisatie toegepast met behulp van AI om gebruikersvragen te verfijnen en te verbeteren, wat de algehele prestaties van het systeem verbeterde. Het project omvatte het creëren van een naadloze interface en het integreren van backend-services om een efficiënte werking te garanderen.",
    technologies: [
      "Python",
      "Flask",
      "Streamlit",
      "OpenAI API",
      "Meilisearch",
      "HTML/CSS",
      "JavaScript",
      "Docker",
      "REST APIs",
    ],
    siteUrl: "#",
  },
  {
    id: "15",
    imgUrl: portfolioImg15,
    category: "ai/ml",
    title: "Medical Technical File Builder",
    date: "2025-01",
    year: 2025,
    priority: 7,
    descriptionEN:
      "Engineered an AI-powered medical device platform that revolutionizes technical file compilation for medical equipment manufacturers. The system leverages advanced natural language processing and regulatory compliance algorithms to accelerate technical dossier research and creation by 5x compared to traditional methods. Built with machine learning models trained on medical regulations (FDA, CE marking, ISO standards), the platform automatically extracts relevant documentation requirements, generates compliance templates, and cross-references regulatory changes. This innovation transforms compliance workflows from months-long processes to efficient week-long operations, significantly reducing time-to-market for medical device companies while ensuring regulatory accuracy and completeness.",
    descriptionNL:
      "Een AI medisch apparaat platform gebouwd dat bedrijven helpt bij het onderzoeken en opstellen van technische dossiers voor medische apparatuur 5x sneller dan traditionele methoden, waardoor compliance workflows van maanden naar weken worden teruggebracht. Het systeem gebruikt geavanceerde natuurlijke taalverwerking en regelgevings-compliance algoritmen om technische dossier onderzoek en creatie te versnellen. Gebouwd met machine learning modellen getraind op medische regelgeving (FDA, CE-markering, ISO-standaarden), extraheert het platform automatisch relevante documentatie-eisen, genereert compliance sjablonen en kruisverwijst regelgevingswijzigingen. Deze innovatie transformeert compliance workflows van maandenlange processen naar efficiënte week-lange operaties.",
    technologies: [
      "Python",
      "TensorFlow",
      "Natural Language Processing",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Regulatory AI",
      "Document Processing",
      "Compliance Automation",
    ],
    siteUrl: "#",
  },
  {
    id: "16",
    imgUrl: portfolioImg16,
    category: "ai/ml",
    title: "AI Customer Support",
    date: "2025-07",
    year: 2025,
    priority: 8,
    descriptionEN:
      "Developed an advanced AI-powered customer support system for virelio.ai that revolutionizes client communication through intelligent automation. The system seamlessly handles incoming meetings, answers customer inquiries, and provides comprehensive support without requiring human intervention. Built using cutting-edge technologies including ElevenLabs for natural speech synthesis, n8n for workflow automation, and OpenAI for intelligent conversation processing. This solution enables virelio.ai to scale their customer support operations exponentially, automatically managing meeting requests and providing instant, accurate responses to client questions. The AI assistant maintains professional communication standards while ensuring 24/7 availability, significantly reducing response times and allowing the team to focus on high-value strategic work.",
    descriptionNL:
      "Ontwikkelde een geavanceerd AI-gestuurd klantenondersteuningssysteem voor virelio.ai dat clientcommunicatie revolutioneert door intelligente automatisering. Het systeem handelt naadloos inkomende vergaderingen af, beantwoordt klantenvragen en biedt uitgebreide ondersteuning zonder menselijke interventie. Gebouwd met geavanceerde technologieën waaronder ElevenLabs voor natuurlijke spraaksynthese, n8n voor workflow automatisering en OpenAI voor intelligente gespreksverwerking. Deze oplossing stelt virelio.ai in staat om hun klantenservice exponentieel op te schalen, automatisch vergaderverzoeken te beheren en directe, nauwkeurige antwoorden te geven op clientvragen. De AI-assistent houdt professionele communicatiestandaarden aan terwijl 24/7 beschikbaarheid wordt gegarandeerd, wat responstijden aanzienlijk verkort en het team in staat stelt zich te concentreren op strategisch werk met hoge toegevoegde waarde.",
    technologies: [
      "OpenAI API",
      "ElevenLabs",
      "n8n Automation",
      "Natural Language Processing",
      "Speech Synthesis",
      "Workflow Automation",
      "Python",
      "API Integration",
      "Voice AI",
      "Customer Support AI",
    ],
    siteUrl: "https://virelio.ai",
  },
  {
    id: "06",
    imgUrl: portfolioImg08,
    category: "Professional",
    title: "Sliced Marketplace",
    date: "2022-01",
    year: 2022,
    priority: 6,
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
  // {
  //   id: "07",
  //   imgUrl: portfolioImg01,
  //   category: "Freelance",
  //   title: "Tablet4U",
  //   date: "2019-03",
  //   year: 2019,
  //   descriptionEN:
  //     "Developed a comprehensive e-commerce platform for a technology retailer, featuring an extensive catalog of phones, tablets, and laptops. The website included seamless integration with their inventory management system, allowing customers to browse products and complete purchases directly through the platform. Implemented advanced filtering capabilities using jQuery and JavaScript, along with engaging animations to enhance user experience and improve conversion rates.",
  //   descriptionNL:
  //     "Ontwikkelde een uitgebreid e-commerce platform voor een technologie retailer, met een uitgebreide catalogus van telefoons, tablets en laptops. De website bevatte naadloze integratie met hun voorraadbeheersysteem, waardoor klanten producten konden doorbladeren en aankopen direct via het platform konden voltooien. Implementeerde geavanceerde filtermogelijkheden met jQuery en JavaScript, samen met boeiende animaties om de gebruikerservaring te verbeteren en conversiepercentages te verhogen.",
  //   technologies: ["Sublime Text", "HTML/CSS", "Javascript", "jQuery"],
  //   siteUrl: "",
  // },
  // {
  //   id: "08",
  //   imgUrl: portfolioImg02,
  //   category: "Freelance",
  //   title: "Personal Branding Website",
  //   date: "2019-06",
  //   year: 2019,
  //   descriptionEN:
  //     "Created a dynamic personal branding website for a professional client seeking to establish their online presence. The project featured an interactive timeline showcasing their career journey, achievements, and personal brand story. Focused on creating an engaging user experience that effectively communicated the client's background, expertise, and professional aspirations to potential employers and business contacts.",
  //   descriptionNL:
  //     "Creëerde een dynamische personal branding website voor een professionele klant die hun online aanwezigheid wilde vestigen. Het project bevatte een interactieve tijdlijn die hun carrière traject, prestaties en persoonlijke merkverhaal toonde. Gericht op het creëren van een boeiende gebruikerservaring die effectief de achtergrond, expertise en professionele aspiraties van de klant communiceerde naar potentiële werkgevers en zakelijke contacten.",
  //   technologies: ["Sublime Text", "HTML/CSS", "Javascript"],
  //   siteUrl: "#",
  // },
  {
    id: "09",
    imgUrl: portfolioImg03,
    category: "Freelance",
    title: "Yamba",
    date: "2019-09",
    year: 2019,
    descriptionEN:
      "Developed a comprehensive event management platform for Yamba Festival Company, handling their complete digital infrastructure needs. The solution included a robust ticketing system with secure payment processing, automated email notification services, and integrated merchandise sales functionality. Built a sophisticated admin dashboard enabling real-time monitoring of ticket sales, attendee registrations, merchandise inventory, and comprehensive analytics. The project required careful planning and agile development practices to deliver a scalable solution that significantly improved their operational efficiency.",
    descriptionNL:
      "Ontwikkelde een uitgebreid evenementenbeheerplatform voor Yamba Festival Company, waarbij hun complete digitale infrastructuurbehoeften werden afgehandeld. De oplossing bevatte een robuust ticketsysteem met veilige betalingsverwerking, geautomatiseerde e-mail notificatieservices en geïntegreerde merchandise verkoopfunctionaliteit. Bouwde een geavanceerd admin dashboard dat real-time monitoring mogelijk maakte van ticketverkopen, deelnemersregistraties, merchandise voorraad en uitgebreide analyses. Het project vereiste zorgvuldige planning en agile ontwikkelingspraktijken om een schaalbare oplossing te leveren die hun operationele efficiëntie aanzienlijk verbeterde.",
    technologies: ["Wordpress", "eCommerce plugin", "PHP", "VPS Hosting"],
    siteUrl: "#",
  },
  {
    id: "10",
    imgUrl: portfolioImg04,
    category: "Freelance",
    title: "Tic Tac Toe",
    date: "2020-01",
    year: 2020,
    descriptionEN:
      "Collaborated with a small development team to create an interactive web-based version of Tic Tac Toe for a gaming client. Built entirely with vanilla JavaScript and modern HTML/CSS, the project emphasized clean code architecture and responsive design principles. The challenge involved implementing sophisticated game logic, player state management, and creating an intuitive user interface. This project showcased problem-solving skills and the ability to deliver polished interactive experiences using core web technologies.",
    descriptionNL:
      "Werkte samen met een klein ontwikkelingsteam om een interactieve webversie van Tic Tac Toe te maken voor een gaming klant. Volledig gebouwd met vanilla JavaScript en moderne HTML/CSS, legde het project de nadruk op schone code architectuur en responsieve ontwerpprincipes. De uitdaging betrof het implementeren van geavanceerde spellogica, speler state management en het creëren van een intuïtieve gebruikersinterface. Dit project toonde probleemoplossingsvaardigheden en het vermogen om gepolijste interactieve ervaringen te leveren met kern webtechnologieën.",
    technologies: ["VsCode", "Javascript", "HTML/CSS"],
    siteUrl: "#",
  },
  {
    id: "11",
    imgUrl: portfolioImg05,
    category: "Freelance",
    title: "Snake 3D",
    date: "2020-04",
    year: 2020,
    descriptionEN:
      "Developed an immersive 3D Snake game for an entertainment client, focusing on innovative gameplay mechanics and engaging user experience. The project involved extensive game testing and iterative design to achieve the perfect balance of challenge and entertainment value. Implemented unique features including power-up apples that triple snake growth and dynamic obstacle generation system that creates unpredictable challenges requiring quick reflexes. Built using Unity engine with custom C# scripts for game logic and physics.",
    descriptionNL:
      "Ontwikkelde een meeslepend 3D Snake spel voor een entertainment klant, met focus op innovatieve gameplay mechanica en boeiende gebruikerservaring. Het project vereiste uitgebreid spel testen en iteratief ontwerp om de perfecte balans tussen uitdaging en entertainment waarde te bereiken. Implementeerde unieke functies waaronder power-up appels die slang groei verdrievoudigen en een dynamisch obstakel generatie systeem dat onvoorspelbare uitdagingen creëert die snelle reflexen vereisen. Gebouwd met Unity engine met aangepaste C# scripts voor spellogica en fysica.",
    technologies: ["Unity", "C#", "Javascript"],
    siteUrl: "#",
  },
  {
    id: "12",
    imgUrl: portfolioImg06,
    category: "Freelance",
    title: "Restaurant",
    date: "2020-07",
    year: 2020,
    descriptionEN:
      "Developed a comprehensive restaurant management system called 'Excellent Taste' for a high-end dining establishment. The multi-user web application streamlined operations with customer reservation management, online ordering system, and integrated billing functionality. Created distinct interfaces for different user roles: customers could make reservations and place orders, waitstaff accessed table management with arrival tracking, and chefs monitored kitchen orders in real-time. Implemented robust security with role-based permissions and full CRUD operations for data integrity. Added professional PDF generation for receipts and billing, resulting in improved operational efficiency and customer satisfaction.",
    descriptionNL:
      "Ontwikkelde een uitgebreid restaurant beheersysteem genaamd 'Excellent Taste' voor een high-end eetgelegenheid. De multi-user webapplicatie stroomlijnde operaties met klant reserveringsbeheer, online bestelsysteem en geïntegreerde factureringsfunctionaliteit. Creëerde verschillende interfaces voor verschillende gebruikersrollen: klanten konden reserveringen maken en bestellingen plaatsen, bediening medewerkers hadden toegang tot tafelbeheer met aankomst tracking, en koks konden keukenbestellingen in real-time monitoren. Implementeerde robuuste beveiliging met rol-gebaseerde permissies en volledige CRUD operaties voor data integriteit. Voegde professionele PDF generatie toe voor bonnen en facturering, wat resulteerde in verbeterde operationele efficiëntie en klanttevredenheid.",
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
    id: "13",
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
    id: "14",
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
];

export default portfolios;