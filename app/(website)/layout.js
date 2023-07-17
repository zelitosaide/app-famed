import "../globals.css";

import Header from "./components/header/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar/navbar";

export const metadata = {
  title: "FAMED",
  description: "Faculdade de Medicina da Universidade Eduardo Mondlane, FAMED - UEM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}