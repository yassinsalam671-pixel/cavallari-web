import { Wrench, Flame, AlertTriangle, FileCheck, Droplets, Bath, ShowerHead, Thermometer, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { SiteLayout, PHONE_LINK, PHONE_DISPLAY } from "@/components/SiteLayout";
import { Gallery } from "@/components/Gallery";

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

export default function Servizi() {
  useEffect(() => {
    document.title = "Servizi — Cavallari Dario Impianti Idraulici";
  }, []);
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
          {services.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon size={24} />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Gallery title="Foto dei nostri interventi" subtitle="Esempi reali di impianti, sanitari e installazioni realizzate." />

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
