import "../globals.css";

import HeaderContainer from "./components/header/header-container";
import Footer from "./components/footer";
import NavbarContainer from "./components/navbar/navbar-container";
import SideNav from "./components/sidenav/sidenav";

export const metadata = {
  title: "FAMED",
  description: "Faculdade de Medicina da Universidade Eduardo Mondlane, FAMED - UEM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderContainer />
        <NavbarContainer />

        <div style={{ display: "flex" }}>
          <div style={{ width: "26%", padding: "30px 20px 20px 120px" }}>
            <SideNav />
          </div>
          <div style={{ padding: "30px 120px 30px 0", width: "74%" }}>
            {children}
          </div>
        </div>
        
        <Footer />
      </body>
    </html>
  );
}