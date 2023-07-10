export default function Header() {
  return (
    <header style={{ background: "rgb(var(--secondary-button-rgb))"}}>
      <ul className="text-gray-300 flex text-sm">
        <li className="p-2">Sobre a Faculdade</li>
        <li className="p-2">Links úteis</li>
      </ul>
    </header>
  );
}