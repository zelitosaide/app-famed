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
          href: "",
        },
        { 
          title: "Base de Dados (RedCap)",
          href: "",
        },
        { 
          title: "Sistema Integrado de Gestão Académica (SIGA)",
          href: "",
        },
        { 
          title: "Universidade Eduardo Mondlane (UEM)",
          href: "",
        },
        { 
          title: "Direção do Registo Académico (UEM)",
          href: "",
        },
        { 
          title: "Departamento de Admissão a Univerdade",
          href: "",
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