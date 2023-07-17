"use client";

import "./navbar.css";
import logo from "@/public/logo.png";

import Image from "next/image";
import NextLink from "next/link";
import { Root, List, Item, Link, Trigger, Content } from "@radix-ui/react-navigation-menu";
import { CaretDownIcon, ComponentInstanceIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import ListItem from "./list-item";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(var(--card-rgb))" }} className="pl-28 pr-28 flex items-center justify-between relative">
      <Image
        alt="Famed logo"
        src={logo}
        width={208}
        className="pl-3 pt-3 pb-5 grow-0 cursor-pointer"
      />

      <div>
        <Root className="NavigationMenuRoot">
          <List className="NavigationMenuList">
            <Item>
              <NextLink className="NavigationMenuLink" href="/">Página Inicial</NextLink>
            </Item>
            <Item>
              <Trigger className="NavigationMenuTrigger">
                Ensino <CaretDownIcon className="CaretDown" aria-hidden />
              </Trigger>
              <div className="NavigationMenuContentWrapper">
                <Content className="NavigationMenuContent">
                  <div className="NavigationMenuContentBoundary">

                    <div>
                      <h3 className="NavigationMenuContentSectionHeader">
                        <ComponentInstanceIcon /> Cursos de Graduação:
                      </h3>
                      <Separator className="SeparatorRoot" />
                      <ul className="GridList one">
                        <li>
                          <Link asChild>
                            <a className="ListItemLink" href="/">
                              <div className="ListItemHeading">Curso de Licenciatura em Medicina</div>
                              <p className="ListItemText">
                                Tem como finalidade de habilitar profissionais de nível superior no ramo da Medicina Humana.
                              </p>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <Separator className="SeparatorRoot" />

                    <div>
                      <h3 className="NavigationMenuContentSectionHeader">
                        <ComponentInstanceIcon /> Cursos de Pós-Graduação:
                      </h3>
                      <Separator className="SeparatorRoot" />
                      <ul className="GridList two">
                        <li>
                          <Link asChild>
                            <a className="ListItemLink" href="/">
                              <div className="ListItemHeading">Mestrado em Saúde Pública Presencial (MSP)</div>
                              <p className="ListItemText">
                                Formação multidisciplinar, orientada para a solução de problemas de Saúde em Moçambique.
                              </p>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link asChild>
                            <a className="ListItemLink" href="/">
                              <div className="ListItemHeading">Mestrado em Saúde Pública à Distância (MSPD)</div>
                              <p className="ListItemText">
                                Formação multidisciplinar, orientada para a solução de problemas de Saúde em Moçambique.
                              </p>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link asChild>
                            <a className="ListItemLink" href="/">
                              <div className="ListItemHeading">Mestrado em Biociências (MBC)</div>
                              <p className="ListItemText">
                                Visa formar profissionais de nível superior qualificados, nos domínios das Biociências.
                              </p>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link asChild>
                            <a className="ListItemLink" href="/">
                              <div className="ListItemHeading">Mestrado em Epidemiologia de Campo e Laboratorial (MECL)</div>
                              <p className="ListItemText">
                                Formação em serviço, baseada nos Princípios Fundamentais da Epidemiologia.
                              </p>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link asChild>
                            <a className="ListItemLink" href="/">
                              <div className="ListItemHeading">Mestrado em Saúde Mental e Psico-intervenções (MSMPI)</div>
                              <p className="ListItemText">
                                Formação de profissionais com competências em pesquisa, avaliação e intervenção nas diferentes áreas da saúde mental.
                              </p>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link asChild>
                            <a className="ListItemLink" href="/">
                              <div className="ListItemHeading">Mestrado em Emergências Pediatrias e Neonatais (MEPN)</div>
                              <p className="ListItemText">
                                Formação de profissionais de saúde para providenciar cuidados de saúde, na área de pediatria e neonatologia.
                              </p>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link asChild>
                            <a className="ListItemLink" href="/">
                              <div className="ListItemHeading">Doutoramento em Biociências e Saúde Pública</div>
                              <p className="ListItemText">
                                Visa criar oportunidades para que o doutorando adquira conhecimentos e competências, nas áreas de Biociências e Saúde Pública.
                              </p>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <Separator className="SeparatorRoot" />

                    <div>
                      <h3 className="NavigationMenuContentSectionHeader">
                        <ComponentInstanceIcon /> Cursos de curta duração <DoubleArrowRightIcon />
                      </h3>
                    </div>


                  </div>
                </Content>
              </div>
            </Item>
            <Item>
              <Trigger className="NavigationMenuTrigger">
                Investigação <CaretDownIcon className="CaretDown" aria-hidden />
              </Trigger>
              <div className="NavigationMenuContentWrapper">
                <Content className="NavigationMenuContent">
                  <div className="NavigationMenuContentBoundary">
                    <ul className="RowList">
                      <ListItem href="/">Projectos de Pesquisa</ListItem>
                      <ListItem href="/">Publicações</ListItem>
                    </ul>
                  </div>
                </Content>
              </div>
            </Item>
            <Item>
              <NextLink className="NavigationMenuLink" href="/extension">Extensão</NextLink>
            </Item>
            <Item>
              <Trigger className="NavigationMenuTrigger">
                Submissão de Protocolos <CaretDownIcon className="CaretDown" aria-hidden />
              </Trigger>
              <div className="NavigationMenuContentWrapper">
                <Content className="NavigationMenuContent">
                  <div className="NavigationMenuContentBoundary">
                    <ul className="RowList">
                      <ListItem href="/">Iniciar Submissão de Protocolos</ListItem>
                      <ListItem href="/">Instruções de Submissão de Protocolos</ListItem>
                    </ul>
                  </div>
                </Content>
              </div>
            </Item>
            <Item>
              <NextLink className="NavigationMenuLink" href="/news">Notícias</NextLink>
            </Item>
          </List>
        </Root>
      </div>
    </div>
  );
}