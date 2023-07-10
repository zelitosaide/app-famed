export default function Header() {
  return (
    <header style={{ background: "rgb(var(--accent-rgb))" }} className="pl-32 pr-32">
      <ul className="text-slate-200 flex text-sm font-medium">
        <li className="pt-2 pb-2 pl-3 pr-3 hover:bg-[#0d5e0c] cursor-pointer flex">
          Sobre a Faculdade
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </li>
        <li className="pt-2 pb-2 pl-3 pr-3 hover:bg-[#0d5e0c] cursor-pointer flex">
          Links úteis
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </li>
      </ul>
    </header>
  );
}