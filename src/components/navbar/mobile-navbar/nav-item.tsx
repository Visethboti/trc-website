import Link from "next/link";

import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavItem({ href, children, className }: NavItemProps) {
  return (
    <li
      className={cn(
        "rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent md:text-base",
        className
      )}
    >
      <SheetClose asChild>
        <Link href={href}>{children}</Link>
      </SheetClose>
    </li>
  );
}
