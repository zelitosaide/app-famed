export default function Footer() {
  return (
    <div style={{ height: 260 }} className="bg-[#074F07] pl-28 pr-28">
      <div className="grid gap-4 grid-cols-3">
        <div className="bg-[red]">
          <h2>Faculdade de Medicina, UEM</h2>
        </div>
        <div className="bg-[yellow]">
          <h2>Links úteis</h2>
        </div>
        <div className="bg-[white]">
          <h2>Contacto</h2>
        </div>
      </div>
    </div>
  );
}