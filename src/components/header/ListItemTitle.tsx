import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

interface ListItemTitleProps {
  title: string;
}

export const ListItemTitle: React.FC<ListItemTitleProps> = ({ title }) => {
  return (
    <li>
      <NavigationMenuLink className="flex items-center" asChild>
        <div className="my-2 rounded-md bg-primary px-4 py-3 text-white">
          <p className="text-16 font-medium leading-none">{title}</p>
        </div>
      </NavigationMenuLink>
    </li>
  );
};
ListItemTitle.displayName = "ListItemTitle";
