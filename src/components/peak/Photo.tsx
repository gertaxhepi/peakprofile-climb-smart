import heroPhoto from "@/assets/hero-yellow-tent.png.asset.json";
import readinessPhoto from "@/assets/snow-crossing.png.asset.json";
import teamPhoto from "@/assets/base-camp.png.asset.json";
import waitlistPhoto from "@/assets/cabin-sunset.png.asset.json";

type PhotoProps = {

  src: string;
  alt: string;
  position?: string;
  className?: string;
  children?: React.ReactNode;
  overlayClassName?: string;
};

/**
 * Renders a photograph as a cover background so it never stretches, with a
 * calm alpine tone showing through until the image loads.
 */
export function Photo({
  src,
  alt,
  position = "center",
  className = "",
  overlayClassName,
  children,
}: PhotoProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-ice ${className}`}>
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
      />
      {overlayClassName ? (
        <div aria-hidden="true" className={`absolute inset-0 -z-10 ${overlayClassName}`} />
      ) : null}
      {children}
    </div>
  );
}

export const PHOTOS = {
  hero: {
    src: heroPhoto.url,
    alt: "A yellow expedition tent pitched on a rocky high camp at dawn, with snow-covered Himalayan peaks stretching to the horizon.",
  },
  readiness: {
    src: readinessPhoto.url,
    alt: "A single skier crossing a vast open snowfield in soft blue light, with ski tracks converging in the foreground.",
  },
  team: {
    src: teamPhoto.url,
    alt: "Yellow expedition tents at a glacier base camp beneath a huge icefall and snow-covered summit.",
  },
  waitlist: {
    src: waitlistPhoto.url,
    alt: "A dark A-frame mountain hut half buried in deep snow under a soft pink and lilac sunset sky.",
  },
} as const;

