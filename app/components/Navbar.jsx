"use client";
import React from "react";
import Link from "next/link";
import TransitionLink from "./TransitionLink";

export default function Navbar() {
  return (
    <nav className="max-w-[70rem] mx-auto  mb-14">
      <div className="flex items-center justify-between h-20 border-b-[1px] border-b-slate-200">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex items-center gap-4">
          <li className="transition cursor-pointer hover:text-slate-600">
            <TransitionLink href="/" label="home" />
          </li>
          <li className="transition cursor-pointer hover:text-slate-600">
            <TransitionLink href="/about" label="about" />
          </li>
          <li className="transition cursor-pointer hover:text-slate-600">
            <TransitionLink href="/work" label="work" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
