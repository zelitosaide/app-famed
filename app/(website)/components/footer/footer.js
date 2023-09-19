import "./footer.css";

export default function Footer() {
  return (
    <div style={{ height: 260 }} className="bg-[#074F07] pl-28 pr-28 pt-9">
      <div className="grid gap-4 grid-cols-3">
        <div>
          <h2 className="footer-title">Faculdade de Medicina, UEM</h2>
        </div>
        <div>
          <h2 className="footer-title">Links úteis</h2>
        </div>
        <div>
          <h2 className="footer-title">Contacto</h2>
        </div>
      </div>
    </div>
  );
}