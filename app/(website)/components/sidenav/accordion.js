"use client";

import { Root, Item, Header, Trigger } from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

export default function Accordion({ links }) {
  return (
    <Root className="AccordionRoot" type="multiple">
      {links.map(function(link) {
        return (
          <Item className="AccordionItem" key={link._id} value={link._id}>
            <AccordionTrigger>
              {link.title}
            </AccordionTrigger>
          </Item>
        );
      })}
    </Root>
  );
}

const AccordionTrigger = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Header className="AccordionHeader">
    <Trigger
      className={"AccordionTrigger"}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronRightIcon className="AccordionChevron" aria-hidden />
    </Trigger>
  </Header>
));