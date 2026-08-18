import type { Testimonial } from "@/lib/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const inicial = testimonial.name.charAt(0);

  return (
<div className="flex h-full flex-col rounded-organico border border-harina/12 bg-harina/6 p-8 backdrop-blur-sm">      <p className="mt-4 flex-1 leading-relaxed text-harina/80">
        {testimonial.quote}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rosa/20 font-display text-sm text-harina">
          {inicial}
        </div>
        <span className="font-body text-sm font-medium text-harina">
          {testimonial.name}
        </span>
      </div>
    </div>
  );
}