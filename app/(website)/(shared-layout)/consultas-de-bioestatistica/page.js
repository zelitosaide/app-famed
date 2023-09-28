import Form from "./form";

export default async function Page() {
  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>Formulário de requisição de Consulta de Bioestatística</h1>
      <div className="rounded shadow-sm shadow-[#ddeedd] border border-[#ddeedd] p-8">
        Caro(a) solicitante, Preencha o Formulário de requisição de Consulta de Bioestatística

        <Form />

      </div>
    </div>
  );
}