import News from "./news";

export default function Page() {
  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>Notícias</h1>

      <News news={data} />
    </div>
  );
}

export const data = [
  {
    _id: "635d50d8423d54fa8ffb7fc5",
    title:
      "Cerimónia de lançamento do Mestrado em Emergências Pediátricas e Neonatais",
    content:
      "A Faculdade de Medicina da Universidade Eduardo Mondlane (UEM), em colaboração com a Universidade de Pádua e Universidade Católica de Moçambique, membros do consórcio do Mestrado, lançam no dia 01 de Novembro de 2022 na Aula Magna da Faculdade de Medicina da UEM as 11:00h o Mestrado em Emergências Pediátricas e Neonatais. É o primeiro Mestrados com dupla titulação oferecido pela FAMED e direccionado aos profissionais de saúde de Moçambique e de Itália.",
    department: "Dep. Pediatria",
  },
  {
    _id: "63617fd911ef5caa51816c4c",
    title:
      "A UEM lançou hoje 01.11.2022, na aula magna da Faculdade de Medicina,  o Mestrado em Emergências Pediatricas e Neonatais.",
    content:
      "A UEM lançou hoje 01.11.2022, na aula magna da Faculdade de Medicina,  o Mestrado em Emergências Pediatricas e Neonatais.",
    department: "Dep. Pediatria",
  },
  {
    _id: "636d6f7a910e9f76761ac19c",
    title:
      "Conferência Internacional, com o lema “Educar, para que a Prevenção do Cancro da Próstata, seja uma prioridade na saúde do homem nos PALOP”",
    content:
      "A Universidade de Cabo Verde-FCT e a Faculdade de Medicina da Universidade Eduardo Mondlane, e em parceira com o Hospital Universitário Agostinho Neto e o Hospital Central de Maputo, vai organizar Conferência Internacional, com o lema “Educar para que a Prevenção do Cancro da Próstata, seja uma prioridade na saúde do homem nos PALOP”. \nO evento decorrerá no dia 30 de novembro de 2022, no Centro de Convenções no Campus da Universidade de Cabo Verde-, no formato híbrido (online e presencial), no âmbito do mês de conscientização (Novembro Azul) de doenças masculinas, com ênfase na prevenção e no diagnóstico precoce do cancro da Próstata. \n\nConvidamos a todos os docentes, investigadores e discentes a participarem  nesta Conferencias Internacional. \nPara inscrição copiar o seguinte LINK no seu browser e completar a informação. \nhttps://docs.google.com/forms/d/1urEoC91C-y6LWAJ7OwSaqpGDQGzA-PgvYyvcoBvO2HY/viewform?edit_requested=true\n\nA Comissão Organizadora do projeto INCUBATOR-Faculdade de Ciência e Tecnologia-UNICV\n",
    department: "Dep. Microbiologia",
  },
  {
    _id: "6392e55294198e70a23375d8",
    title: "MEDIS Premeia Melhores alunos graduados de Medicina da UEM de 2022",
    content:
      "A Medis premiou os três melhores alunos que terminaram o curso de Medicina na Universidade Eduardo Mondlane neste ano de 2022 Denilsa Navalha, Jacobe Oface e Chande Essiaca foram os estudantes distinguidos pelo seu esforço e dedicação ao longo de todo o percurso académico. A cerimónia da entrega dos prémios, uma parceira da Medis com a Faculdade de Medicina da Universidade Eduardo Mondlane, realizou-se no passado dia 22 de Novembro. Em Dezembro, os jovens médicos visitaram as instalações da Medis, onde tiveram a oportunidade de conhecer toda a logística que envolve o sector farmacêutico, em especial o dos medicamentos e productos de saúde registados no país que farão parte das suas armas terapêuticas para tratamento dos seus pacientes.",
    department: "Dep. Microbiologia",
  },
  {
    _id: "63f5e84f21345464d3b92ac6",
    title:
      "Curso de suporte básico de vida com desfibrilhação automática externa (SBV-DAE)",
    content:
      "Realizou-se no dia 15 de Fevereiro de 2023, com participação de 7 estudantes recém licenciadas em Medicina pela Faculdade de Medicina e docentes da mesma unidade Academica o Curso de Suporte Básico de Vida com Desfibrilhação Automática Externa (SBV-DAE) da Alte Safety!  O certificado do curso foi emitido pela Emergency Care & Safety Institute (ECSI) da qual a Alte Safety é Centro de Formação Autorizado. Agradecemos ao Dr. Almirindo dos Santos da Alte Safety pela formação que foi ministrada com muita qualidade e profissionalismo. O curso foi organizado pela Professora Doutora Maria Alexandra Rodrigues e pelo Doutor César Palha Sousa",
    department: "Dep. Ciências Morfológicas",
  },
  {
    _id: "63f6231be5386fb3eefb1e2e",
    title:
      "Iniciou a 18ª Coorte do curso de Mestrado em Saúde Publica na Faculdade de Medicina na sua edição de 2023-2024.",
    content:
      "No dia 20 de Fevereiro de 2023, realizou.se a cerimónia de abertura do curso de Mestrado em Saúde Pública na Faculdade de Medicina da Universidade Eduardo Mondlane. Fazem parte desta coorte, 34 estudantes de várias áreas de saúde e afins.",
    department: "Dep. Saúde da Comunidade",
  },
  {
    _id: "640b95e63d4b2bc85152cad5",
    title:
      "Mestranda Alda Varela defende com sucesso o Grau de Mestre em Saúde Pública na Faculdade de Medicina.",
    content:
      'Alda Maria Horácio Moiane Varela  defendeu hoje dia 10 de Março de 2023, a dissertação com título "Factores relacionados com o consumo de bebidas alcoólicas pelos adolescentes da Escola Secundária Eduardo Mondlane-Xitlangu na Cidade de Maputo".  ',
    department: "Dep. Saúde da Comunidade",
  },
  {
    _id: "640b9ff7a13c5398244f849f",
    title: "Finalizado com sucesso o 1º Curso de Anatomia Humana",
    content:
      "Terminou no dia 10 de Março de 2023 o 1º Curso de Anatomia Geral, com participação de 33 formandos de Universidades e Institutos das áreas de saúde da Cidade de Maputo e teve como facilitador o Prof. Doutor Mahomed Dadá.",
    department: "Dep. Ciências Morfológicas",
  },
  {
    _id: "64b99a7ca17e99c5b8da1b6d",
    title:
      "Professor Doutor Jahit Sacarlal, foi reeleito para Comitê Executivo  da Rede  CODEM-LP.",
    content:
      "O Professor Doutor Jahit Sacarlal, em nome da Faculdade de Medicina da UEM,  foi reeleito pela terceira vez, no dia 14 de Julho de 07, em Rio de Janeiro, capital de Brasil, membro do Comitê Executivo  da  Rede de Cooperação das Escolas Médicas de Língua Portuguesa (CODEM-LP), por um mandato de dois anos ( 2023-2025).",
    department: "Direcção da Faculdade de Medicina",

  },
  {
    _id: "64b9a392a255068717fe7946",
    title: "Abordagem da Biologia Molecular na Medicina de precisão.",
    content:
      "A Faculdade de Medicina teve o privilégio de contar no dia 20 de Julho de 2023, das Profs. Elsa Maria Ribeiro Bronze da Rocha ( Prof. Assistente do laboratório de Bioquímica, Departamento de Ciências Biológicas, Faculdade de Farmácia da Universidade de Porto) e Alexandra Moreira (Principal Investigadora da Universidade de Porto e professora na Escola de Medicina e Ciências Biomédicas – ICBAS), na palestra das 5ªs ferias Médicas da FAMED com tema “Abordagem da Biologia Molecular na Medicina de precisão”",
    department: "Direcção da Faculdade de Medicina",
  },
  {
    _id: "64c289fa0d12ccf310a84398",
    title:
      "Samanta Zacarias Djaló defendeu a dissertação para Mestre em Epidemiologia de Campo e Laboratorial na FAMED",
    content:
      "Samanta Zacarias Djaló, estudante de Mestrado em Epidemiologia de Campo e Laboratorial, defendeu com muito sucesso hoje dia 27 de Julho de 2023",
    department: "Dep. Microbiologia",
  },
  {
    _id: "64c416dda255068717fe7ad7",
    title:
      "Inácio da Costa defendeu a dissertação para Mestre em Epidemiologia de Campo e Laboratorial na FAMED.",
    content:
      "Mais um estudante de Mestrado em Epidemiologia de Campo e Laboratorial, defendeu com muito sucesso a sua dissertação.",
    department: "Dep. Microbiologia",
  },
  {
    _id: "64d8a22ea17e99c5b8da1f8f",
    title: "1º Curso de Simulação para extracção de corpos estranhos do nariz",
    content:
      "Decorreu no dia 4 de Agosto de 2023, no Centro de Simulação da Faculdade de Medicina, o 1º Curso de Simulação para extracção de corpos estranhos do nariz,  destinado a estudantes do Ciclo Clinico da Faculdade de Medicina, dirigido pelo Prof Doutor Mahomed Dadá.",
    department: "Dep. Ciências Morfológicas",
  },
  {
    _id: "64db58450d12ccf310a847a7",
    title: "2º Curso de Simulação para extracção de corpos estranhos do nariz",
    content:
      "Parabéns aos estudantes da Faculdade de Medicina que participaram com sucesso o curso de simulação para extracção de corpos estranhos do nariz.",
    department: "Dep. Ciências Morfológicas",
  },
  {
    _id: "64e8a374c45b6e7f2f0fa962",
    title: "Bolsa de estudo para pós-doutoramento",
    content:
      'O Programa de Pós-Graduação em Saúde Coletiva do Departamento de Medicina Preventiva da Universidade Federal de São Paulo abriu processo seletivo para bolsa de pós-doutorado financiada pela FAPESP (Fundação de Amparo à Pesquisa do Estado de São Paulo) e Aliança Global para Doenças Crônicas (GACD) para o desenvolvimento do projeto intitulado "Reduzindo o consumo de álcool entre adolescentes por meio de uma intervenção multicomponente baseada na comunidade: uma abordagem de pesquisa de implementação", coordenado pela Profa. Dra. Zila Sanchez.',
    department: "Direcção da Faculdade de Medicina",
  },
];