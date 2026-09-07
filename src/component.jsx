import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigationItems } from "./data.js";

export function Logo() {
  return (
    <div>
      <div className="text-lg font-bold tracking-[0.25em] text-white">
        SHADOW
      </div>
      <div className="text-[10px] font-mono tracking-[0.35em] text-neutral-500">
        ARMY
      </div>
    </div>
  );
}

export function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-neutral-800 bg-shadow-950 transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-neutral-800 px-5">
          <Logo />

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-2 text-neutral-400 hover:bg-shadow-800 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              end={item.path === "/"}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-shadow-800 text-white"
                    : "text-neutral-400 hover:bg-shadow-900 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-neutral-800 p-4">
          <p className="text-center text-[9px] font-mono tracking-[0.2em] text-neutral-600">
            MADE BY SAMARTH 🍁
          </p>
        </div>
      </aside>
    </>
  );
}

export function MobileMenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open navigation"
      className="rounded-lg border border-neutral-800 bg-shadow-900 p-2 text-neutral-300 hover:text-white lg:hidden"
    >
      <Menu size={20} />
    </button>
  );
}

export function PageShell({ children, title, subtitle, onMenu }) {
  return (
    <div className="min-h-screen bg-shadow-950 text-neutral-100 lg:pl-64">
      <div className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-0.5 border border-neutral-800 bg-shadow-950/90 px-1.5 py-3 text-[9px] font-mono font-bold text-neutral-500 backdrop-blur sm:flex">
        {"MADEBYSAMARTH".split("").map((char, index) => (
          <span key={`${char}-${index}`} className="leading-tight">
            {char}
          </span>
        ))}
        <span className="mt-1 text-xs">🍁</span>
      </div>

      <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-neutral-800 bg-shadow-950/90 px-4 backdrop-blur sm:px-6">
        <MobileMenuButton onClick={onMenu} />

        <div>
          <h1 className="text-base font-semibold sm:text-lg">{title}</h1>
          {subtitle && (
            <p className="text-xs text-neutral-500">{subtitle}</p>
          )}
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl p-4 sm:p-6">{children}</main>
    </div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border border-neutral-800 bg-shadow-900 ${className}`}
    >
      {children}
    </div>
  );
}

export function EmptyState({ title, message }) {
  return (
    <Card className="p-8 text-center">
      <h3 className="text-base font-semibold text-neutral-200">{title}</h3>
      <p className="mt-2 text-sm text-neutral-500">{message}</p>
    </Card>
  );
}
