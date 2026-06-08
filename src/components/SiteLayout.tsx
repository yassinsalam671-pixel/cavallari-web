import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { type ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const PHONE_DISPLAY = "+39 335 544 6891";
export const PHONE_LINK = "tel:+393355446891";

const nav = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
            <span className="font-display text-lg font-bold text-primary">Cavallari Dario</span>
            <span className="text-xs text-muted-foreground">Impianti Idraulici · Ghedi (BS)</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                activeProps={{ className: "bg-accent text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={PHONE_LINK}
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
          </nav>
          <button
            className="rounded-md border border-border p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-accent"
                  activeProps={{ className: "bg-accent text-primary" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={PHONE_LINK}
                className="my-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-base font-bold text-primary">Cavallari Dario</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Impianti Idraulici · Manutenzione e installazione caldaie a Ghedi e provincia di Brescia.
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-semibold">Contatti</h4>
            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              <Phone size={14} /> {PHONE_DISPLAY}
            </p>
            <p className="mt-1 flex items-center gap-2 text-muted-foreground">
              <MapPin size={14} /> Ghedi, Brescia (BS)
            </p>
            <p className="mt-1 flex items-center gap-2 text-muted-foreground">
              <Mail size={14} /> info@cavallaridario.it
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-semibold">Orari</h4>
            <p className="mt-2 text-muted-foreground">Lun–Ven: 8:00 – 19:00</p>
            <p className="text-muted-foreground">Sab: su appuntamento</p>
            <p className="mt-2 font-medium text-primary">Pronto intervento 24/7</p>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cavallari Dario Impianti Idraulici · P.IVA · Tutti i diritti riservati
        </div>
      </footer>

      <a
        href={PHONE_LINK}
        aria-label="Chiamaci ora"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <Phone size={18} /> Chiamaci ora
      </a>
    </div>
  );
}
