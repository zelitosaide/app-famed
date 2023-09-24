import SideNav from "../components/sidenav/sidenav";

export default function Layout({ children }) {
  return (
    <div className="pl-28 pr-28" style={{ display: "flex" }}>
      <div>
        <SideNav />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}