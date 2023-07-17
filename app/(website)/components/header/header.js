"use client";

import "./header.css";

import ListItem from "../navbar/list-item";
import NextLink from "next/link";

import { CaretDownIcon } from "@radix-ui/react-icons";
import { Item, List, Root, Trigger, Content } from "@radix-ui/react-navigation-menu";
import { Separator } from "@radix-ui/react-separator";

export default function Header() {
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
                      <ListItem href="/">Plataforma de Ensino Online(VULA)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="/">Base de Dados (RedCap)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="/">Sistema Integrado de Gestão Académica (SIGA)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="/">Universidade Eduardo Mondlane (UEM)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="/">Direção do Registo Académico (UEM)</ListItem>
                      <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                      <ListItem href="/">Departamento de Admissão a Univerdade</ListItem>
                    </ul>
                  </div>
                </Content>
              </div>
            </Item>
            <Item>
              <NextLink className="H-NavigationMenuLink" href="/extension">Consultas de Bioestatística</NextLink>
            </Item>
          </List>
        </Root>
      </div>

      <div>Left</div>
    </header>
  );
}