import { FOOTER_NAV } from "@/data/footer-nav";
import { FOOTER_SOCIALS } from "@/data/footer-socials";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {FOOTER_SOCIALS.map((item, index) => (
            <a
              key={index}
              target="_blank"
              href={item.href}
              className="text-off-white/80 duration-150 hover:text-off-white"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        <nav className="mt-6 flex flex-wrap justify-center" aria-label="Footer">
          {FOOTER_NAV.map((item, index) => (
            <div key={index} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-off-white duration-150 hover:text-white"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <p className="mt-4 text-center text-base text-off-white/80">
          &copy; {new Date().getFullYear()} n4.gg, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
