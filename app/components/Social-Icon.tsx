import Link from "next/link";
import Image from "next/image";

type SocialIconProps = {
  name: string;
  href: string;
};

export default function SocialIcon({ name, href }: SocialIconProps) {
  return (
    <Link href={href}>
      <Image
        src={`./assets/shared/desktop/icon-${name}.svg`}
        alt={`${name} icon`}
        width={24}
        height={24}
      />
    </Link>
  );
}
