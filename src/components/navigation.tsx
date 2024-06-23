"use client"
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="xs:flex sm:hidden py-[20px]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>HOME</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3 md:w-[200px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction" />
              <ListItem href="/docs/installation" title="Installation" />
              <ListItem href="/docs/primitives/typography" title="Typography" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>SHOP</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3 md:w-[200px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction" />
              <ListItem href="/docs/installation" title="Installation" />
              <ListItem href="/docs/primitives/typography" title="Typography" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>BLOG</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3 md:w-[200px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction" />
              <ListItem href="/docs/installation" title="Installation" />
              <ListItem href="/docs/primitives/typography" title="Typography" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>PORTFOLIO</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3 md:w-[200px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction" />
              <ListItem href="/docs/installation" title="Installation" />
              <ListItem href="/docs/primitives/typography" title="Typography" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>PAGE</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3 md:w-[200px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction" />
              <ListItem href="/docs/installation" title="Installation" />
              <ListItem href="/docs/primitives/typography" title="Typography" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>CONTACT</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3 md:w-[200px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction" />
              <ListItem href="/docs/installation" title="Installation" />
              <ListItem href="/docs/primitives/typography" title="Typography" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>YOUR RECENTLY VIEWED</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3 md:w-[200px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction" />
              <ListItem href="/docs/installation" title="Installation" />
              <ListItem href="/docs/primitives/typography" title="Typography" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      
    </NavigationMenu>
    
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
