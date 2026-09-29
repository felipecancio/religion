"use client";

import { useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ArtImage } from "./ArtImage";

const SAMPLE_IMAGES = GALLERY_IMAGES.slice(0, 10);

export function HeroArtGrid({ variant }: { variant: "mobile" | "desktop" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () =>
      setShow(variant === "desktop" ? mq.matches : !mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [variant]);

  if (!show) return null;

  return (
    <div
      className={
        variant === "desktop"
          ? "mt-12 grid grid-cols-5 gap-3"
          : "grid grid-cols-2 gap-3"
      }
    >
      {SAMPLE_IMAGES.map((id) => (
        <div
          key={id}
          className="relative aspect-[2/3] overflow-hidden rounded-sm"
        >
          <ArtImage
            imageId={id}
            fill
            sizes={variant === "desktop" ? "20vw" : "45vw"}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
