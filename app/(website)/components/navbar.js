"use client";

import "./navbar.css";
import logo from "@/public/logo.png";

import Image from "next/image";
import { Root, List, Item, Trigger, Link, Content } from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

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
              <Link className="NavigationMenuLink" href="/">Página Inicial</Link>
            </Item>
            <Item>
              <Trigger className="NavigationMenuTrigger">
                Ensino <CaretDownIcon className="CaretDown" aria-hidden />
              </Trigger>
              <div className="NavigationMenuContentWrapper">
                <Content className="NavigationMenuContent">
                  <div className="NavigationMenuContentBoundary">
                    <ul className="List">
                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Mestrado em Saúde Pública Presencial (MSP)</div>
                            <p className="ListItemText">
                              Formação multidisciplinar, orientada para a solução...
                            </p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Mestrado em Saúde Pública à Distância (MSPD)</div>
                            <p className="ListItemText">
                              Mestrado em Saúde Pública à Distância (MSPD), com os seguintes ramos...
                            </p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Mestrado em Biociências (MBC)</div>
                            <p className="ListItemText">
                              Visa formar profissionais de nível superior qualificados...
                            </p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Mestrado em Epidemiologia de Campo e Laboratorial (MECL)</div>
                            <p className="ListItemText">
                              Formação em serviço, baseada nos Princípios Fundamentais da...
                            </p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Mestrado em Saúde Mental e Psico-intervenções (MSMPI)</div>
                            <p className="ListItemText">
                              Formação de profissionais com competências em pesquisa, avaliação...
                            </p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Mestrado em Emergências Pediatrias e Neonatais (MEPN)</div>
                            <p className="ListItemText">
                              Formação de profissionais de saúde para providenciar cuidados...
                            </p>
                          </a>
                        </Link>
                      </li>
                    </ul>
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
                    <ul className="List">
                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Introduction</div>
                            <p className="ListItemText">Build high-quality, accessible design systems and web apps.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Getting started</div>
                            <p className="ListItemText">A quick tutorial to get you up and running with Radix Primitives.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Styling</div>
                            <p className="ListItemText">Unstyled and compatible with any styling solution.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Animation</div>
                            <p className="ListItemText">Use CSS keyframes or any animation library of your choice.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Accessibility</div>
                            <p className="ListItemText">Tested in a range of browsers and assistive technologies.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Releases</div>
                            <p className="ListItemText">Radix Primitives releases and their changelogs.</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Content>
              </div>
            </Item>
            <Item>
              <Link className="NavigationMenuLink" href="/">Extensão</Link>
            </Item>
            <Item>
              <Trigger className="NavigationMenuTrigger">
                Submissão de Protocolos <CaretDownIcon className="CaretDown" aria-hidden />
              </Trigger>
              <div className="NavigationMenuContentWrapper">
                <Content className="NavigationMenuContent">
                  <div className="NavigationMenuContentBoundary">
                    <ul className="List">
                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Introduction</div>
                            <p className="ListItemText">Build high-quality, accessible design systems and web apps.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Getting started</div>
                            <p className="ListItemText">A quick tutorial to get you up and running with Radix Primitives.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Styling</div>
                            <p className="ListItemText">Unstyled and compatible with any styling solution.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Animation</div>
                            <p className="ListItemText">Use CSS keyframes or any animation library of your choice.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Accessibility</div>
                            <p className="ListItemText">Tested in a range of browsers and assistive technologies.</p>
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link asChild>
                          <a className="ListItemLink" href="/">
                            <div className="ListItemHeading">Releases</div>
                            <p className="ListItemText">Radix Primitives releases and their changelogs.</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Content>
              </div>
            </Item>
            <Item>
              <Link className="NavigationMenuLink" href="/">Notícias</Link>
            </Item>
          </List>
        </Root>
      </div>
    </div>
  );
}