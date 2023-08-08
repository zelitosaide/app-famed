"use client";

import "./header.css";

import ListItem from "../list-item/list-item";
import NextLink from "next/link";

import { CaretDownIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Item, List, Root, Trigger, Content } from "@radix-ui/react-navigation-menu";
import { Separator } from "@radix-ui/react-separator";

export const links = [
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
    href: "consultas-de-bioestatistica"
  },
  {
    title: "Cursos de curta duração",
    href: "cursos-de-curta-duracao"
  }
];

export default async function Header() {
  return (
    <header style={{ backgroundColor: "rgb(var(--accent-rgb))" }} className="pl-28 pr-28 flex justify-between">
      <div>
        <Root className="H-NavigationMenuRoot">
          <List className="H-NavigationMenuList">
            <Item>
              <Trigger className="H-NavigationMenuTrigger">
                Sobre a Faculdade <CaretDownIcon className="H-CaretDown" aria-hidden />
              </Trigger>
              <div className="H-NavigationMenuContentWrapper">
                <Content className="H-NavigationMenuContent">
                  <div className="H-NavigationMenuContentBoundary">
                    <ul className="H-RowList">
                      <ListItem href="/">Sobre a Faculdade de Medicina</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="/">Documentos e regumentos da Faculdade</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="/">Departamentos e Unidades</ListItem>
                    </ul>
                  </div>
                </Content>
              </div>
            </Item>
            <Item>
              <Trigger className="H-NavigationMenuTrigger">
                Links úteis <CaretDownIcon className="H-CaretDown" aria-hidden />
              </Trigger>
              <div className="H-NavigationMenuContentWrapper">
                <Content className="H-NavigationMenuContent">
                  <div className="H-NavigationMenuContentBoundary">
                    <ul className="H-RowList">
                      <ListItem href="https://vula.uem.mz/">Plataforma de Ensino Online (VULA)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="https://redcap.uem.mz/">Base de Dados (RedCap)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="https://estudante.siga.uem.mz/">Sistema Integrado de Gestão Académica (SIGA)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="https://www.uem.mz/">Universidade Eduardo Mondlane (UEM)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="https://www.dra.uem.mz/">Direção do Registo Académico (UEM)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="https://admissao.uem.mz/">Departamento de Admissão a Univerdade</ListItem>
                    </ul>
                  </div>
                </Content>
              </div>
            </Item>
            <Item>
              <NextLink className="H-NavigationMenuLink" href="/extension">Consultas de Bioestatística</NextLink>
            </Item>
            <Item>
              <NextLink className="H-NavigationMenuLink" href="/extension">Cursos de curta duração</NextLink>
            </Item>
          </List>
        </Root>
      </div>

      <div className="flex gap-2 items-center pr-3">
        <NextLink className="SocialNetwork p-1.5 rounded" target="_blank" href="https://www.instagram.com/faculdademedicinauem/">
          <InstagramLogoIcon />
        </NextLink>
        <NextLink className="SocialNetwork p-1.5 rounded" target="_blank" href="https://www.linkedin.com/in/faculdade-de-medicina-uem">
          <LinkedInLogoIcon />
        </NextLink>
        <NextLink className="SocialNetwork p-1.5 rounded" target="_blank" href="https://twitter.com/FamedUEM">
          <TwitterLogoIcon />
        </NextLink>
      </div>
    </header>
  );
}