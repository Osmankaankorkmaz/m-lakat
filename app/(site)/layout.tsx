"use client";
import MenuBar from "@/components/MenuBar";
import ProfileHeader from "@/components/ProfileHeader";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();

  const isAuthPage = pathname === "/" || pathname.includes("register");
const isProfilePage = pathname.includes("profile")
  return (
    <div className="bg-gray-200 min-h-screen">
      {isProfilePage && < ProfileHeader/>}

      {children}

      {!isAuthPage && <MenuBar />}
    </div>
  );
};

export default Layout;
