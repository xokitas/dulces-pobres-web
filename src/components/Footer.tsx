import { MessageCircle, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER, SOCIAL_LINKS, UBICACION } from "@/lib/config";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="bg-negro px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <span className="font-display text-2xl text-harina">
          Dulces
          <span className="ml-2 text-lg italic text-rosa">de Pobre</span>
        </span>

        <p className="max-w-md text-sm leading-relaxed text-harina/60">
          Hacemos dulces con las manos, para que te los comas con el
          corazón.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-harina/15 text-harina/70 transition-colors hover:border-rosa hover:text-rosa"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-harina/15 text-harina/70 transition-colors hover:border-rosa hover:text-rosa"
          >
            <InstagramIcon />
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-harina/15 text-harina/70 transition-colors hover:border-rosa hover:text-rosa"
          >
            <FacebookIcon />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-harina/40">
          <MapPin className="h-3.5 w-3.5" />
          {UBICACION}
        </div>

        <div className="mt-6 w-full border-t border-harina/10 pt-6 text-xs text-harina/30">
          © {new Date().getFullYear()} Dulces de Pobre. Hecho con cariño.
        </div>
      </div>
    </footer>
  );
}