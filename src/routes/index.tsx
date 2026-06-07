import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Wrench, Flame, AlertTriangle, FileCheck, ShieldCheck, Clock, MapPin } from "lucide-react";
import { SiteLayout, WA_LINK } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cavallari Dario Impianti Idraulici — Idraulico a Ghedi (BS)" },
      { name: "description", content: "Idraulico di fiducia a Ghedi e provincia di Brescia. Impianti idraulici, manutenzione caldaie, riparazioni urgenti e preventivi gratuiti." },
      { property: "og:title", content: "Cavallari Dario Impianti Idraulici — Ghedi (BS)" },
      { property: "og:description", content: "Idraulico professionista a Ghedi. Preventivi gratuiti, interventi rapidi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const reviews = [
  { name: "Marco B.", text: "Intervento rapido e professionale. Ha riparato la caldaia in poche ore. Consigliatissimo!" },
  { name: "Laura F.", text: "Dario è una persona seria e competente. Lavoro pulito e prezzo onesto." },
  { name: "Giuseppe T.", text: "Ho rifatto tutto l'impianto bagno con lui. Risultato impeccabile, super disponibile." },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
              <MapPin size={14} /> Ghedi · Brescia e provincia
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Il tuo idraulico di fiducia a Ghedi e dintorni
            </h1>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/90 md:text-lg">
              Oltre 15 anni di esperienza in impianti idraulici, manutenzione caldaie e
              riparazioni urgenti. Preventivi gratuiti, interventi puntuali, prezzi trasparenti.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M19.11 17.36c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
                </svg>
                Scrivici su WhatsApp
              </a>
              <Link
                to="/servizi"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/20"
              >
                Scopri i servizi
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-2"><ShieldCheck size={18} /> Tecnico certificato</span>
              <span className="flex items-center gap-2"><Clock size={18} /> Pronto intervento</span>
              <span className="flex items-center gap-2"><FileCheck size={18} /> Preventivi gratuiti</span>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
              <div className="flex items-center gap-1 text-accent-gold">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <p className="mt-3 text-2xl font-bold">5,0 / 5,0</p>
              <p className="text-sm text-primary-foreground/80">Valutazione media su Google</p>
              <p className="mt-4 text-sm text-primary-foreground/90">
                "Dario è un professionista serio, puntuale e onesto. Lo consigliamo a chiunque cerchi un idraulico di fiducia nella zona di Ghedi."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Cosa facciamo per te</h2>
          <p className="mt-2 text-muted-foreground">Soluzioni complete per la tua casa e attività.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Wrench, title: "Impianti idraulici", text: "Installazione e ristrutturazione completa di impianti civili." },
            { icon: Flame, title: "Manutenzione caldaie", text: "Controlli periodici, pulizia e messa a norma." },
            { icon: AlertTriangle, title: "Riparazioni urgenti", text: "Perdite, guasti e pronto intervento in giornata." },
            { icon: FileCheck, title: "Preventivi gratuiti", text: "Sopralluogo senza impegno e prezzi trasparenti." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-1 text-accent-gold">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={22} />)}
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Recensioni dei clienti</h2>
            <p className="mt-2 text-muted-foreground">Recensioni 5 stelle da chi si è affidato a noi su Google.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-1 text-accent-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
                <p className="mt-4 text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">Recensione Google</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Hai un problema idraulico?</h2>
            <p className="text-primary-foreground/85">Contattaci ora: rispondiamo rapidamente.</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground hover:opacity-90"
          >
            Scrivici su WhatsApp
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
