import React from "react";
import ResponsiveNavbar from "./navbar";

const ResponsiveLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ResponsiveNavbar />
      {children}
    </>
  );
};

export default ResponsiveLayout;
