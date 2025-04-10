import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";

const MenuBar = () => {
  return (
    <div>
      <div className="flex justify-end w-full mt-6 px-5">
        <button className="flex items-center gap-3 px-6 py-3 text-lg rounded-full bg-orange-400 text-white font-semibold shadow-md hover:bg-orange-500 transition-all duration-200">
          <MdLogout size={24} />
          Log out
        </button>
      </div>
      <div className="mt-5 px-5 py-3 bg-white shadow-lg rounded-lg lg:w-1/3 lg:ml-auto">
        <div className="flex justify-between gap-5">
          <Link
            href="/bookings"
            className="flex flex-col gap-2 items-center hover:text-orange-400"
          >
            <GiHamburgerMenu size={22} />
            <p>Bookings</p>
          </Link>
          <Link
            href="/invoice"
            className="flex flex-col gap-2 items-center hover:text-orange-400"
          >
            <RiNewspaperLine size={22} />
            <p>Invoice</p>
          </Link>
          <Link
            href="/messages"
            className="flex flex-col gap-2 items-center hover:text-orange-400"
          >
            <IoMdMail size={22} />
            <p>Messages</p>
          </Link>
          <Link
            href="/report"
            className="flex flex-col gap-2 items-center hover:text-orange-400"
          >
            <HiOutlineDocumentReport size={22} />
            <p>Report</p>
          </Link>
          <Link
            href="/profile"
            className="flex flex-col gap-2 items-center hover:text-orange-400"
          >
            <FaUser size={22} />
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
