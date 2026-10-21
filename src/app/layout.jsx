import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROFILE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: `${PROFILE.name} | Full-Stack Developer`, template: `%s | ${PROFILE.name}` },
  description: PROFILE.intro,
};

// Sets the theme before first paint so there is no light-mode flash.
const themeScript = `try{document.documentElement.classList.toggle("dark",(localStorage.getItem("theme")||"dark")==="dark")}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
