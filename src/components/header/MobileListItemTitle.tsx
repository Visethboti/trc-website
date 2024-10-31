interface ListItemTitleProps {
  title: string;
}

export const MobileListItemTitle: React.FC<ListItemTitleProps> = ({
  title,
}) => {
  return (
    <li className="items-center">
      <div className="my-2 rounded-md bg-primary px-4 py-3 text-white">
        <p className="text-16 font-medium leading-none">{title}</p>
      </div>
    </li>
  );
};
MobileListItemTitle.displayName = "ListItemTitle";
