import illustratorImg from "../assets/illustrator.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import javaImg from "../assets/java.png";
import javascriptImg from "../assets/javascript.png";
import cppImg from "../assets/cpp.png";
import photoshopImg from "../assets/photoshop.png";
import sqlImg from "../assets/sql.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";
import pythonImg from "../assets/python.png";
import figmaImg from "../assets/figma.png";
import framerImg from "../assets/framer.png";
import cyberImg from "../assets/cyber.png";
import munsocImg from "../assets/munsoc.png";
import techfestImg from "../assets/techfest.png";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';

export const navItems = [
  { label: "Home", section: "hero"},
  { label: "About", section: "about" },
  { label: "Skills", section: "skill" },
  { label: "Work", section: "work" },
  { label: "Contact", section: "contact" },
];

export const skills = [
  { name: "HTML", imgSrc: htmlImg },
  { name: "CSS", imgSrc: cssImg },
  { name: "JavaScript", imgSrc: javascriptImg },
  { name: "React", imgSrc: reactImg },
  { name: "Tailwind CSS", imgSrc: tailwindImg },
  { name: "Framer Motion", imgSrc: framerImg },
  { name: "Python", imgSrc: pythonImg },
  { name: "Java", imgSrc: javaImg },
  { name: "SQL", imgSrc: sqlImg },
  { name: "C++", imgSrc: cppImg },
  { name: "Illustrator", imgSrc: illustratorImg },
  { name: "Photoshop", imgSrc: photoshopImg },
  { name: "Figma", imgSrc: figmaImg },
];

export const projects = [
  {
    title: "Cybersecurity Club",
    description: "Developed website using relevant UI/UX.",
    imageUrl: cyberImg,
    link: "https://cyberclubmpstme.vercel.app/index.html",
    tools: [htmlImg, cssImg, javascriptImg],
  },
  {
    title: "IIT Bombay's TWMUN",
    description: "Under Secretary General for Design, 2023-24.",
    imageUrl: techfestImg,
    link: "https://www.instagram.com/twmun.iitb/",
    tools: [illustratorImg], // Add tools used for this project
  },
  {
    title: "MUN Society",
    description: "Oversaw page design for two consecutive years, 2023-2025.",
    imageUrl: munsocImg,
    link: "https://www.instagram.com/munsoc_mpstme/",
    tools: [illustratorImg, photoshopImg], // Add tools used for this project
  },
  
  // Add more projects as needed
];