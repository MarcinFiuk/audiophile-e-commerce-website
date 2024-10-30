import Logo from "@/app/components/Logo";
import SocialIcon from "@/app/components/Social-Icon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="m-auto grid max-w-wrapper grid-cols-1 justify-items-center gap-12 px-6 pb-10 pt-13 text-center text-white">
        <Logo href="/" />
        <nav className="text-custom-xs tracking-customWidest uppercase">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/headphones">Headphones</Link>
            </li>
            <li className="font-bold">
              <Link href="/speakers">Speakers</Link>
            </li>
            <li>
              <Link href="earphones">Earphones</Link>
            </li>
          </ul>
        </nav>
        <p className="text-custom-s">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>

        <nav>
          <ul className="flex flex-row gap-4">
            <li>
              <SocialIcon name="facebook" href="https://www.facebook.com/" />
            </li>
            <li>
              <SocialIcon name="X" href="https://www.x.com" />
            </li>
            <li>
              <SocialIcon name="instagram" href="https://www.instagram.com" />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
