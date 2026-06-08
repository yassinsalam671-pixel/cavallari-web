import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Flame, AlertTriangle, FileCheck, Droplets, Bath, ShowerHead, Thermometer, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SiteLayout, PHONE_LINK, PHONE_DISPLAY } from "@/components/SiteLayout";
import { Gallery } from "@/components/Gallery";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi — Cavallari Dario Impianti Idraulici" },
      { name: "description", content: "Impianti idraulici, manutenzione caldaie, riparazioni urgenti e preventivi gratuiti entro 48 ore a Ghedi e provincia di Brescia." },
      { property: "og:title", content: "I nostri servizi — Cavallari Dario" },
      { property: "og:description", content: "Tutti i servizi idraulici e termoidraulici a Ghedi (BS)." },
      { property: "og:url", content: "/servizi" },
    ],
    links: [{ rel: "canonical", href: "/servizi" }],
  }),
  component: Servizi,
});

const services = [
  { icon: Wrench, title: "Impianti idraulici", text: "Progettazione, installazione e ristrutturazione completa di impianti idraulici civili e per piccole attività. Lavori a regola d'arte con materiali certificati." },
  { icon: Flame, title: "Manutenzione caldaie", text: "Controlli periodici, pulizia, sostituzione componenti e bollino blu. Manteniamo la tua caldaia efficiente e a norma di legge." },
  { icon: AlertTriangle, title: "Riparazioni urgenti", text: "Perdite d'acqua, scarichi otturati, guasti improvvisi: interveniamo rapidamente per risolvere il problema in giornata." },
  { icon: FileCheck, title: "Preventivi gratuiti", text: "Sopralluogo gratuito e senza impegno. Ti forniamo un preventivo chiaro e dettagliato entro 48 ore." },
  { icon: Bath, title: "Ristrutturazione bagni", text: "Realizziamo bagni completi: dalla rimozione dei vecchi sanitari alla posa di nuovi rivestimenti e impianti." },
  { icon: Thermometer, title: "Riscaldamento", text: "Installazione e assistenza per impianti di riscaldamento, radiatori, valvole termostatiche e sistemi a pavimento." },
  { icon: Droplets, title: "Addolcitori e filtri", text: "Installazione di addolcitori, filtri e sistemi di trattamento acqua per proteggere impianti ed elettrodomestici." },
  { icon: ShowerHead, title: "Sanitari e rubinetterie", text: "Sostituzione di sanitari, miscelatori, rubinetterie e accessori per il bagno con marchi di qualità." },
];

function Servizi() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl">I nostri servizi</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Soluzioni idrauliche complete per la tua abitazione o attività a Ghedi e in tutta la provincia di Brescia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon size={24} />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Richiedi un preventivo gratuito</h2>
            <p className="text-primary-foreground/85">Chiamaci direttamente: risposta entro 48 ore.</p>
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
