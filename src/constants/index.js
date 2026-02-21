const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Achievements",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 8, suffix: "+", label: "Languages Known" },
  { value: 4, suffix: "", label: "Achievements" },
  { value: 8.77, suffix: "", label: "CGPA" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "C++ Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "JavaScript Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Node.js Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "MongoDB Developer",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Node.js Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "MongoDB Developer",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Built a full-stack circular economy platform for trading surplus construction materials, featuring role-based access control and dynamic filtering.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Smart Product Search - Material Mover",
    date: "November 2025",
    responsibilities: [
      "Built a web application using Node.js, Express, and MongoDB to facilitate a circular economy platform for trading surplus construction materials.",
      "Implemented Role-Based Access Control (RBAC) to differentiate functionalities and permissions between Admin, Buyer, and Seller accounts.",
      "Developed a dynamic frontend using HTML/CSS and backend logic for category-based filtering, allowing users to sort through construction waste materials efficiently.",
    ],
  },
  {
    review: "Designed and implemented a graph-based route optimization system using Dijkstra's algorithm with extensible architecture for future AI-based traffic heuristics.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Shortest Path Optimization Engine",
    date: "November 2025 - Ongoing",
    responsibilities: [
      "Implemented a graph-based route optimization system using Dijkstra's algorithm to compute shortest paths between locations.",
      "Designed extensible architecture to support future AI-based traffic heuristics and dynamic edge weights.",
      "Identified challenges in real-time traffic modeling and heuristic tuning, planned for Phase 2 implementation.",
    ],
  },
  {
    review: "Assisted in building an IoT-based Automatic Waste Segregator using Arduino UNO, IR sensors, and GSM communication for efficient waste separation.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Arduino-based Smart Segregator",
    date: "August 2022",
    responsibilities: [
      "Assisted in building an Automatic Waste Segregator — an Arduino UNO-based system with IR sensors and GSM communication.",
      "Aided efficient wet and dry waste separation to reduce garbage mixing, odor, and health hazards.",
      "Awarded Second Prize for the design and implementation of the Smart Segregator project.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "International Representation",
    mentions: "Belgrade, Serbia",
    review:
      "Conceptualized and partially developed an assistive mobile application for visually impaired users to identify packaged products in the International Conference of Young Scientists held by Belgrade, Serbia.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Second Prize — Smart Segregator",
    mentions: "Arduino Project",
    review:
      "Awarded Second Prize for designing the Arduino-based Smart Segregator — an innovative IoT solution for automatic wet and dry waste separation using sensors and microcontrollers.",
    imgPath: "/images/client3.png",
  },
  {
    name: "School Captain (2022–2024)",
    mentions: "St. Mark's Sr. Sec. Public School",
    review:
      "Elected School Captain for two consecutive years, responsible for student leadership, discipline coordination, and representation in all school-wide activities and events.",
    imgPath: "/images/client2.png",
  },
  {
    name: "School Rank 1 — CBSE Board 2024",
    mentions: "Non-Medical (Science) Stream",
    review:
      "Secured School Rank 1 in the Non-Medical (Science) stream in the CBSE Board Examination 2024 with an outstanding score of 95.4%.",
    imgPath: "/images/client5.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/keshavgoel_1320/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/keshav-goel-694474296/",
  },
  {
    name: "github",
    imgPath: "/images/github_dark.png",
    link: "https://github.com/keshavgoel1320",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
