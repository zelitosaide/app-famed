"use client";

import "./accordion.css";

import { Root, Item, Header, Trigger, Content } from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { forwardRef } from "react";

export default function Accordion({ links }) {
  console.log(links);

  return (
    <Root className="AccordionRoot" type="multiple">
      {links.map(function(link) {
        return (
          <Item className="AccordionItem" key={link._id} value={link._id}>
            <AccordionTrigger segment={link?.segment} hasChildren={link.children.length > 0}>
              {link.title}
            </AccordionTrigger>
            {link.children.length > 0 && (
              <AccordionContent>
                {
                  link.children.map(function(child) {
                    return (
                      <Link 
                        style={{ 
                          height: 45, 
                          display: "flex", 
                          alignItems: "center",
                          paddingLeft: 30
                        }} 
                        className="block hover:bg-[#1F8E23]" href={""} key={child.title}
                      >
                        {child.title}
                      </Link>
                    );
                  })
                }
              </AccordionContent>
            )}
          </Item>
        );
      })}
    </Root>
  );
}

const AccordionTrigger = forwardRef(({ children, className, segment, hasChildren, ...props }, forwardedRef) => (
  <Header className="AccordionHeader">
    {hasChildren ? (
      <Trigger
        className={"AccordionTrigger"}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronRightIcon className="AccordionChevron" aria-hidden />
      </Trigger>
    ) : (
      <Link
        className={"AccordionTrigger"}
        href={segment === "/" ? segment : "/" + segment}
      >
        {children}
      </Link>
    )}
  </Header>
));

const AccordionContent = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Content
    className="AccordionContent"
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Content>
));