import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  href: string;
  className?: string;
};

export default function Logo({ href, className }: LogoProps) {
  return (
    <Link href={href} className={cn({ className })}>
      <Image
        src={"./assets/shared/desktop/logo.svg"}
        alt="audiophile logo"
        width={143}
        height={25}
      />
    </Link>
  );
}
