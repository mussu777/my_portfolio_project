import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.png";
import Work6 from "./assets/project-6.jpg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Mustak",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Ansary",
  },

  {
    id: 3,
    title: "Age : ",
    description: "24 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Remote/Office : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "India",
  },

  {
    id: 7,
    title: "linkedIn : ",
    description: "mustak-mussu1729",
    url: "https://www.linkedin.com/in/mustak-mussu1729/",
  },

  {
    id: 8,
    title: "Email : ",
    description: "Mustak65ee@gmail.com",
  },

  {
    id: 9,
    title: "X : ",
    description: "@MustaQ_0521",
    url: "https://X.com/MustaQ_0521",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English, Hindi, Bengali",
  },

  {
    id: 11,
    title: "Github : ",
    description: "mussu777",
    url: "https://github.com/mussu777",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "1+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "1+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "July 2024 - Dec 2024",
    title: "Software Developer",
    desc: (
      <>
        <strong>
          <a
            href="https://aerialview6.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Aerial View-6 Infotech Private Limited, West Bengal, India 🔗
          </a>
        </strong>
      
      </>
    ),
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Dec 2023 - May 2024",
    title: "Backend Developer Intern",
    desc: (
      <>
        <strong>
          <a
            href="https://aerialview6.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Aerial View-6 Infotech Private Limited, West Bengal, India 🔗
          </a>
        </strong>
        <br />- Developed a complete{" "}
        <a
          href="https://demo.aerialview6.com/ems/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Employee Management System
        </a>{" "}
        handling employee data, attendance, and payroll .
      </>
    ),
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "June 2023 - August 2023",
    title: "AI/ML Summer Intern",
    desc: (
      <>
        <strong>NIT Meghalaya, Shillong, India</strong>{" "}
        <a
          href="https://nitm.ac.in/department/electronics-communication-engineering-2/faculty/dr-shubhankar-majumdar"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          🔗
        </a>
        <br />- Developed time series models using the{" "}
        <a
          href="https://unit8co.github.io/darts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DARTS
        </a>{" "}
        library to forecast air quality levels for
        <a
          href="https://github.com/mussu777/ML-AQI-Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong> Malaysia</strong> and <strong>Philippines </strong>
        </a>
        datasets.
      </>
    ),
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2024",
    title:
      "Engineering Degree <span> Maulana Abul Kalam Azad University of Technology. </span>",
    desc: "Done my B.Tech in Electronics & Communication Engineering.",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019",
    title: "Higher Secondary <span> Guru Gobind Singh Public School. </span>",
    desc: "Completed my 12th through CBSE Board having Science stream.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title:
      "Matriculation <span> AGPN Convent And Eklabya Residential School. </span>",
    desc: "I have completed my 10th through the CBSE Board.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "95",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "95",
  },

  {
    id: 3,
    title: "Typerscript",
    percentage: "90",
  },

  {
    id: 4,
    title: "Tailwind Css",
    percentage: "94",
  },

  {
    id: 5,
    title: "React Js",
    percentage: "90",
  },

  {
    id: 6,
    title: "Mongo DB",
    percentage: "90",
  },

  {
    id: 7,
    title: "Express Js",
    percentage: "90",
  },

  {
    id: 8,
    title: "Node Js",
    percentage: "90",
  },

  {
    id: 9,
    title: "Numpy",
    percentage: "80",
  },

  {
    id: 10,
    title: "Pandas",
    percentage: "80",
  },

  {
    id: 11,
    title: "Matplotlib",
    percentage: "80",
  },

  {
    id: 12,
    title: "React Native",
    percentage: "85",
  },

  {
    id: 13,
    title: "C++",
    percentage: "90",
  },
];

export const portfolio = [
  {
    id: 1,
    img: img1,
    title: "Web Development",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "StudyNotion",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Javascript and MERN Stack",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mega-project-client.vercel.app/",
      },
    ],
  },

  {
    id: 2,
    img: img2,
    title: "App Development",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Gmeet , Grocery App",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Javascript, Typescript, React Native",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/mussu777",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Tour App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Plan trip",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Javascript, React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://plan-with-lovy.vercel.app/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.Google.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Course Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Self",
      },
      {
        title: "Language : ",
        desc: "Javascript, React JS",
      },
      {
        title: "Preview : ",
        desc: "https://top-course-taupe.vercel.app/",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Machine Learning",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Air Quality Forecasting Using AI",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Institute",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Python",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/mussu777/ML-AQI-Project",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
