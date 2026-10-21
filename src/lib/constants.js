import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

// ✏️ EDIT YOUR DETAILS HERE. Every component reads from this file.
export const PROFILE = {
  name: "Tawhid Hossain",
  email: "Tawhidh2014@gmail.com",
  location: "Dhaka, Bangladesh",
  status: "Open to Junior / Mid-level Full-Stack roles",
  roles: ["Full-Stack Developer", "MERN Stack Developer", "React & Next.js Developer", "Problem Solver"],
  intro:
    "I build web applications with React, Node.js, Express and MongoDB, using Firebase for authentication. I write clean, maintainable code and ship things that work in production, not just in a demo.",
  bio: "I'm a full-stack developer building web applications with React, Node.js, Express and MongoDB, with Firebase for authentication and backend services. I'm looking for Junior or Mid-level Full-Stack roles where I can keep growing, especially on teams that value code quality and give room to learn. I'm open to on-site, hybrid or remote work in Dhaka and beyond, and I'm exploring ML/AI on the side.",
  photo: "/me.jpg", // file lives in /public. Replace it with a better photo anytime.
  stats: [
    { label: "GitHub repos", value: "21" },
    { label: "Live projects", value: "3" },
    { label: "Technologies", value: "10+" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", id: "home", href: "/#home" },
  { label: "About", id: "about", href: "/#about" },
  { label: "Skills", id: "skills", href: "/#skills" },
  { label: "Projects", id: "projects", href: "/projects" },
  { label: "Contact", id: "contact", href: "/#contact" },
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Tawhidh05", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tawhidh05/", icon: FaLinkedinIn },
  { label: "Email", href: "mailto:Tawhidh2014@gmail.com", icon: FaEnvelope },
];

export const SKILLS = {
  Frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript (ES6+)", "React", "React Router", "Next.js", "TanStack Query"],
  Backend: ["Node.js", "Express.js", "MongoDB", "JWT & bcrypt", "Firebase Auth"],
  Tools: ["Git & GitHub", "Vite", "Axios", "Vercel / Netlify / Render", "Cursor AI"],
};

export const TIMELINE = [
  { year: "Training", title: "Complete Web Development Course", place: "Programming Hero", text: "Full-stack course covering React, Node.js, Express, MongoDB and Firebase." },
  { year: "2024", title: "Sales Representative (Contract)", place: "Bohu Bangladesh Limited, Dhaka", text: "On-site contract role (Jan to Mar 2024) building communication and computer-literacy skills." },
  { year: "2024 to 2028", title: "BA in English", place: "National University of Bangladesh", text: "Bachelor of Arts, currently studying." },
  { year: "2021 to 2023", title: "HSC, Business Studies", place: "Novelty College", text: "Higher Secondary Certificate (Mar 2021 to Aug 2023)." },
];
