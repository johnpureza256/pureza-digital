import Image from "next/image";
import type { Still } from "@/data/projects";

/** A desktop screen, shown flat: no browser chrome, no frame, no radius. */
export function Screen({ still, sizes, className = "" }: { still: Still; sizes: string; className?: string }) {
  return (
    <Image
      src={still.src}
      alt={still.alt}
      width={still.w}
      height={still.h}
      sizes={sizes}
      className={`block h-auto w-full ${className}`}
    />
  );
}

/**
 * A phone screen. Device screens are the one rounded shape on the site: the
 * radius belongs to the hardware, not to the page.
 */
export function Phone({ still, sizes, className = "" }: { still: Still; sizes: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[clamp(14px,1.8vw,26px)] ${className}`}
      style={{
        boxShadow:
          "0 1px 2px rgb(10 8 6 / 0.10), 0 12px 32px -8px rgb(10 8 6 / 0.28), 0 40px 80px -24px rgb(10 8 6 / 0.30)",
      }}
    >
      <Image
        src={still.src}
        alt={still.alt}
        width={still.w}
        height={still.h}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </div>
  );
}
