"use client";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileHeader = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 gap-4">
      <div className="hidden sm:block">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      <div className="flex flex-wrap justify-between w-full sm:w-auto gap-4 list-none items-center font-semibold">
        <Link
          href="/profile"
          className={`flex gap-1 items-center border-b-2 hover:text-orange-400 ${
            pathname === "/profile" && "text-orange-400 border-orange-400"
          }`}
        >
          <FaUser /> Profile
        </Link>
        <Link
          href="/profile/users"
          className={`flex gap-1 items-center border-b-2 hover:text-orange-400 ${
            pathname === "/users" && "text-orange-400 border-orange-400"
          }`}
        >
          <LuUsersRound /> Users
        </Link>
        <Link
          href="/profile/products"
          className={`flex gap-1 items-center border-b-2 hover:text-orange-400 ${
            pathname === "/products" && "text-orange-400 border-orange-400"
          }`}
        >
          <BsBoxFill /> Products
        </Link>
        <Link
          href="/profile/seller"
          className={`flex gap-1 items-center border-b-2 hover:text-orange-400 ${
            pathname === "/seller" && "text-orange-400 border-orange-400"
          }`}
        >
          <FaUserTie /> Seller
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
