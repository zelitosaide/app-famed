"use client";

import NextLink from "next/link";

import { Item, List, Root, Trigger, Content } from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";

import ListItem from "../list-item/list-item";

export default function LeftHeader({ links }) {
  return (
    <Root className="H-NavigationMenuRoot">
      <List className="H-NavigationMenuList">
        {links.map(function(item) {
          return (
            <Item key={item.id}>
              {item.children ? (
                <>
                  <Trigger className="H-NavigationMenuTrigger">
                    {item.title} <CaretDownIcon className="H-CaretDown" aria-hidden />
                  </Trigger>
                </>
              ): (
                <NextLink className="H-NavigationMenuLink" href={`/${item.segment}`}>
                  {item.title}
                </NextLink>
              )}
            </Item>
          );
        })}

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
      </List>
    </Root>
  );
}