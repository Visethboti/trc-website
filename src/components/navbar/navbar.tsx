"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AboutItem, LawAndRegulartion, MediaItem, ResourceItem } from "./data";
import { Menu } from "lucide-react";
import { MobileNavBar } from "./mobile-navbar";
import { Logo } from "../logo";
import { ListItem } from "./list-item";

export function NavBar() {
  const navigationItems = [
    {
      label: "Law & Regulation",
      children: <LawAndRegulartion />,
    },
    {
      label: "Media",
      children: <MediaItem />,
    },
    {
      label: "Resources",
      children: <ResourceItem />,
    },
    {
      label: "About",
      children: <AboutItem />,
    },
  ];

  const NavigationMenus = () => (
    <NavigationMenu className="relative z-10 hidden w-full flex-1 items-center justify-center xl:flex">
      <NavigationMenuList>
        {navigationItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className="group focus:bg-primary focus:text-white disabled:pointer-events-auto group group hover:bg-primary text-white hover:text-white disabled:opacity-5 data-[active]:bg-primary data-[state=open]:bg-primary group group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none group bg-primary">
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] p-4 md:w-[100px] md:grid-cols-1 lg:w-[250px]">
                {item.children}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`group hover:bg-accent/50 text-white hover:text-black bg-primary ${navigationMenuTriggerStyle()}`}
            >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Service</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
              <ListItem
                href="/"
                title="Public"
                className="bg-primary w-16 h-10 items-center justify-center text-white"
              ></ListItem>
              <ListItem href="/" title="Domain .kh"></ListItem>
              <ListItem href="/" title="Internet Cafe"></ListItem>
              <ListItem href="/" title="Telecom Equipment Shop"></ListItem>
              <ListItem
                href="/"
                title="Operator"
                className="bg-primary w-20 h-10 items-center justify-center text-white"
              ></ListItem>
              <ListItem href="/" title="Operational License"></ListItem>
              <ListItem href="/" title="Spectrum License"></ListItem>
              <ListItem href="/" title="Telecom Numbering Permit"></ListItem>
              <ListItem href="/" title="Equipment TA Certificate"></ListItem>
              <ListItem
                href="/"
                title="Qualified Agent Certificatte"
              ></ListItem>
              <ListItem
                href="/"
                title="Equipment Importation & Distribution Permit "
              ></ListItem>
              <ListItem href="/" title="Tower Construction Permit"></ListItem>
              <ListItem
                href="/"
                title="Fiber Cable Construction Permit"
              ></ListItem>
              <ListItem
                href="/"
                title="Frequency Interference Complaint"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <header className="sticky top-0 z-40 border-b bg-background bg-primary py-4">
      <div className="container h-16 mx-auto px-10">
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center justify-center">
            <Logo width={50} />
            <div className="text-white px-2 text-sm">
              <p>និយ័តករទូរគមនាគមន៍កម្ពុជា</p>
              <p>Telecommunication Regulator of Cambodia </p>
            </div>
          </div>
          <div className=" items-center justify-center">
            <NavigationMenus />
          </div>
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu
                  className="ml-4 h-8 w-8 text-white xl:hidden"
                  aria-label="Open mobile menu"
                />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] md:w-[400px]">
                <nav className="mt-3 flex flex-col gap-4">
                  <MobileNavBar />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
