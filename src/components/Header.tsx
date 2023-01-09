"use client";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { HEADER_NAV } from "@/data/header-nav";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">n4.gg</span>
      <Image width={28} height={28} src="/images/blue-logo.png" alt="Logo" />
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 px-6 py-4 backdrop-blur-md lg:px-8">
      <div className="container mx-auto">
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <Logo />
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {HEADER_NAV.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.ext ? "_blank" : undefined}
                rel={item.ext ? "noreferrer" : undefined}
                className="font-semibold text-off-white duration-100 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <a
              href="/login"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ring-1 ring-off-white/30 hover:ring-white/30"
            >
              Log in
            </a>
          </div>
        </nav>

        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-20 overflow-y-auto bg-glitch-pattern px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <Logo />
              </div>

              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-off-white">
                <div className="space-y-2 py-6">
                  {HEADER_NAV.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.ext ? "_blank" : undefined}
                      rel={item.ext ? "noreferrer" : undefined}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  );
}
