export async function getHeaderLinks() {
  return [
    { 
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
      title: "Links úteis", 
      segment: "links-uteis",
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
      title: "Consultas de Bioestatística",
      segment: "consultas-de-bioestatistica"
    },
    {
      title: "Cursos de curta duração",
      segment: "cursos-de-curta-duracao"
    }
  ];
}