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
    src: "/photos/hero-yellow-tent.jpg",
    alt: "A yellow expedition tent pitched below a dramatic snow-covered mountain range at dusk.",
  },
  readiness: {
    src: "/photos/snow-crossing.jpg",
    alt: "A single mountaineer crossing a vast open snowfield, dwarfed by the surrounding glacier.",
  },
  team: {
    src: "/photos/base-camp.jpg",
    alt: "Expedition tents at a high-altitude base camp beneath a heavily glaciated mountain face.",
  },
  waitlist: {
    src: "/photos/cabin-sunset.jpg",
    alt: "A small dark mountain cabin in deep snow with distant peaks under a soft pink sunset.",
  },
} as const;
