"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "@/components/SearchBar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "All Jobs", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

type Props = {
  onSearch: (term: string) => void;
};

export default function Navbar({ onSearch }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full border-b shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Image
            src="/images/job-logo.png"
            alt="Prescripto Logo"
            width={42}
            height={42}
          />
          <span className="text-xl font-semibold text-[#0a0a0a]">Job</span>
        </div>


        <nav className="hidden md:flex gap-8 flex-1 justify-center">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`text-sm font-medium uppercase relative transition-all duration-200 ${isActive
                  ? "text-[#1f265c] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#3179A0]"
                  : "text-gray-700 hover:text-[#3179A0]"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>


        <div className="hidden md:flex items-center gap-6">
          <SearchBar onSearch={onSearch} />
          <Link href="/post-job" passHref>
            <button className="bg-[#3179A0] text-white text-sm px-6 py-2 rounded-full hover:bg-[##3179A0] transition">
              Post Job
            </button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} className="text-black" />
        </button>
      </div>


      <AnimatePresence>
        {menuOpen && (
          <>

            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />


            <motion.div
              className="fixed right-0 top-0 h-full w-3/4 sm:w-1/2 bg-white z-50 shadow-lg px-6 py-8 space-y-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-[#0a0a0a]">
                  Menu
                </span>
                <button onClick={() => setMenuOpen(false)} aria-label="Close">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {navItems.map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-base font-medium uppercase ${isActive ? "text-[#3179A0]" : "text-gray-700"
                        }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>

              <SearchBar onSearch={onSearch} />

              <Link href="/post-job" passHref>
                <button className="w-full bg-[#3179A0] text-white text-sm py-2 rounded-full hover:bg-[#1e5f80] transition">
                  Post Job
                </button>
              </Link>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
