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
>(({ className, title, children, svgIcon, href, ...props }) => {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "ml-1 block select-none rounded-md px-2 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="flex w-full justify-between">
          <div className="pr-4 text-sm font-medium leading-tight">{title}</div>
          {svgIcon && (
            <ReactSVG
              src={svgIcon.src}
              className="size-5"
              beforeInjection={(svg) => {
                svg.classList.add("size-5");
              }}
            />
          )}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
MobileListItem.displayName = "ListItem";
