"use client";

import { menus } from "@/app/data/menus";
import Link from "next/link";
import { useState } from "react";
import { HiMiniBars3CenterLeft, HiOutlineBars2 } from "react-icons/hi2";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoSearch,
} from "react-icons/io5";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="relative py-3 px-6 bg-blue-600 text-white flex justify-between items-center rounded-b">
      <button className="cursor-pointer flex items-center gap-1.5">
        {!show ? (
          <HiMiniBars3CenterLeft
            className="text-3xl"
            onClick={() => setShow(!show)}
          />
        ) : (
          <HiOutlineBars2 className="text-3xl" onClick={() => setShow(!show)} />
        )}
        <span className="text-xl font-bold">Dam Koto?</span>
      </button>
      <div className="px-4 rounded-full hidden md:flex items-center bg-white text-black gap-1.5">
        <input placeholder="Search" className="py-1.5 rounded outline-none" />
        <IoSearch className="text-2xl text-blue-600" />
      </div>
      <div className="flex gap-1.5 items-center">
        <IoLogoFacebook className="text-2xl text-white" />
        <IoLogoInstagram className="text-2xl text-white" />
        <IoLogoYoutube className="text-2xl text-white" />
      </div>
      {show && (
        <div className="absolute z-50 top-14 left-0 min-w-full bg-white text-gray-600 py-2.5 px-5 shadow rounded">
          <div className="flex justify-between px-4 rounded-full md:hidden items-center bg-white text-black gap-1.5 border border-blue-600">
            <input
              placeholder="Search"
              className="py-1.5 rounded outline-none"
            />
            <IoSearch className="text-2xl text-blue-600" />
          </div>

          <div className="mt-5 flex flex-col md:flex-row gap-2.5 justify-between">
            {menus.map((ni, index) => (
              <Link
                href={ni.link}
                key={index}
                className="flex md:flex-col items-center gap-1.5 hover:text-blue-600 ease-linear duration-100"
              >
                <span className="text-xl text-blue-600">{ni.icon}</span>
                <span className="">{ni.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
