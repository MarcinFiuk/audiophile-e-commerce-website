import Logo from "@/app/components/Logo";
import SocialIcon from "@/app/components/Social-Icon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="xl:pt-18.75 before:contents[''] before:bg-orange-dark before:w-25 relative m-auto grid max-w-wrapper grid-cols-1 justify-items-center gap-12 px-6 pb-10 pt-13 text-center text-white before:absolute before:left-1/2 before:top-0 before:h-1 before:-translate-x-1/2 md:grid-cols-2 md:justify-items-start md:gap-8 md:px-10 md:pb-11.5 md:pt-15 md:text-start md:before:left-10 md:before:translate-x-0 xl:gap-y-9 xl:px-0 xl:pb-12 xl:before:left-0">
        <Logo href="/" className="w-fit" />
        <nav className="text-custom-xs uppercase tracking-customWidest md:col-span-2 xl:col-span-1 xl:justify-self-end">
          <ul className="flex flex-col gap-4 md:flex-row md:gap-8.5">
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
        <p className="text-custom-s md:col-span-2 xl:col-span-1">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <p className="md:pt-12 xl:order-5 xl:pt-5">
          Copyright 2021. All Rights Reserved
        </p>

        <nav className="md:justify-self-end md:pt-12 xl:self-end xl:pt-0">
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
