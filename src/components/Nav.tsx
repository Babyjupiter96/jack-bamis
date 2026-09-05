"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "https://babyjupiter96.github.io/jack-training/", label: "Coaching" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-nav">
      <div className="wrap site-nav__row">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          {site.name.split(" ")[0]} <span>&middot;</span>{" "}
          {site.name.split(" ").slice(1).join(" ")}
        </Link>

        <nav aria-label="Primary">
          <ul
            className={`site-nav__links${open ? " site-nav__links--open" : ""}`}
          >
            {links.map((l) => {
              const isExternal = l.href.startsWith("http");
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={!isExternal && isCurrent(l.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    {...(isExternal
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
