"use client";

import { CUSTOMERS } from "@/constants";
import { Text } from "../ui/text";

export function Companies() {
  // Duplicate for smooth infinite scroll
  const marqueeItems = [...CUSTOMERS, ...CUSTOMERS];

  return (
    <section className="py-12 border-y border-border bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <Text variant="muted" className="uppercase font-semibold">
          Empresas que confían en nosotros
        </Text>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden group">
        <div className="flex w-fit animate-marquee items-center group-hover:[animation-play-state:paused]">
          {marqueeItems.map((customer, idx) => (
            <div
              key={`${customer.name}-${idx}`}
              className="mx-6 sm:mx-10 flex flex-col items-center justify-center gap-4 w-40 sm:w-48 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={customer.name}
            >
              <div className="h-16 flex items-center justify-center w-full">
                {customer.logo_url ? (
                  <img
                    src={customer.logo_url}
                    alt={customer.name}
                    className={`max-h-full max-w-full object-contain ${customer.invert ? 'invert' : ''}`}
                    onError={(e) => {
                      // Fallback if image fails to load (like broken links or negative images)
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('bg-primary/10', 'rounded-lg');
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : (
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shadow-sm">
                    <span className="text-primary font-bold text-3xl">{customer.name.charAt(0)}</span>
                  </div>
                )}
                {/* Hidden fallback text container for broken images */}
                <span className="hidden text-sm font-bold text-foreground text-center">
                  {customer.name}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-center text-muted-foreground line-clamp-2 leading-tight uppercase tracking-wider">
                {customer.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
