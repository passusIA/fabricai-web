import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">
              Fabric<span className="text-violet-500">AI</span>
            </p>
            <p className="mt-0.5 text-xs text-zinc-500">by Passus</p>
            <p className="mt-3 text-sm text-zinc-400">
              Construimos agentes de IA para empresas que quieren automatizar
              procesos reales. Y enseñamos a hacerlo.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Navegación
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/servicios", label: "Servicios" },
                { href: "/cursos", label: "Cursos" },
                { href: "/proceso", label: "Proceso" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/contacto", label: "Contacto" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Contacto
            </p>
            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <a href="mailto:hola@fabricai.cl" className="hover:text-white transition-colors">
                hola@fabricai.cl
              </a>
              <a
                href="https://fabricai.cl"
                className="hover:text-white transition-colors"
              >
                fabricai.cl
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Fabric AI · by Passus · fabricai.cl
        </div>
      </div>
    </footer>
  );
}
