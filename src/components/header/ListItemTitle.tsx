import React from "react";

import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

export const ListItemTitle = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, children }) => {
  return (
    <li>
      <NavigationMenuLink className="flex items-center" asChild>
        <div className="my-2 rounded-md bg-primary px-4 py-3 text-white">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
ListItemTitle.displayName = "ListItemTitle";
