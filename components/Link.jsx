"use client";

import React from "react";
import Image from "next/image";

export default function Link({ src, type, link }) {
  console.log(type);

  return (
    <a
      className="flex gap-5 items-center my-6 hover:bg-sky-400/30 transition-all py-3 pl-2 pr-12 rounded-xl cursor-pointer"
      onClick={(e) => {
        if (type == "mail") {
          window.location.href = `mailto:${link}`;
          e.preventDefault();
        }
      }}
      href={type != "mail" ? link : null}
      target="_blank"
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
    </a>
  );
}
