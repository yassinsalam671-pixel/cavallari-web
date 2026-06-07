import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiteLayout, PHONE_LINK, PHONE_DISPLAY } from "@/components/SiteLayout";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Cavallari Dario Impianti Idraulici Ghedi" },
      { name: "description", content: "Contatta Cavallari Dario Impianti Idraulici a Ghedi (BS). Telefono, email e indirizzo. Preventivi entro 48 ore." },
      { property: "og:title", content: "Contatti — Cavallari Dario" },
      { property: "og:description", content: "Idraulico a Ghedi (BS): chiamaci direttamente per un preventivo entro 48 ore." },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: Contatti,
});

function Contatti() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Contattaci</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Hai bisogno di un idraulico a Ghedi o in provincia di Brescia? Chiamaci direttamente: rispondiamo subito.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground shadow-sm">
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Chiamaci direttamente e ottieni un preventivo entro 48 ore
              </h2>
              <p className="mt-3 text-primary-foreground/90">
                Parla con Dario: sopralluogo gratuito, preventivo chiaro e dettagliato entro 48 ore dalla chiamata. Nessun impegno.
              </p>
              <a
                href={PHONE_LINK}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-background px-5 py-4 text-base font-semibold text-primary hover:opacity-90"
              >
                <Phone size={20} /> {PHONE_DISPLAY}
              </a>
              <p className="mt-4 text-center text-sm text-primary-foreground/80">
                Lun–Ven: 8:00 – 19:00 · Sab: su appuntamento
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Perché chiamare?</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>· Risposta immediata, senza moduli o attese</li>
                <li>· Preventivo gratuito entro 48 ore</li>
                <li>· Sopralluogo a Ghedi e provincia di Brescia</li>
                <li>· Pronto intervento per urgenze</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">Informazioni</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="font-semibold">Telefono</p>
                  <a href={PHONE_LINK} className="text-muted-foreground hover:text-primary">{PHONE_DISPLAY}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@cavallaridario.it" className="text-muted-foreground hover:text-primary">info@cavallaridario.it</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="font-semibold">Indirizzo</p>
                  <p className="text-muted-foreground">Ghedi, 25016 Brescia (BS)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="font-semibold">Orari</p>
                  <p className="text-muted-foreground">Lun–Ven: 8:00 – 19:00 · Sab: su appuntamento</p>
                  <p className="font-medium text-primary">Pronto intervento 24/7</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Mappa Ghedi, Brescia"
                src="https://www.google.com/maps?q=Ghedi%2C%20Brescia%2C%20Italia&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
