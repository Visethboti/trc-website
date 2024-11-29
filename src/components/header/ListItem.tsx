import React from "react";

import { cn } from "@/lib/utils";

import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { ReactSVG } from "react-svg";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  svgIcon?: ImageMetadata;
  href?: string;
}

export const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, svgIcon, href, ...props }, ref) => {
    const isDomainKH = title === "Domain .KH" || title === "ឈ្មោះដែនជាតិ";
    const domainHref = "https://domain.gov.kh/";
    return (
      <li>
        <NavigationMenuLink className="flex items-center" asChild>
          <a
            href={isDomainKH ? domainHref : href}
            target={isDomainKH ? "_blank" : undefined}
            rel="noopener noreferrer"
            ref={ref}
            className={cn(
              "ml-1 block select-none rounded-md px-4 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="flex w-full justify-between">
              <div className="max-w-[178px] text-wrap break-words pr-4 text-16 font-medium leading-tight">
                {title}
              </div>
              <div className="w-fit">
                {svgIcon && (
                  <ReactSVG
                    src={svgIcon.src}
                    className="size-5"
                    beforeInjection={(svg) => {
                      svg.classList.add("size-5");
                      const paths = svg.querySelectorAll("path");
                      paths.forEach((path) => {
                        path.classList.add("fill-primary");
                        path.classList.add("stroke-primary");
                      });
                    }}
                  />
                )}
              </div>
            </div>
            <p className="line-clamp-2 text-16 leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
