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
              className="mx-6 sm:mx-10 flex flex-col items-center justify-center w-40 sm:w-48 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={customer.name}
            >
              <div className="h-16 flex items-center justify-center w-full">
                {customer.logo_url ? (
                  <>
                    <img
                      src={customer.logo_url}
                      alt={customer.name}
                      className={`max-h-full max-w-full object-contain ${customer.invert ? 'invert' : ''}`}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        e.currentTarget.nextElementSibling?.classList.add('flex');
                      }}
                    />
                    <div className="hidden w-full h-full px-3 bg-primary/5 rounded-xl items-center justify-center border border-primary/10">
                      <span className="text-primary font-bold text-[10px] sm:text-[11px] text-center leading-tight uppercase tracking-wider">
                        {customer.name}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex w-full h-full px-3 bg-primary/5 rounded-xl items-center justify-center border border-primary/10">
                    <span className="text-primary font-bold text-[10px] sm:text-[11px] text-center leading-tight uppercase tracking-wider">
                      {customer.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
