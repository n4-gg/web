import { FOOTER_NAV } from "@/data/footer-nav";
import { FOOTER_SOCIALS } from "@/data/footer-socials";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center" aria-label="Footer">
          {FOOTER_NAV.map((item, index) => (
            <div key={index} className="px-5 py-2">
              {item.ext ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={item.href}
                  className="text-base text-off-white duration-150 hover:text-white"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="text-base text-off-white duration-150 hover:text-white"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-4 flex items-center justify-center gap-8">
          <div className="flex justify-center space-x-6">
            {FOOTER_SOCIALS.map((item, index) => (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                href={item.href}
                className="text-off-white/80 duration-150 hover:text-off-white"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          <p className="text-center text-base text-off-white/80">
            &copy; {new Date().getFullYear()} n4.gg, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
