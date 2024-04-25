import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { animatePageOut } from "../../utils/animation";

export default function TransitionLink({ href, label }) {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    if (pathName === href) return;
    animatePageOut(href, router);
  };
  return (
    <button
      className="text-xl transition text-neutral-900 hover:text-neutral-700"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
