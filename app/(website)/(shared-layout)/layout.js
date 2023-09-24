import SideNav from "../components/sidenav/sidenav";

export default function Layout({ children }) {
  return (
    <div className="pl-28 pr-28 flex">
      <div className="shrink-0 w-72">
        <SideNav />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}