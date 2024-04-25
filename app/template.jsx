"use client";
import { useEffect } from "react";
import { animatePageIn } from "../utils/animation";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="fixed top-0 left-0 z-10 w-1/4 min-h-screen bg-neutral-950"
      />
      <div
        id="banner-2"
        className="fixed top-0 z-10 w-1/4 min-h-screen left-1/4 bg-neutral-950"
      />
      <div
        id="banner-3"
        className="fixed top-0 z-10 w-1/4 min-h-screen left-2/4 bg-neutral-950"
      />
      <div
        id="banner-4"
        className="fixed top-0 z-10 w-1/4 min-h-screen left-3/4 bg-neutral-950"
      />
      {children}
    </div>
  );
}
