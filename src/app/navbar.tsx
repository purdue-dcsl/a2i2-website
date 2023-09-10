'use client';

import { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle'
import { Noto_Sans } from 'next/font/google'
import { useTheme } from "./ThemeContext";
import "./globals.css"

const font = Noto_Sans({ weight: ['800'], subsets: ['cyrillic'] })

export default function Navbar() {
  const { mode, toggleMode } = useTheme();

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [mode]);

  return (
    <Disclosure as="nav" className="navbar">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className={font.className}>
                    <a href="">
                      <p className="text-4xl hover:scale-110">A2I2</p>
                    </a>
                  </div>
                  <div className="absolute right-1">
                    <DarkModeToggle
                        mode={mode as 'dark' | 'light'}
                        dark=""
                        light=""
                        size="sm"
                        inactiveTrackColor="#e2e8f0"
                        inactiveTrackColorOnHover="#f8fafc"
                        inactiveTrackColorOnActive="#cbd5e1"
                        activeTrackColor="#334155"
                        activeTrackColorOnHover="#1e293b"
                        activeTrackColorOnActive="#0f172a"
                        inactiveThumbColor="#1e293b"
                        activeThumbColor="#e2e8f0"
                        onChange={(mode) => {
                        toggleMode(mode);
                        }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}