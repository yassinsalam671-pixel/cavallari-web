import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiteLayout, WA_LINK } from "@/components/SiteLayout";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Cavallari Dario Impianti Idraulici Ghedi" },
      { name: "description", content: "Contatta Cavallari Dario Impianti Idraulici a Ghedi (BS). Telefono, WhatsApp, modulo di contatto e indirizzo." },
      { property: "og:title", content: "Contatti — Cavallari Dario" },
      { property: "og:description", content: "Idraulico a Ghedi (BS): chiamaci, scrivici su WhatsApp o invia un messaggio." },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: Contatti,
});

function Contatti() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", telefono: "", messaggio: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Ciao Dario, sono ${form.nome} (tel. ${form.telefono}).%0A${encodeURIComponent(form.messaggio)}`;
    window.open(`${WA_LINK}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Contattaci</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Hai bisogno di un idraulico a Ghedi o in provincia di Brescia? Scrivici, ti rispondiamo al più presto.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Inviaci un messaggio</h2>
            <p className="mt-1 text-sm text-muted-foreground">Compila il modulo: ti contatteremo tramite WhatsApp.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium" htmlFor="nome">Nome e cognome</label>
                <input
                  id="nome"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Mario Rossi"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="telefono">Telefono</label>
                <input
                  id="telefono"
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+39 ..."
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="messaggio">Messaggio</label>
                <textarea
                  id="messaggio"
                  required
                  rows={5}
                  value={form.messaggio}
                  onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Descrivi brevemente il problema o il lavoro da svolgere..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Invia tramite WhatsApp
              </button>
              {sent && (
                <p className="text-sm text-muted-foreground">
                  Si è aperta una nuova scheda WhatsApp con il tuo messaggio. Se non si è aperta, usa il pulsante verde qui sotto.
                </p>
              )}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground hover:opacity-90"
              >
                Apri WhatsApp direttamente
              </a>
            </form>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">Informazioni</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="font-semibold">Telefono / WhatsApp</p>
                  <a href="tel:+393355446891" className="text-muted-foreground hover:text-primary">+39 335 544 6891</a>
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
