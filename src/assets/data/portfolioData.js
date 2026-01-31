import portfolioImg03 from "../images/yamba.jpeg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/restaurant.jpeg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import portfolioImg08 from "../images/portfolio-08.jpg";
import portfolioImg09 from "../images/blog-site.jpeg";
import portfolioImg10 from "../images/portfolio-10.png";
import portfolioImg12 from "../images/portfolio-12.png";
import portfolioImg13 from "../images/licenese-plate.jpeg"; 
import portfolioImg14 from "../images/portfolio-14.jpeg"; 
import portfolioImg15 from "../images/portfolio-15.jpeg"; 
import portfolioImg16 from "../images/ai-customer-support.jpeg";
import portfolioImgFraud from "../images/fraud-prevention.jpeg";

// New AI Assets - Core Set
import portfolioImgCreative from "../images/ai_creative.png";
import portfolioImgAgents from "../images/ai_agents.png";
import portfolioImgComm from "../images/ai_comm.png";
import portfolioImgServer from "../images/ai_server.png";

// New AI Assets - Unique Additions
import portfolioImgLinkedIn from "../images/ai_linkedin.png";
import portfolioImgNotulist from "../images/ai_notulist.png";
import portfolioImgWebsite from "../images/ai_website.png";
import portfolioImgPersonal from "../images/ai_personal.png";
import portfolioImgClaude from "../images/ai_claude.png";
import portfolioImgResearch from "../images/ai_research.png";
import portfolioImgDefGPT from "../images/ai_defgpt.png";
import portfolioImgSlouch from "../images/slouch_new.png";

// New Professional Projects

