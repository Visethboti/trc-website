import { cn } from "@/lib/utils";

const CONFIG = {
  heading: {
    tag: "h1",
    tw: "scroll-m-20 text-4xl font-bold  lg:text-5xl text-text tracking-wide font-khmerMEF2",
  },
  subheading: {
    tag: "h2",
    tw: "scroll-m-20 text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide text-text leading-relaxed font-khmerMEF2",
  },
  smallheading: {
    tag: "h2",
    tw: "scroll-m-20 text-lg lg:text-xl font-bold tracking-wide text-text font-khmerMEF2",
  },
  title: {
    tag: "h3",
    tw: "scroll-m-20 text-lg lg:text-xl font-bold tracking-normal text-text leading-relaxed",
  },
  mediumtitle: {
    tag: "h3",
    tw: "scroll-m-20 text-base lg:text-lg font-bold tracking-normal text-text",
  },
  smalltitle: {
    tag: "h4",
    tw: "leading-6 scroll-m-20 text-16 font-bold tracking-normal text-text",
  },
  large: {
    tag: "p",
    tw: "leading-7 text-4xl lg:text-6xl text-text",
  },
  medium: {
    tag: "p",
    tw: "text-xl lg:text-2xl xl:text-4xl text-text",
  },
  paragraph: {
    tag: "p",
    tw: "leading-7 text-base lg:text-lg [&:not(:first-child)]:mt-6 text-text ",
  },
  body: {
    tag: "p",
    tw: "leading-6 text-base text-text",
  },
  base: {
    tag: "p",
    tw: "leading-6 text-16 text-text",
  },
  small: {
    tag: "p",
    tw: "leading-6 text-xs text-text",
  },
} as const;

type TextVariant = keyof typeof CONFIG;
type Tag = (typeof CONFIG)[TextVariant]["tag"];

type Props = {
  variant?: TextVariant;
  children?: React.ReactNode;
  className?: string;
  itemProp?: string;
} & React.ComponentProps<Tag>;

export function TextElement({
  children,
  variant = "body",
  className,
  ...rest
}: Props) {
  const { tag: DynamicText, tw } = CONFIG[variant];

  return (
    <DynamicText {...rest} className={cn(tw, className)}>
      {children}
    </DynamicText>
  );
}

TextElement.displayName = "TextElement";

export default TextElement;
