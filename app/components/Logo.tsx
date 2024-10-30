import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  href: string;
};

export default function Logo({ href }: LogoProps) {
  return (
    <Link href={href} className="w-fit">
      <Image
        src={"./assets/shared/desktop/logo.svg"}
        alt="audiophile logo"
        width={143}
        height={25}
      />
    </Link>
  );
}
