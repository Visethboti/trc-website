import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ListItem } from "./ListItem";
import { ListItemTitle } from "./ListItemTitle";

export interface NavMenuProps {
  icon?: ImageMetadata;
  href?: string;
  label: string;
  children?: NavMenuProps[];
  isTitle?: boolean;
}

const NavMenu = ({
  navMenuItem,
  currentPath,
}: {
  navMenuItem: NavMenuProps[];
  currentPath: string;
}) => {
  const isActive = (item: NavMenuProps) => {
    if (currentPath === "/km/" || currentPath === "/en/") {
      return false;
    }
    if (currentPath === item.href) {
      return true;
    }
    if (item.children) {
      return item.children.some(
        (child) => currentPath === child.href && child.isTitle !== true,
      );
    }
    return false;
  };

  return (
    <div>
      <NavigationMenu className="relative z-10 hidden w-full flex-1 items-center justify-center lg:flex">
        <NavigationMenuList>
          {navMenuItem?.map((item) => (
            <NavigationMenuItem key={item.label}>
              {item.href ? (
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${isActive(item) ? "bg-background text-primary" : "bg-transparent text-white"}`}
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              ) : (
                <>
                  <NavigationMenuTrigger
                    className={`${isActive(item) ? "bg-background text-primary" : "bg-transparent text-white"}`}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[100px] p-2 md:w-[100px] md:grid-cols-1 lg:w-[250px]">
                      {item.children?.map((child) =>
                        child.isTitle ? (
                          <ListItemTitle
                            key={child.label}
                            title={child.label}
                          />
                        ) : (
                          <ListItem
                            key={child.label}
                            title={child.label}
                            href={child.href}
                            svgIcon={child.icon}
                          />
                        ),
                      )}
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavMenu;
