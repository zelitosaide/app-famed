import "../globals.css";
// import { Inter } from "next/font/google";

import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar/navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FAMED",
  description: "Faculdade de Medicina da Universidade Eduardo Mondlane, FAMED - UEM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}