const portfolios = [
  // --- New AI Projects ---
  {
    id: "ai-slouch",
    imgUrl: portfolioImgSlouch,
    category: "ai/ml",
    title: "Slouch - AI Posture Coach",
    date: "2026-01",
    year: 2026,
    priority: 3,
    descriptionEN: "Built an AI-powered posture detection web application that runs 100% client-side using MediaPipe Pose. The app uses your webcam to analyze body posture in real-time, detecting slouching through torso metrics (shoulder width, hip alignment, tilt). Features include smart calibration system, time-delayed alerts to filter quick movements, sensitivity presets (Easy/Medium/Hard), visual feedback with progress bars, and gentle audio nudges. Zero data leaves the device - all AI processing happens locally in the browser. Includes a modern glassmorphism UI, session statistics tracking, and waitlist integration with Supabase.",
    descriptionNL: "Een AI-gestuurde houding detectie webapplicatie gebouwd die 100% client-side draait met MediaPipe Pose. De app gebruikt je webcam om lichaamshouding real-time te analyseren en detecteert slechte houding via torso-metrieken (schouderbreedte, heup-uitlijning, kanteling). Functies omvatten slim kalibratiesysteem, vertraagde waarschuwingen om snelle bewegingen te filteren, gevoeligheidsvoorinstellingen (Makkelijk/Gemiddeld/Moeilijk), visuele feedback met voortgangsbalken en subtiele audio-signalen. Geen data verlaat het apparaat - alle AI-verwerking gebeurt lokaal in de browser. Inclusief moderne glassmorphism UI, sessie statistieken tracking en wachtlijst integratie met Supabase.",
    technologies: ["MediaPipe", "React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Computer Vision", "Client-side AI"],
    siteUrl: "https://slouch.pro",
  },
  {
    id: "ai-01",
    imgUrl: portfolioImgCreative,
    category: "ai/ml",
    title: "AI Image Editor",
    date: "2025-02",
    year: 2025,
    priority: 3,
    descriptionEN: "A cutting-edge full-stack web application integrating Stable Diffusion and ControlNet for professional-grade image generation. Features a drag-and-drop editor with intelligent prompt suggestions, one-click upscaling, and layer-based editing. The platform has successfully processed over 50+ usage sessions in production, demonstrating robust stability and user engagement.",
    descriptionNL: "Een geavanceerde full-stack webapplicatie die Stable Diffusion en ControlNet integreert voor professionele beeldgeneratie. Beschikt over een drag-and-drop editor met intelligente prompt-suggesties, one-click upscaling en bewerking op basis van lagen. Het platform heeft succesvol meer dan 50+ gebruikssessies in productie verwerkt, wat robuuste stabiliteit en gebruikersbetrokkenheid aantoont.",
    technologies: ["Stable Diffusion", "Next.js", "Vision AI", "ControlNet", "Python"],
    siteUrl: "#",
  },
  {
    id: "ai-02",
    imgUrl: portfolioImgServer,
    category: "ai/ml",
    title: "Enterprise RAG & Knowledge Base Platform",
    date: "2025-01",
    year: 2025,
    priority: 2,
    descriptionEN: "Architected and evolved a comprehensive RAG platform from initial prototype to enterprise-scale deployment. The system indexes millions of proprietary documents with a scalable ingestion pipeline handling 10k+ PDFs while maintaining 95% retrieval accuracy. Delivers context-aware answers in under 1 second via custom-built APIs, integrating seamlessly with 10+ internal data sources. Features intelligent question optimization, automatic document chunking/vectorization, and a production-ready web interface. This on-premise implementation ensures total data sovereignty while matching cloud-based performance, successfully serving both individual teams and organization-wide deployments.",
    descriptionNL: "Architectuur ontworpen en ontwikkeld voor een uitgebreid RAG-platform van initieel prototype tot enterprise-schaal implementatie. Het systeem indexeert miljoenen bedrijfseigen documenten met een schaalbare ingestiepijplijn die 10k+ PDF's verwerkt met behoud van 95% retrieval-nauwkeurigheid. Levert contextbewuste antwoorden in minder dan 1 seconde via op maat gemaakte API's, integreert naadloos met 10+ interne gegevensbronnen. Beschikt over intelligente vraagoptimalisatie, automatische document chunking/vectorisatie en een productie-klare webinterface. Deze on-premise implementatie garandeert totale data-soevereiniteit en evenaart cloud-prestaties, bedient succesvol zowel individuele teams als organisatie-brede implementaties.",
    technologies: ["Llama 3", "Qdrant", "FastAPI", "LangChain", "OpenAI", "Meilisearch", "Unstructured.io", "Streamlit", "Docker", "Python"],
    siteUrl: "#",
  },
  {
    id: "ai-03",
    imgUrl: portfolioImgAgents,
    category: "ai/ml",
    title: "Full-Stack Multi-Agent",
    date: "2024-11",
    year: 2024,
    priority: 4,
    descriptionEN: "Architected an autonomous agent system orchestrated by a crew of 6 specialized agents (research, code, review). This sophisticated multi-agent framework handles complex, multi-step tasks end-to-end without human intervention. By parallelizing workflows, the system has reduced total project execution time by 80%.",
    descriptionNL: "Architectuur ontworpen voor een autonoom agent-systeem, georkestreerd door een crew van 6 gespecialiseerde agents (onderzoek, code, review). Dit geavanceerde multi-agent framework handelt complexe, meerstaps taken end-to-end af zonder menselijke tussenkomst. Door workflows te parallelliseren heeft het systeem de totale uitvoeringstijd van projecten met 80% verminderd.",
    technologies: ["CrewAI", "LangGraph", "Claude 3.5", "Python", "Agents"],
    siteUrl: "#",
  },
  {
    id: "ai-04",
    imgUrl: portfolioImgComm,
    category: "ai/ml",
    title: "Outlook Agenda AI",
    date: "2024-09",
    year: 2024,
    priority: 14,
    descriptionEN: "Developed an intelligent scheduling assistant that analyzes inbox context to book appointments automatically via Microsoft Graph. The AI proactively predicts scheduling conflicts and sends timely reminders to all participants. Achieving 90% accuracy in complex scheduling scenarios, it significantly reduces administrative overhead.",
    descriptionNL: "Ontwikkelde een intelligente planningsassistent die inbox-context analyseert om automatisch afspraken te boeken via Microsoft Graph. De AI voorspelt proactief planningsconflicten en stuurt tijdige herinneringen naar alle deelnemers. Met een nauwkeurigheid van 90% in complexe planningsscenario's vermindert het de administratieve lasten aanzienlijk.",
    technologies: ["GPT-4", "Outlook Graph", "Python", "Azure", "NLP"],
    siteUrl: "#",
  },
  {
    id: "ai-05",
    imgUrl: portfolioImgLinkedIn,
    category: "ai/ml",
    title: "LinkedIn AI Outreach",
    date: "2024-07",
    year: 2024,
    priority: 16,
    descriptionEN: "Built an autonomous networking bot that identifies potential leads, drafts personalized outreach messages, and manages connection requests safest within rate limits. The system autonomously expands professional networks, establishing over 150+ meaningful connections per run. It leverages sophisticated profile analysis to ensure high relevance and response rates.",
    descriptionNL: "Bouwde een autonome netwerkbot die potentiële leads identificeert, gepersonaliseerde outreach-berichten opstelt en connectieverzoeken veilig binnen de limieten beheert. Het systeem breidt professionele netwerken autonoom uit en legt meer dan 150+ betekenisvolle verbindingen per run. Het maakt gebruik van geavanceerde profielanalyse om een hoge relevantie en responspercentages te garanderen.",
    technologies: ["Puppeteer", "Gemini Pro", "SerpAPI", "Node.js", "Automation"],
    siteUrl: "#",
  },
  {
    id: "ai-06",
    imgUrl: portfolioImgNotulist,
    category: "ai/ml",
    title: "AI Meeting Assistant & Voice Automation",
    date: "2024-05",
    year: 2024,
    priority: 8,
    descriptionEN: "Built a comprehensive meeting intelligence platform with both cloud and offline capabilities. The system captures live audio via WebRTC for real-time transcription, summarization, and automated follow-up planning. Features privacy-focused offline mode using Whisper.cpp and local LLMs for sensitive environments, achieving 85% accuracy even in noisy conditions. Handles complex speech-to-action workflows including speaker diarization, automatic action item assignment, and direct calendar integration. The elimination of manual note-taking has saved teams an average of 5 hours per week while ensuring 24/7 availability and complete data privacy options.",
    descriptionNL: "Bouwde een uitgebreid meeting intelligence platform met zowel cloud als offline mogelijkheden. Het systeem legt live audio vast via WebRTC voor real-time transcriptie, samenvatting en geautomatiseerde follow-up planning. Beschikt over privacy-gerichte offline modus met Whisper.cpp en lokale LLM's voor gevoelige omgevingen, met 85% nauwkeurigheid zelfs in lawaaierige omstandigheden. Handelt complexe speech-to-action workflows af inclusief speaker diarisatie, automatische toewijzing van actiepunten en directe agenda-integratie. De eliminatie van handmatige notities heeft teams gemiddeld 5 uur per week bespaard terwijl 24/7 beschikbaarheid en complete data privacy opties gegarandeerd zijn.",
    technologies: ["Whisper", "Whisper.cpp", "GPT-4", "Local LLM", "WebRTC", "React", "Python", "C++"],
    siteUrl: "#",
  },
  {
    id: "ai-07",
    imgUrl: portfolioImgWebsite,
    category: "ai/ml",
    title: "AI Website Builder",
    date: "2024-03",
    year: 2024,
    priority: 9,
    descriptionEN: "Created a revolutionary tool that turns a simple customer idea into a fully deployed Next.js website with generated copy and images in under 10 minutes. The platform orchestrates design tokens, layout generation, and asset creation seamlessly. To date, 5+ client sites have been built and deployed using this automated pipeline.",
    descriptionNL: "Creëerde een revolutionaire tool die een eenvoudig klantidee omzet in een volledig geïmplementeerde Next.js website met gegenereerde copy en beelden in minder dan 10 minuten. Het platform orkestreert design tokens, lay-out generatie en asset creatie naadloos. Tot nu toe zijn 5+ klant-sites gebouwd en geïmplementeerd met deze geautomatiseerde pijplijn.",
    technologies: ["GPT-4", "Vercel AI SDK", "DALL·E 3", "Next.js", "React"],
    siteUrl: "#",
  },
  {
    id: "ai-08",
    imgUrl: portfolioImgPersonal,
    category: "ai/ml",
    title: "Personal Full-Stack Agent",
    date: "2024-01",
    year: 2024,
    priority: 15,
    descriptionEN: "Designed a 24/7 personal operations agent that autonomously manages email, calendar, and research tasks using persistent memory and custom tool APIs. Operating fully autonomously, it handles daily logistics and information retrieval. This personal productivity multiplier has resulted in a documented +30% increase in daily efficiency.",
    descriptionNL: "Ontwierp een 24/7 persoonlijke operations agent die autonoom e-mail, agenda en onderzoekstaken beheert met behulp van persistent geheugen en aangepaste tool API's. Volledig autonoom opererend, handelt het dagelijkse logistiek en informatie-opvraging af. Deze persoonlijke productiviteitsvermenigvuldiger heeft geresulteerd in een gedocumenteerde toename van +30% in dagelijkse efficiëntie.",
    technologies: ["AutoGPT", "Memory Layers", "Tools API", "Python", "Docker"],
    siteUrl: "#",
  },
  {
    id: "ai-10",
    imgUrl: portfolioImgClaude,
    category: "ai/ml",
    title: "Claude Workflow Automator",
    date: "2024-10",
    year: 2024,
    priority: 7,
    descriptionEN: "Implemented over 30+ advanced Claude 3.5 prompt engineering techniques to drive enterprise-grade automation. The system spans from generating complex artifacts to integrating with Model Context Protocol (MCP) servers. Currently integrated into 20+ core business workflows, boosting reliability and output quality.",
    descriptionNL: "Implementeerde meer dan 30+ geavanceerde Claude 3.5 prompt engineering technieken om enterprise-grade automatisering te sturen. Het systeem omvat alles van het genereren van complexe artifacts tot integratie met Model Context Protocol (MCP) servers. Momenteel geïntegreerd in 20+ kernbedrijfsprocessen, wat de betrouwbaarheid en outputkwaliteit verhoogt.",
    technologies: ["Anthropic API", "Artifacts", "MCP Servers", "Python", "Automation"],
    siteUrl: "#",
  },
  {
    id: "ai-13",
    imgUrl: portfolioImgResearch,
    category: "ai/ml",
    title: "Autonomous Research Agent",
    date: "2023-09",
    year: 2023,
    priority: 17,
    descriptionEN: "Developed a research agent that transforms a simple topic input into a comprehensive 10-page report. It performs autonomous web searches, reads academic papers, and synthesizes findings with full citations. Capable of generating PhD-level summaries and exporting to Markdown/PDF, it serves as a powerful accelerator for academic and professional research.",
    descriptionNL: "Ontwikkelde een onderzoeksagent die een eenvoudige onderwerpinput omzet in een uitgebreid rapport van 10 pagina's. Het voert autonome webzoekopdrachten uit, leest academische papers en synthetiseert bevindingen met volledige citaten. In staat om samenvattingen op PhD-niveau te genereren en te exporteren naar Markdown/PDF, dient het als een krachtige versneller voor academisch en professioneel onderzoek.",
    technologies: ["Perplexity-style", "Browserless", "Markdown Export", "Python", "LangChain"],
    siteUrl: "#",
  },
  {
    id: "ai-15",
    imgUrl: portfolioImgDefGPT,
    category: "ai/ml",
    title: "Enterprise AI Platform",
    date: "2023-04",
    year: 2023,
    priority: 1,
    descriptionEN: "Launched the first fully private, on-premise AI platform serving over 80,000 employees. This enterprise-grade solution features a multi-agent LLM architecture with a completely offline-capable stack running local 70B Llama models via Ollama and Qdrant for vector storage. Optimized for standard hardware achieving <2s inference times, proving high-performance AI is possible at the edge. The platform integrates with secure internal knowledge bases, ensures strict privacy compliance, and delivers advanced AI assistance across the entire organization without any data leaving the premises. Successfully demonstrates that enterprise-scale AI can maintain maximum security for sensitive environments without sacrificing capability.",
    descriptionNL: "Lanceerde het eerste volledig private, on-premise AI-platform dat meer dan 80.000 medewerkers bedient. Deze enterprise-grade oplossing beschikt over een multi-agent LLM-architectuur met een volledig offline-capabele stack die lokale 70B Llama-modellen draait via Ollama en Qdrant voor vector-opslag. Geoptimaliseerd voor standaard hardware met inferentietijden van <2s, wat bewijst dat high-performance AI aan de edge mogelijk is. Het platform integreert met veilige interne kennisbanken, garandeert strikte privacy-compliance en levert geavanceerde AI-ondersteuning in de hele organisatie zonder dat gegevens het terrein verlaten. Toont succesvol aan dat enterprise-schaal AI maximale beveiliging kan behouden voor gevoelige omgevingen zonder in te boeten aan capaciteit.",
    technologies: ["Llama 3 70B", "Ollama", "On-premise AI", "Multi-agent", "RAG", "Qdrant", "Python", "Docker", "Enterprise Security"],
    siteUrl: "#",
  },

  // --- Existing Projects ---
  {
    id: "01",
    imgUrl: portfolioImg10,
    category: "Professional",
    title: "Vloto B.V.",
    date: "2023-02",
    year: 2023,
    priority: 11,
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
    id: "17",
    imgUrl: portfolioImgFraud,
    category: "Professional",
    title: "Invoice Fraud Prevention Platform",
    date: "2024-08",
    year: 2024,
    priority: 12,
    descriptionEN:
      "Architected and deployed a comprehensive fraud prevention ecosystem that drastically reduced payment defaults by 73% across multiple business units. The system employs advanced behavioral pattern recognition to identify high-risk customers before invoicing, implementing dynamic risk profiles segmented by industry, transaction history, and payment behavior patterns. Pioneered a micro-invoicing solution that breaks monthly invoices into smaller periodic payments based on risk scores, reducing exposure and improving cash flow by 45%. Built real-time trend monitoring dashboards that detect emerging fraud patterns, automatically adapting collection strategies and payment terms. Features include automated escalation workflows, AI-powered risk scoring with continuous learning, integration with credit bureaus and debt collection APIs, and predictive analytics for early default detection. The platform processes 50k+ monthly transactions with automated dunning sequences that recovered €2M+ in outstanding payments.",
    descriptionNL:
      "Ontwierp en implementeerde een uitgebreid fraude-preventie ecosysteem dat betalingswanbetalingen met 73% verminderde over meerdere bedrijfsonderdelen. Het systeem gebruikt geavanceerde gedragspatroonherkenning om hoog-risico klanten te identificeren voor facturering, waarbij dynamische risicoprofielen per industrie, transactiegeschiedenis en betalingsgedrag worden toegepast. Pionierde een micro-facturering oplossing die maandelijkse facturen opsplitst in kleinere periodieke betalingen op basis van risicoscores, wat de blootstelling vermindert en de cashflow met 45% verbetert. Bouwde real-time trend monitoring dashboards die opkomende fraudepatronen detecteren en automatisch incasso-strategieën en betalingsvoorwaarden aanpassen. Functies omvatten geautomatiseerde escalatie workflows, AI-aangedreven risicoscoring met continu leren, integratie met kredietbureaus en incasso API's, en voorspellende analyses voor vroege wanbetaling detectie. Het platform verwerkt 50k+ maandelijkse transacties met geautomatiseerde dunning sequences die €2M+ aan openstaande betalingen recupereerden.",
    technologies: [
      "Laravel",
      "PHP",
      "REST APIs",
      "MySQL",
      "Payment APIs",
      "Mollie",
      "Risk Analytics",
      "Backend Development",
      "API Integration",
    ],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg13,
    category: "ai/ml",
    title: "License Plate Detection System",
    date: "2023-08",
    year: 2023,
    priority: 13,
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
    priority: 10,
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
    date: "2023-04",
    year: 2023,
    priority: 19,
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
    id: "15",
    imgUrl: portfolioImg15,
    category: "ai/ml",
    title: "Medical Technical File Builder",
    date: "2025-01",
    year: 2025,
    priority: 6,
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
    priority: 5,
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
    priority: 18,
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
    imgUrl: portfolioImg03,
    category: "Professional",
    title: "Yamba",
    date: "2019-09",
    year: 2019,
    priority: 25,
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
    category: "Professional",
    title: "Tic Tac Toe",
    date: "2020-01",
    year: 2020,
    priority: 24,
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
    category: "Professional",
    title: "Snake 3D",
    date: "2020-04",
    year: 2020,
    priority: 23,
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
    category: "Professional",
    title: "Restaurant",
    date: "2020-07",
    year: 2020,
    priority: 22,
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
    priority: 20,
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
    priority: 21,
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