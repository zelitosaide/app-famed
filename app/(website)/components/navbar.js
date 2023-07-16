"use client";

import "./navbar.css";
import logo from "@/public/logo.png";

import Image from "next/image";
import { Root, List, Item, Trigger, Link, Content } from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <Root className="NavigationMenuRoot">
      <List className="NavigationMenuList">
        <Item>
          <Link className="NavigationMenuLink" href="/">Página Inicial</Link>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Ensino <CaretDownIcon aria-hidden />
          </Trigger>
          <div className="NavigationMenuContentWrapper">
            <Content className="NavigationMenuContent">
              <div className="NavigationMenuContentBoundary">
                <ul className="List two">
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
          <Trigger className="NavigationMenuTrigger">
            Investigação <CaretDownIcon aria-hidden />
          </Trigger>
          <div>

          </div>
        </Item>
        <Item>
          <Link className="NavigationMenuLink" href="/">Extensão</Link>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Submissão de Protocolos <CaretDownIcon aria-hidden />
          </Trigger>
          <div>

          </div>
        </Item>
        <Item>
          <Link className="NavigationMenuLink" href="/">Notícias</Link>
        </Item>
      </List>
    </Root>
  );
}