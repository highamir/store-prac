"use client"
import React from "react";
import { Select, SelectItem } from "@heroui/react";

const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

export default function Filterbar() {
  return (
    
    <div className="flex justify-center my-11 py-5    ">
      
      <Select
        className="max-w-xl"
        items={animals}
        label="STYLE"
        radius="none"
        variant="bordered"
      >
        {(animal) => <SelectItem>{animal.label}</SelectItem>}
      </Select>
      <Select
        className="max-w-xl"
        items={animals}
        label="COLOR"
        radius="none"
        variant="bordered"

      >
        {(animal) => <SelectItem>{animal.label}</SelectItem>}
      </Select>
      <Select
        className="max-w-xl"
        items={animals}
        label="SIZE"
        radius="none"
        variant="bordered"

      >
        {(animal) => <SelectItem>{animal.label}</SelectItem>}
      </Select>
      <Select
        className="max-w-xl"
        items={animals}
        label="PRICE RANGE"
        radius="none"
        variant="bordered"

      >
        {(animal) => <SelectItem>{animal.label}</SelectItem>}
      </Select>


      
    </div>
  );
}
