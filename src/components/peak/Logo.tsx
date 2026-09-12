import blackSymbol from "@/assets/peakprofile-symbol-black.png.asset.json";
import whiteSymbol from "@/assets/peakprofile-symbol-white.png.asset.json";

type LogoProps = {
  className?: string;
  symbolTone?: "black" | "white";
};

export function Logo({ className, symbolTone = "white" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <img
        src={symbolTone === "white" ? whiteSymbol.url : blackSymbol.url}
        alt="PeakProfile mountain and human profile logo."
        width="51"
        height="31"
        className="h-[22px] w-auto shrink-0 object-contain"
      />
      <span className="text-[15px] font-medium tracking-tight">PeakProfile</span>
    </span>
  );
}
