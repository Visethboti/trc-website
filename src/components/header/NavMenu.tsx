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
  href?: string;
  label: string;
  children?: NavMenuProps[];
  isTitle?: boolean;
}

const NavMenu: React.FC<{ navMenuItem: NavMenuProps[] }> = ({
  navMenuItem,
}) => {
  return (
    <div>
      <NavigationMenu className="relative z-10 hidden w-full flex-1 items-center justify-center lg:flex">
        <NavigationMenuList>
          {navMenuItem?.map((item) => (
            <NavigationMenuItem key={item.label}>
              {item.href ? (
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              ) : (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[100px] p-2 md:w-[100px] md:grid-cols-1 lg:w-[250px]">
                      {item.children?.map((child) =>
                        child.isTitle ? (
                          <ListItemTitle
                            key={child.label}
                            title={child.label}
                            href={child.href}
                          />
                        ) : (
                          <ListItem
                            key={child.label}
                            title={child.label}
                            href={child.href}
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
