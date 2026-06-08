import { motion } from "framer-motion";
import bagno from "@/assets/lavoro-bagno.jpg";
import tubi from "@/assets/lavoro-tubi.jpg";
import caldaia from "@/assets/lavoro-caldaia.jpg";
import pavimento from "@/assets/lavoro-pavimento.jpg";
import doccia from "@/assets/lavoro-doccia.jpg";
import addolcitore from "@/assets/lavoro-addolcitore.jpg";
import riparazione from "@/assets/lavoro-riparazione.jpg";
import lavabo from "@/assets/lavoro-lavabo.jpg";

const photos = [
  { src: bagno, alt: "Ristrutturazione bagno con sanitari nuovi" },
  { src: tubi, alt: "Installazione tubazioni in rame" },
  { src: caldaia, alt: "Installazione e manutenzione caldaia" },
  { src: doccia, alt: "Box doccia moderno installato" },
  { src: pavimento, alt: "Impianto di riscaldamento a pavimento" },
  { src: lavabo, alt: "Doppio lavabo con miscelatori a parete" },
  { src: addolcitore, alt: "Addolcitore acqua installato" },
  { src: riparazione, alt: "Riparazione sifone lavello cucina" },
];

export function Gallery({ title = "I nostri lavori", subtitle = "Una selezione di installazioni e ristrutturazioni realizzate da Dario." }: { title?: string; subtitle?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {photos.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {p.alt}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
