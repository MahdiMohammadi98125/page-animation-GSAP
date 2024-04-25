import React from "react";

export default function Heading({ children }) {
  return (
    <h1 className="flex items-center justify-center h-[50vh] font-extrabold text-center text-7xl">
      {children}
    </h1>
  );
}
