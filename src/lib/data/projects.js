// ✏️ EDIT YOUR PROJECTS HERE. Components only call the functions below,
// so you can later swap this file for a Mongoose/PostgreSQL query without touching the UI.
// `grad` + `emoji` draw the thumbnail. For a real screenshot add `image: "/projects/x.png"` (file in /public/projects).
const projects = [
  {
    id: "yusafir",
    title: "Yusafir",
    category: "Full-Stack",
    emoji: "✈️",
    grad: "#F56E0F,#7A3400",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "TanStack Query", "Tailwind CSS"],
    desc: "Travel booking platform for Bangladesh with role-based user and admin dashboards.",
    long: "Visitors browse destinations and stays, create an account and book. Admins manage destinations, stays, users and bookings from a role-based dashboard. The React front end is deployed on Vercel and the Express and MongoDB API on Render.",
    features: [
      "Explore page with search, filters, sorting and pagination",
      "JWT login, protected routes and role-based access (user, admin)",
      "User dashboard: bookings, profile and settings",
      "Admin dashboard: users, destinations, stays, bookings and charts",
      "Stay details with photo gallery, reviews and booking; light and dark mode",
    ],
    live: "https://yusafir-eight.vercel.app",
    github: "https://github.com/Tawhidh05/yusafir",
    featured: true,
  },
  {
    id: "devgear",
    title: "DevGear",
    category: "Next.js",
    emoji: "🖥️",
    grad: "#1B1B1E,#F56E0F",
    tech: ["Next.js 15", "React 19", "Firebase Auth", "Tailwind CSS", "Context API"],
    desc: "E-commerce storefront for developer hardware with Firebase login and protected pages.",
    long: "A storefront built with the Next.js App Router. Visitors browse keyboards, displays and desk gear with search, filters and sorting, and logged-in users can add and manage products. Public and protected routes, accessible UI and responsive layouts throughout.",
    features: [
      "Search plus category, price and rating filters with four sort modes",
      "Dynamic product details route (/items/[id]) with specs and related items",
      "Email/password and Google sign-in with Firebase Authentication",
      "Protected add and manage pages that redirect signed-out users to login",
      "Accessible: focus rings, skip link, ARIA roles and reduced-motion support",
    ],
    live: "https://devgear-phi.vercel.app/",
    github: "https://github.com/Tawhidh05/Devgear",
    featured: true,
  },
  {
    id: "gamehub",
    title: "GameHub",
    category: "React",
    emoji: "🎮",
    grad: "#262626,#F56E0F",
    tech: ["React", "Vite", "React Router", "Firebase Auth", "Tailwind CSS", "daisyUI", "Motion"],
    desc: "Showcase library where developers share and discover game projects.",
    long: "A curated, searchable place for developers to list their game projects and for visitors to explore them. Includes authentication, private routes, toast feedback and smooth animations, with a mobile-first responsive design.",
    features: [
      "Email/password and social login with Firebase Authentication",
      "Browse game projects with details, images and live links",
      "Private routes, toast notifications and animated transitions",
      "Mobile-first UI built with Tailwind CSS and daisyUI",
    ],
    live: "https://gamehubtsx.netlify.app/",
    github: "https://github.com/Tawhidh05/Gamehub-for-dev",
    featured: true,
  },
];

export async function getProjects(category) {
  return category && category !== "All" ? projects.filter((p) => p.category === category) : projects;
}
export async function getFeaturedProjects() { return projects.filter((p) => p.featured); }
export async function getProject(id) { return projects.find((p) => p.id === id) ?? null; }
export async function getCategories() { return ["All", ...new Set(projects.map((p) => p.category))]; }
