import { DISCORD_INVITE, STORE_URL } from "./constants";

export const HEADER_NAV: Array<{
  name: string;
  href: string;
  ext?: boolean;
}> = [
  { name: "Features", href: "/#features" },
  { name: "FAQ", href: "/#faq" },
  { name: "Store", href: STORE_URL, ext: true },
  { name: "Discord", href: DISCORD_INVITE, ext: true },
];
