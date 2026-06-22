import { Link } from "react-router-dom";
import { Star, Wrench, Flame, AlertTriangle, FileCheck, ShieldCheck, Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout, PHONE_LINK, PHONE_DISPLAY } from "@/components/SiteLayout";
import { Gallery } from "@/components/Gallery";
import heroImg from "@/assets/lavoro-tubi.jpg";
import { useEffect } from "react";

const reviews = [
  { name: "Marco B.", text: "Intervento rapido e professionale. Ha riparato la caldaia in poche ore. Consigliatissimo!" },
  { name: "Laura F.", text: "Dario è una persona seria e competente. Lavoro pulito e prezzo onesto." },
  { name: "Giuseppe T.", text: "Ho rifatto tutto l'impianto bagno con lui. Risultato impeccabile, super disponibile." },
];

export default function Home() {
  useEffect(() => {
    document.title = "Cavallari Dario Impianti Idraulici — Idraulico a Ghedi (BS)";
  }, []);
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
              riparazioni urgenti. Preventivi gratuiti entro 48 ore, interventi puntuali, prezzi trasparenti.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              >
                <Phone size={18} /> Chiama {PHONE_DISPLAY}
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
              <span className="flex items-center gap-2"><Clock size={18} /> Preventivo entro 48 ore</span>
              <span className="flex items-center gap-2"><FileCheck size={18} /> Preventivi gratuiti</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden items-center justify-center md:flex"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
              <img src={heroImg} alt="Idraulico al lavoro su impianto in rame" width={1280} height={896} className="h-auto w-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 text-foreground backdrop-blur">
                <div className="flex items-center gap-1 text-accent-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                </div>
                <p className="mt-1 text-sm font-semibold">5,0 / 5,0 su Google</p>
                <p className="text-xs text-muted-foreground">Recensioni verificate dei clienti</p>
              </div>
            </div>
          </motion.div>
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
            { icon: FileCheck, title: "Preventivi gratuiti", text: "Sopralluogo senza impegno, risposta entro 48 ore." },
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

      <Gallery />

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
            <p className="text-primary-foreground/85">Chiamaci direttamente: rispondiamo rapidamente.</p>
          </div>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary hover:opacity-90"
          >
            <Phone size={18} /> Chiama {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
