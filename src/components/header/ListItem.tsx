import React from "react";

import { cn } from "@/lib/utils";

import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { ReactSVG } from "react-svg";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  svgIcon?: ImageMetadata;
}

export const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, svgIcon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink className="flex items-center" asChild>
          <a
            ref={ref}
            className={cn(
              "ml-1 block select-none rounded-md px-4 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="flex w-full justify-between">
              <div className="pr-4 text-16 font-medium leading-tight">
                {title}
              </div>
              {svgIcon && (
                <ReactSVG
                  src={svgIcon.src}
                  className="size-5"
                  beforeInjection={(svg) => {
                    svg.classList.add("size-5");
                    const paths = svg.querySelectorAll("path");
                    paths.forEach((path) => {
                      path.setAttribute("fill", "#17347B");
                      path.setAttribute("stroke", "#17347B");
                    });
                  }}
                />
              )}
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
