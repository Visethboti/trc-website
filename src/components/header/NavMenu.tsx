import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

export function NavMenu() {
  return (
    <div className="relative z-10 hidden w-full flex-1 items-center justify-center gap-2 xl:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-center border-none focus:border-none"
          >
            Laws & Regulartion
            <ChevronDown className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex w-44 items-center justify-center pb-4 pt-4">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Laws</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Royal Decrees</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Sub Decrees</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Circulations</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Prakas</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Decisions</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Guidelines</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-center border-none focus:border-none"
          >
            Media
            <ChevronDown className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex w-40 items-center justify-center pb-4 pt-4">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>News Releases</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Activities</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Events</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-center border-none focus:border-none"
          >
            Resources
            <ChevronDown className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex w-56 items-center justify-center pb-4 pt-4">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Publications</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Telecom Statistics</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Active Operators</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Mobile Prefixes</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Common Codes</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Emergency Numbers</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Qualified Import Agents</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Tower Map</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-center border-none focus:border-none"
          >
            About
            <ChevronDown className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex w-56 items-center justify-center pb-4 pt-4">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Chairman Keynote</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Vision & Mission</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>About TRC</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>TRC Leader</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>TRC Structure</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-center border-none focus:border-none"
          >
            Contact
          </Button>
        </DropdownMenuTrigger>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-center border-none focus:border-none"
          >
            Service
            <ChevronDown className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex w-80 items-center justify-center">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span className="flex h-8 w-20 items-center justify-center rounded bg-primary text-white">
                Public
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Domain .KH</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Internet Cafe</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Telecom Equipment Shop</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="flex h-8 w-24 items-center justify-center rounded bg-primary text-white">
                Operator
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Operational License</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Spectrum License</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Telecom Numbering Permit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Equipment TA Certificate</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Qualified Agent Certification</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Equipment Importation & Distribution Permit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Tower Construction Permit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Fiber Cable Construction Permit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Frequency Interference Complaint</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
