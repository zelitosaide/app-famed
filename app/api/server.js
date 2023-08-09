export async function getHeaderLinks() {
  return [
    { 
      id: 1,
      title: "Sobre a Faculdade",
      segment: "sobre-a-faculdade",
      children: [
        { 
          title: "Sobre a Faculdade de Medicina",
          segment: "sobre-a-faculdade-de-medicina",
        },
        { 
          title: "Documentos e regumentos da Faculdade",
          segment: "documentos-e-regumentos-da-faculdade",
        },
        { 
          title: "Departamentos e Unidades",
          segment: "departamentos-e-unidades",
        },
      ]
    },
    { 
      id: 2,
      title: "Links úteis",
      children: [
        { 
          title: "Plataforma de Ensino Online (VULA)", 
          href: "https://vula.uem.mz/",
        },
        { 
          title: "Base de Dados (RedCap)",
          href: "https://redcap.uem.mz/",
        },
        { 
          title: "Sistema Integrado de Gestão Académica (SIGA)",
          href: "https://estudante.siga.uem.mz/",
        },
        { 
          title: "Universidade Eduardo Mondlane (UEM)",
          href: "https://www.uem.mz/",
        },
        { 
          title: "Direção do Registo Académico (UEM)",
          href: "https://www.dra.uem.mz/",
        },
        { 
          title: "Departamento de Admissão a Univerdade",
          href: "https://admissao.uem.mz/",
        },
      ]
    },
    {
      id: 3,
      title: "Consultas de Bioestatística",
      segment: "consultas-de-bioestatistica"
    },
    {
      id: 4,
      title: "Cursos de curta duração",
      segment: "cursos-de-curta-duracao"
    }
  ];
}

export async function getNavLinks() {
  return [
    { 
      title: "Página Inicial",
      segment: "/",
    },
    {
      title: "Ensino",
      children: [
        { 
          title: "Curso de Licenciatura em Medicina",
          segment: "curso-de-licenciatura-em-medicina",
        },
        { 
          title: "Mestrado em Saúde Pública Presencial (MSP)",
          segment: "mestrado-em-saude-publica-presencial-msp",
        },
        { 
          title: "Mestrado em Saúde Pública à Distância (MSPD)",
          segment: "mestrado-em-saude-publica-a-distancia-mspd",
        },
        { 
          title: "Mestrado em Biociências (MBC)",
          segment: "mestrado-em-biociencias-mbc",
        },
        { 
          title: "Mestrado em Epidemiologia de Campo e Laboratorial (MECL)",
          segment: "mestrado-em-epidemiologia-de-campo-e-laboratorial-mecl",
        },
        { 
          title: "Mestrado em Saúde Mental e Psico-intervenções (MSMPI)",
          segment: "mestrado-em-saude-mental-e-psico-intervencoes-msmpi",
        },
        { 
          title: "Mestrado em Emergências Pediatrias e Neonatais (MEPN)",
          segment: "mestrado-em-emergencias-pediatrias-e-neonatais-mepn",
        },
        { 
          title: "Doutoramento em Biociências e Saúde Pública",
          segment: "doutoramento-em-biociencias-e-saude-publica",
        },
        { 
          title: "Cursos de curta duração",
          segment: "cursos-de-curta-duracao",
        },
      ]
    },
    {
      title: "Investigação",
      segment: "investigacao",
      children: [
        { 
          title: "Projectos de Pesquisa da Faculdade",
          segment: "projectos-de-pesquisa-da-faculdade",
        },
        { 
          title: "Publicações da Faculdade",
          segment: "publicacoes-da-faculdade",
        },
      ]
    },
    { 
      title: "Extensão",
      segment: "extensao",
    },
    {
      title: "Submissão de Protocolos",
      segment: "submissao-de-protocolos",
      children: [
        { 
          title: "Iniciar Submissão de Protocolos",
          segment: "iniciar-submissao-de-protocolos",
        },
        { 
          title: "Instruções de Submissão de Protocolos",
          segment: "instrucoes-de-submissao-de-protocolos",
        },
      ]
    },
    { 
      title: "Notícias",
      segment: "noticias",
    },
  ];
}