type Position = "left" | "right" | "top" | "center";
type Intensity = "soft" | "bold";

const ANCHORS: Record<Position, { x: string; y: string }> = {
  left: { x: "6%", y: "32%" },
  right: { x: "94%", y: "26%" },
  top: { x: "50%", y: "-4%" },
  center: { x: "50%", y: "46%" },
};

const LEVELS: Record<Intensity, { wash: number; washMid: number; bloom: number }> = {
  bold: { wash: 0.08, washMid: 0.028, bloom: 0.09 },
  soft: { wash: 0.055, washMid: 0.02, bloom: 0.06 },
};

/**
 * A warm gold glow that sits behind a section's content.
 * The parent section must be `relative overflow-hidden`, and its
 * content wrapper should be `relative z-10` so it stays above the glow.
 */
export default function SectionGlow({
  position = "right",
  intensity = "bold",
}: {
  position?: Position;
  intensity?: Intensity;
}) {
  const { x, y } = ANCHORS[position];
  const { wash, washMid, bloom } = LEVELS[intensity];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Broad ambient wash */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(42% 46% at ${x} ${y}, rgba(201,169,110,${wash}), rgba(201,169,110,${washMid}) 42%, transparent 72%)`,
        }}
      />
      {/* Bright bloom core */}
      <div
        className="absolute"
        style={{
          left: x,
          top: y,
          width: 580,
          height: 440,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(50% 50% at 50% 50%, rgba(232,201,138,${bloom}), transparent 70%)`,
          filter: "blur(72px)",
        }}
      />
    </div>
  );
}
