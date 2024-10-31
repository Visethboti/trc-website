import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "../ui/separator";
import { MobileListItem } from "./MobileListItem";
import { MobileListItemTitle } from "./MobileListItemTitle";
import { Menu } from "lucide-react";

export interface NavMenuProps {
  href?: string;
  label: string;
  icon?: ImageMetadata;
  children?: NavMenuProps[];
  isTitle?: boolean;
}

const NavMenu: React.FC<{ navMenuItem: NavMenuProps[] }> = ({
  navMenuItem,
}) => {
  return (
    <Sheet>
      <SheetTrigger className="pl-4 lg:hidden">
        <Menu
          className="size-8 text-primary sm:text-white"
          aria-label="Open mobile menu"
        />
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Menu</SheetTitle>
          <SheetDescription>Mobile Navigation</SheetDescription>
        </SheetHeader>
        <ul className="h-[calc(100vh-4rem)] overflow-auto px-0 pb-2">
          {navMenuItem?.map((item, index) => (
            <li key={item.label}>
              {item.href ? (
                <a
                  className="block rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent md:text-base"
                  href={item.href}
                >
                  {item.label}
                </a>
              ) : (
                <Accordion type="single" collapsible className="border-0">
                  <AccordionItem
                    value={`item_${index}`}
                    className="rounded border-0 data-[state=open]:bg-accent/50"
                  >
                    <AccordionTrigger className="rounded-md bg-transparent p-2 text-sm font-medium hover:bg-accent hover:no-underline md:text-base">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="border-t bg-transparent p-2">
                      <ul>
                        {item.children?.map((child) =>
                          child?.isTitle ? (
                            <MobileListItemTitle
                              key={child.label}
                              title={child.label}
                            />
                          ) : (
                            <MobileListItem
                              key={child.label}
                              title={child.label}
                              href={child.href}
                              svgIcon={child.icon}
                            />
                          ),
                        )}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </li>
          ))}
          <Separator />
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
