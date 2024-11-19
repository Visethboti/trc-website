import React from "react";

import { cn } from "@/lib/utils";

import { ReactSVG } from "react-svg";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  svgIcon?: ImageMetadata;
  href?: string;
}

export const MobileListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, svgIcon, href, ...props }, ref) => {
  const isDomainKH = title === "Domain .KH";
  const domainHref = "https://domain.gov.kh/";
  return (
    <li>
      <a
        href={isDomainKH ? domainHref : href}
        target={isDomainKH ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={cn(
          "ml-1 block select-none rounded-md px-2 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
        ref={ref}
      >
        <div className="flex w-full justify-between">
          <div className="pr-4 text-16 font-medium leading-tight">{title}</div>
          {svgIcon && (
            <ReactSVG
              src={svgIcon.src}
              className="size-5"
              beforeInjection={(svg) => {
                svg.classList.add("nav-svg-color");
                svg.classList.add("size-5");
              }}
            />
          )}
        </div>
        <p className="line-clamp-2 text-16 leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
MobileListItem.displayName = "ListItem";
