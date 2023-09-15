"use client";

import "./accordion.css";

import { Root, Item, Header, Trigger, Content } from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

export default function Accordion({ links }) {
  return (
    <Root className="AccordionRoot" type="multiple">
      {links.map(function(link) {
        return (
          <Item className="AccordionItem" key={link._id} value={link._id}>
            <AccordionTrigger hasChildren={link.children.length > 0}>
              {link.title}
            </AccordionTrigger>
            {link.children.length > 0 && (
              link.children.map(function(child) {
                return (
                  <AccordionContent key={child.title}>
                    {child.title}
                  </AccordionContent>
                );
              })
            )}
          </Item>
        );
      })}
    </Root>
  );
}

const AccordionTrigger = forwardRef(({ children, className, hasChildren, ...props }, forwardedRef) => (
  <Header className="AccordionHeader">
    <Trigger
      className={"AccordionTrigger"}
      {...props}
      ref={forwardedRef}
    >
      {children}
      {hasChildren && (
        <ChevronRightIcon className="AccordionChevron" aria-hidden />
      )}
    </Trigger>
  </Header>
));

const AccordionContent = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Content
    className="AccordionContent"
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Content>
));