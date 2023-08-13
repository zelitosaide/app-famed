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
      segment: "ensino/curta-duracao"
    }
  ];
}

export async function getSocialNetworks() {
  return [
    {
      id: 1,
      name: "InstagramLogoIcon",
      href: "https://www.instagram.com/faculdademedicinauem/"
    },
    {
      id: 2,
      name: "LinkedInLogoIcon",
      href: "https://www.linkedin.com/in/faculdade-de-medicina-uem"
    },
    {
      id: 3,
      name: "TwitterLogoIcon",
      href: "https://twitter.com/FamedUEM"
    },
  ];
}

export async function getNavLinks() {
  return [
    { 
      id: 1,
      title: "Página Inicial",
      segment: "/",
    },
    {
      id: 2,
      title: "Ensino",
      segment: "ensino",
      children: [
        {
          id: 1,
          title: "CURSOS DE GRADUAÇÃO",
          segment: "graduacao",
          children: [
            { 
              id: 1,
              title: "Curso de Licenciatura em Medicina",
              description: "Tem como finalidade de habilitar profissionais de nível superior no ramo da Medicina Humana.",
              segment: "curso-de-licenciatura-em-medicina",
            },
          ]
        },
        {
          id: 2,
          title: "CURSOS DE MESTRADO",
          segment: "mestrado",
          children: [
            { 
              id: 1,
              title: "Mestrado em Saúde Pública Presencial (MSP)",
              description: "Formação multidisciplinar, orientada para a solução de problemas de Saúde em Moçambique.",
              segment: "mestrado-em-saude-publica-presencial-msp",
            },
            { 
              id: 2,
              title: "Mestrado em Saúde Pública à Distância (MSPD)",
              description: "Formação multidisciplinar, orientada para a solução de problemas de Saúde em Moçambique.",
              segment: "mestrado-em-saude-publica-a-distancia-mspd",
            },
            { 
              id: 3,
              title: "Mestrado em Biociências (MBC)",
              description: "Visa formar profissionais de nível superior qualificados, nos domínios das Biociências.",
              segment: "mestrado-em-biociencias-mbc",
            },
            { 
              id: 4,
              title: "Mestrado em Epidemiologia de Campo e Laboratorial (MECL)",
              description: "Formação em serviço, baseada nos Princípios Fundamentais da Epidemiologia.",
              segment: "mestrado-em-epidemiologia-de-campo-e-laboratorial-mecl",
            },
            { 
              id: 5,
              title: "Mestrado em Saúde Mental e Psico-intervenções (MSMPI)",
              description: "Formação de profissionais com competências em pesquisa, avaliação e intervenção nas diferentes áreas da saúde mental.",
              segment: "mestrado-em-saude-mental-e-psico-intervencoes-msmpi",
            },
            { 
              id: 6,
              title: "Mestrado em Emergências Pediatrias e Neonatais (MEPN)",
              description: "Formação de profissionais de saúde para providenciar cuidados de saúde, na área de pediatria e neonatologia.",
              segment: "mestrado-em-emergencias-pediatrias-e-neonatais-mepn",
            },
          ]
        },
        {
          id: 3,
          title: "CURSOS DE DOUTORAMENTO",
          segment: "doutoramento",
          children: [
            { 
              id: 1,
              title: "Doutoramento em Biociências e Saúde Pública",
              description: " Visa criar oportunidades para que o doutorando adquira conhecimentos e competências, nas áreas de Biociências e Saúde Pública.",
              segment: "doutoramento-em-biociencias-e-saude-publica",
            },
          ]
        },
        {
          id: 4,
          title: "CURSOS DE CURTA DURAÇÃO",
          segment: "curta-duracao"
        },
      ],
    },
    {
      id: 3,
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
      id: 4,
      title: "Extensão",
      segment: "extensao",
    },
    {
      id: 5,
      title: "Submissão de Protocolos",
      segment: "submissao-de-protocolos",
      children: [
        { 
          title: "Iniciar Submissão de Protocolos",
          href: "https://cibs.uem.mz/",
        },
        { 
          title: "Instruções de Submissão de Protocolos",
          segment: "instrucoes-de-submissao-de-protocolos",
        },
      ]
    },
    { 
      id: 6,
      title: "Notícias",
      segment: "noticias",
    },
  ];
}