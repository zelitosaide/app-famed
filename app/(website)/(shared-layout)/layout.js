import SideNav from "../components/sidenav/sidenav";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="pl-28" style={{ width: "32%", padding: "30px 20px 20px 120px" }}>
        <SideNav />
      </div>
      <div className="pr-28" style={{ paddingTop: 30, paddingBottom: 30, width: "68%" }}>
        {children}
      </div>
    </div>
  );
}