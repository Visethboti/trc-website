import { cn } from "@/lib/utils";

const CONFIG = {
  heading: {
    tag: "h1",
    tw: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-text",
  },
  subheading: {
    tag: "h2",
    tw: "scroll-m-20 text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-text",
  },
  smallheading: {
    tag: "h2",
    tw: "scroll-m-20 text-lg lg:text-xl font-bold tracking-tight text-text",
  },
  title: {
    tag: "h3",
    tw: "scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-text",
  },
  mediumtitle: {
    tag: "h3",
    tw: "scroll-m-20 text-base lg:text-lg font-medium tracking-tight text-text",
  },
  smalltitle: {
    tag: "h4",
    tw: "scroll-m-20 text-16 font-medium tracking-tight text-text",
  },
  large: {
    tag: "p",
    tw: "leading-7 text-4xl lg:text-6xl text-text",
  },
  medium: {
    tag: "p",
    tw: "leading-7 text-xl lg:text-2xl xl:text-4xl text-text",
  },
  paragraph: {
    tag: "p",
    tw: "leading-7 text-base lg:text-lg [&:not(:first-child)]:mt-6 text-text",
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
