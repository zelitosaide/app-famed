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
                  <div className="H-NavigationMenuContentWrapper">
                    <Content className="H-NavigationMenuContent">
                      <div className="H-NavigationMenuContentBoundary">
                        <ul className="H-RowList">
                          {item.children.map(function(child) {
                            const href = 
                              child.segment ? `/${item.segment}/${child.segment}` : child.href;

                            return (
                              <>
                                <ListItem href={href}>{child.title}</ListItem>
                                <Separator style={{ margin: "6px 0"}} className="SeparatorRoot" />
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </Content>
                  </div>
                </>
              ): (
                <NextLink className="H-NavigationMenuLink" href={`/${item.segment}`}>
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