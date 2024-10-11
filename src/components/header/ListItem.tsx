import React from "react";

import { cn } from "@/lib/utils";

// import me from "@/asset/service-icons/Domain.svg";
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
              <div className="text-sm font-medium leading-tight">{title}</div>
              {svgIcon && (
                <ReactSVG
                  src={svgIcon.src}
                  className="size-5"
                  beforeInjection={(svg) => {
                    svg.classList.add("size-5");
                    // svg.classList.add("fill-primary");
                    const paths = svg.querySelectorAll("path");
                    if (paths) {
                      paths.forEach((path) => {
                        path.classList.add("stroke-primary");
                        // path.setAttribute("stroke", "red");
                      });
                    }
                  }}
                />
              )}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
