"use client";

import React from "react";
import Image from "next/image";

export default function Link({ src, link }) {
  return (
    <div
      className="flex gap-5 items-center my-6 hover:bg-sky-400/30 transition-all py-3 pl-2 pr-12 rounded-xl cursor-pointer"
      onClick={(e) => {
        window.location.href = "mailto:no-reply@example.com";
        e.preventDefault();
      }}
    >
      <div className="bg-[#4d9dd6] p-2 w-fit rounded-lg">
        <Image
          className="max-w-none"
          src={src}
          width={60}
          height={60}
          alt="Email"
        ></Image>
      </div>
      <p>{link}</p>
    </div>
  );
}
