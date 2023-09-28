export default async function Page() {
  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>Formulário de requisição de Consulta de Bioestatística</h1>
      <div className="rounded shadow-sm shadow-[#ddeedd] border border-[#ddeedd] p-3">
        Caro(a) solicitante, Preencha o Formulário de requisição de Consulta de Bioestatística

        <form>
          Nome Completo
          <input type="text" className="block" style={{ border: "1px solid black" }} />

          E-mail
          <input type="email" className="block" style={{ border: "1px solid black" }} />

          Contacto telemóvel
          <input type="text" className="block" style={{ border: "1px solid black" }} />

          Marque a sua consulta (apenas em todas Quarta-feira, das 16-18h)
          <input type="text" className="block" style={{ border: "1px solid black" }} />

          Tópico de consulta
          <input type="text" className="block" style={{ border: "1px solid black" }} />

          Resumo da pesquisa (deixar um espaço com pelo menos 10 linhas) 
          <textarea className="block" style={{ border: "1px solid black" }} />

          <button type="submit">Marcar</button>
          <button>Cancelar</button>
        </form>
      </div>
    </div>
  );
}