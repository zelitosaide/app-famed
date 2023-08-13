"use client";

import NextLink from "next/link";

import { Root, List, Item, Link, Trigger, Content } from "@radix-ui/react-navigation-menu";
import { CaretDownIcon, ComponentInstanceIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import { Fragment } from "react";

import ListItem from "./list-item";

export default function Navbar({ links }) {
  return (
    <Root className="NavigationMenuRoot">
      <List className="NavigationMenuList">
        {links.map(function(item) {
          return (
            <Item key={item.id}>
              {item.children ? (
                <>
                  <Trigger className="NavigationMenuTrigger">
                    {item.title} <CaretDownIcon className="CaretDown" aria-hidden />
                  </Trigger>
                  <div className="NavigationMenuContentWrapper">
                    <Content className="NavigationMenuContent">
                      <div className="NavigationMenuContentBoundary">
                        {item.title === "Ensino" ? (
                          item.children.map(function(child, index) {
                            return (
                              <div key={child.id}>
                                {item.children.length - 1 === index ? (
                                  <Link asChild>
                                    <NextLink 
                                      className="NavigationMenuContentSectionHeader Link" 
                                      href={`/${item.segment}/${child.segment}`}
                                    >  
                                      <ComponentInstanceIcon /> {child.title} <DoubleArrowRightIcon />
                                    </NextLink>
                                  </Link>
                                ) : (
                                  <>
                                    <h3 className="NavigationMenuContentSectionHeader">
                                      <ComponentInstanceIcon /> {child.title}:
                                    </h3>

                                    <Separator className="SeparatorRoot" />

                                    {child.children.length > 2 ? (
                                      ""
                                    ) : (
                                      <ul className="GridList one">
                                        <li>
                                          <Link asChild>
                                            <a className="ListItemLink" href="/">
                                              <div className="ListItemHeading">{child.children[0].title}</div>
                                              <p className="ListItemText">
                                                {child.children[0].description}
                                              </p>
                                            </a>
                                          </Link>
                                        </li>
                                      </ul>
                                    )}
                                  </>
                                )}
                              </div>
                            );
                          })
                        ) : (
                          <ul className="RowList">
                            {item.children.map(function(child) {
                              const href = 
                                child.segment ? `/${item.segment}/${child.segment}` : child.href;

                              return (
                                <Fragment key={child.title}>
                                  <ListItem href={href}>{child.title}</ListItem>
                                  <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                                </Fragment>
                              );
                            })}
                          </ul> 
                        )}
                      </div>
                    </Content>
                  </div>
                </>
              ) : (
                <NextLink className="NavigationMenuLink" href={`/${item.segment}`}>
                  {item.title}
                </NextLink>
              )}
            </Item>
          );
        })}
      </List>
    </Root>
  );
}