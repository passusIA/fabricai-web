"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/que-fabricamos", label: "Qué fabricamos" },
  { href: "/microapps", label: "MicroApps" },
  { href: "/como-trabajamos", label: "Cómo trabajamos" },
  { href: "/la-fabrica", label: "La Fábrica" },
  { href: "/productos", label: "Productos" },
  { href: "/cursos", label: "Cursos" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Logo size={34} className="mark" />
          <span className="bt">
            FabricAI<small>by Passus</small>
          </span>
        </Link>

        {/* Navegación de escritorio */}
        <nav className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="btn btn-grad"
            style={{ padding: "10px 20px" }}
          >
            Contacto
          </Link>
        </nav>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Panel móvil */}
      <div className={`nav-mobile${open ? " open" : ""}`}>
        <div className="wrap">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={pathname === l.href ? "active" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="btn btn-grad cta"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
