"use client";
import React, {  useEffect, useState } from "react";
import { default as DesktopNavbar } from "./desktop";
import { default as MobileNavbar } from "./mobile";

const ResponsiveNavbar = () => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    function onResize() {
      setIsLarge(window.innerWidth >= 1024);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (isLarge) {
    return <DesktopNavbar />;
  } else {
    return <MobileNavbar />;
  }
};

export default ResponsiveNavbar;
