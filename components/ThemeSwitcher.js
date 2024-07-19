"use client";

import { FaMoon } from "react-icons/fa";

import { MdSunny } from "react-icons/md";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // if (!mounted)return(
  //     <Image src=""
  //     width={30}
  //     height={30}
  //     size="30*30"
  //     alt="Loading Light/Dark Toggle"
  //     priority={false}
  //     title="Loading Light/Dark Toggle "/>

  // )
  if (resolvedTheme === "dark") {
    console.log("dark");
    return <MdSunny onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    console.log("light");

    return <FaMoon onClick={() => setTheme("dark")} />;
  }
}
