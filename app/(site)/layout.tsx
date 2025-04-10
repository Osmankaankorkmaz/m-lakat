"use client";
import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();

  const isAuthPage = pathname === "/" || pathname.includes("register");

  return (
    <div className="bg-gray-200 min-h-screen">
      {!isAuthPage && <Header />}

      {children}

      {!isAuthPage && <MenuBar />}
    </div>
  );
};

export default Layout;
