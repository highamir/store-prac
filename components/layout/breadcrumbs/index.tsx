"use client";
import React from "react";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  console.log("pathname: ", pathname.split("/"));

  if (pathname === '/') return null;
  return (
    <Breadcrumbs
      itemClasses={{
        separator: "px-6",
      }}
      separator="/"
      className="bg-content2 px-6 py-3"
    >
      {pathname
        .split("/")
        .map((item) => (item ? <BreadcrumbItem>{item}</BreadcrumbItem> : null))}
    </Breadcrumbs>
  );
}
