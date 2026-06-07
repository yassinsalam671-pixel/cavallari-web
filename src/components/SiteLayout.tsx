import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { type ReactNode, useState } from "react";

const WHATSAPP_NUMBER = "393355446891";
const PHONE_DISPLAY = "+39 335 544 6891";

export const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const nav = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
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
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-whatsapp px-3 py-2 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
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
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="my-2 inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-3 py-3 text-sm font-semibold text-whatsapp-foreground"
              >
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

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
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.36c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.66 0 1.87.49 3.7 1.42 5.32L5.33 26.67l5.51-1.44a10.6 10.6 0 005.18 1.32h.01c5.88 0 10.66-4.78 10.66-10.66 0-2.85-1.11-5.53-3.12-7.54a10.6 10.6 0 00-7.55-3.12z" />
        </svg>
      </a>
    </div>
  );
}
