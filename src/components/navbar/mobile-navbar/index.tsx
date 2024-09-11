import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavItem } from "./nav-item";
import { AboutMobile, LawAndRegulartionMobile, MediaMobile, ResourceMobile } from "./mobile-item";

export function MobileNavBar() {
  return (
    <ul className="h-[calc(100vh-4rem)] overflow-auto px-0">
      <Accordion type="single" collapsible className="border-0">
        <AccordionItem value="law_and_regulation" className="rounded border-0 data-[state=open]:bg-accent">
          <AccordionTrigger className="rounded-md bg-transparent text-black px-4 py-2 text-sm font-medium hover:bg-accent hover:no-underline md:text-base">
            Law and Regulation
          </AccordionTrigger>
          <AccordionContent className="border-t bg-transparent text-black px-4 py-2">
            <LawAndRegulartionMobile />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="media" className="rounded border-0 data-[state=open]:bg-accent/50">
          <AccordionTrigger className="rounded-md bg-transparent text-black px-4 py-2 text-sm font-medium hover:bg-accent hover:no-underline md:text-base">
            Media
          </AccordionTrigger>
          <AccordionContent className="border-t bg-transparent text-black px-4 py-2">
            <MediaMobile />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="resource" className="rounded border-0 data-[state=open]:bg-accent/50">
          <AccordionTrigger className="rounded-md bg-transparent text-black px-4 py-2 text-sm font-medium hover:bg-accent hover:no-underline md:text-base">
            Resource
          </AccordionTrigger>
          <AccordionContent className="border-t bg-transparent text-black px-4 py-2">
            <ResourceMobile />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="about" className="rounded border-0 data-[state=open]:bg-accent/50">
          <AccordionTrigger className="rounded-md bg-transparent text-black px-4 py-2 text-sm font-medium hover:bg-accent hover:no-underline md:text-base">
            About
          </AccordionTrigger>
          <AccordionContent className="border-t bg-transparent text-black px-4 py-2">
            <AboutMobile />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <NavItem href="/admission" className="text-black">Contact</NavItem>
    </ul>
  );
}
