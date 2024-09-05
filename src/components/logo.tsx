import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  width?: number;
  height?: number;
  logo?: string;
  isLink?: boolean;
  linkDestination?: string;
}

export const Logo = ({
  className,
  width = 20,
  height = 50,
  logo = "/TRC-logo.png",
  isLink = true,
  linkDestination = "/",
  ...props
}: LogoProps) => {
  const logoImage = (
    <Image
      src={logo}
      alt="logo"
      width={width}
      height={height}
      style={{ height: height, width: width, borderRadius: "50%" }}
    />
  );

  return (
    <span className={cn("flex text-primary", className)} {...props}>
      {isLink ? (
        <Link prefetch={true} href={linkDestination}>
          {logoImage}
        </Link>
      ) : (
        logoImage
      )}
    </span>
  );
};
