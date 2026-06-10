import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="ft">
      <div className="wrap ft-inner">
        <div>
          <Link className="brand" href="/">
            <Logo size={30} className="mark" />
            <span className="bt">
              FabricAI<small>by Passus</small>
            </span>
          </Link>
          <div className="copy">
            © 2026 Passus SpA · Santiago, Chile · fabricai.cl
          </div>
        </div>
        <nav>
          <Link href="/que-fabricamos">Qué fabricamos</Link>
          <Link href="/microapps">MicroApps</Link>
          <Link href="/cursos">Cursos</Link>
          <Link href="/diagnostico">Diagnóstico</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}
