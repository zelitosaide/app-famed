export default function Header() {
  return (
    <header style={{ backgroundColor: "rgb(var(--accent-rgb))" }} className="pl-28 pr-28">
      <ul className="text-slate-200 flex text-sm font-medium">
        <li className="pt-2 pb-2 pl-3 pr-3 hover:bg-[#0d5e0c] cursor-pointer flex items-center">
          Sobre a Faculdade
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </li>
        <li className="pt-2 pb-2 pl-3 pr-3 hover:bg-[#0d5e0c] cursor-pointer flex items-center">
          Links úteis
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </li>
      </ul>
    </header>
  );
}