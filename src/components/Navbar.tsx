"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";
import Section from "@/components/style/Section";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-background dark:bg-background">
      <div className="flex justify-between items-center px-4 py-2 max-w-4xl mx-auto">
        {/* Mobile Navbar layout */}
        <div className="sm:hidden w-full flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold hover:text-accent">
            Pau Garcia
          </Link>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* PC Layout */}
        <div className="hidden sm:flex sm:items-center sm:justify-between w-full backdrop-blur-md">
          <Link href="/" className="text-lg font-semibold hover:text-accent">
            Pau Garcia
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/projects" className="hover:text-accent">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Contact Me
            </Link>
            <Link href="/about" className="hover:text-accent">
              More about me
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <Section>
          <div className="sm:hidden w-full border rounded" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/projects" className="block mx-4 hover:text-accent">
                Projects
              </Link>
              <Separator className="px-16" />
              <Link href="/blog" className="block mx-4 hover:text-accent">
                Blog
              </Link>
              <Separator className="px-16" />
              <Link href="/contact" className="block mx-4 hover:text-accent">
                Contact Me
              </Link>
              <Separator className="px-16" />
              <Link href="/about" className="block mx-4 hover:text-accent">
                More about me
              </Link>
            </div>
          </div>
        </Section>
      )}
    </nav>
  );
};
