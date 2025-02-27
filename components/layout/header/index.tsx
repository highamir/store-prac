"use client";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify-icon/react";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";

const links = [
  { label: "HOME", url: "/" },
  { label: "TEMPLATE", url: "/template" },
  { label: "DOCS", url: "/docs" },
  { label: "SALE", url: "/sale" },
];

export default function MainHeader() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex h-16 bg-content1 w-full items-center mx-auto container  justify-between px-12">
      <div className="flex items-center ">
        <ul className="flex flex-row gap-6 items-center">
          {links.map((item, index) => (
            <li
              className={
                pathname == item.url
                  ? "text-red-700 font-medium "
                  : "text-black font-medium  hover:text-pink-600"
              }
              key={index}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
        <h1 className="text-black font-bold">SHOPY</h1>
      <div className="flex  gap-3">
        <Button isIconOnly variant="light">
          <Icon
            icon="lucide:search"
            width="24"
            height="24"
            style={{ color: "#878787" }}
          />
        </Button>
        <Button isIconOnly variant="light">
          <Icon
            icon="mingcute:earth-line"
            width="24"
            height="24"
            style={{ color: "#878787" }}
          />
        </Button>
        <Button isIconOnly variant="light">
          <Icon
            icon="iconamoon:profile-duotone"
            width="24"
            height="24"
            style={{ color: "#878787" }}
          />
        </Button>
        <Button isIconOnly variant="light">
          <Icon
            icon="mdi:heart-outline"
            width="24"
            height="24"
            style={{ color: "#878787" }}
          />
        </Button>
        <Button isIconOnly variant="light">
          <Icon
            icon="solar:cart-linear"
            width="24"
            height="24"
            style={{ color: "#878787" }}
          />
        </Button>
      </div>
    </nav>
  );
}
