"use client";
import CardItem from "@/components/page/card";
import Filterbar from "@/components/page/filterbar";
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
  { key: "Most Popular", label: "Most Popular" },
];

const imageList =[



  {
    "id": 1,
    url:"/pic/1.jpg"
  },
  {
    "id": 2,
    url:"/pic/2.jpg"
  },
  {
    "id": 3,
    url:"/pic/3.webp"
  },
  {
    "id": 4,
    url:"/pic/4.webp"
  },
  {
    "id": 5,
    url:"/pic/5.jpg"
  },
  {
    "id": 6,
    url:"/pic/6.jpg"
  },
  {
    "id": 7,
    url:"/pic/7.jpg"
  },
  {
    "id": 8,
    url:"/pic/8.webp"
  },
  {
    "id": 9,
    url:"/pic/9.jpg"
  }
]


export default function Sale() {
  return (
    <div className=" container mx-auto px-12 py-6">
      <div className="flex justify-between items-center  py-6">
        <h1 className="text-xl font-bold">Dresses</h1>
        <div className="flex items-center gap-2">
          {" "}
          <p className=" whitespace-nowrap ">Sort by</p>{" "}
          <div className="flex w-fit">
            <Select
              variant="faded"
              className="w-auto min-w-[145px]"
              items={animals}
              defaultSelectedKeys={["Most Popular"]}
            >
              {(animal) => <SelectItem>{animal.label}</SelectItem>}
            </Select>
          </div>
        </div>
      </div>
      <Filterbar />

      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2  gap-2">
        {" "}
              {imageList.map((item,index)=><CardItem key={index} url={item.url}/>)}
      </div>
    </div>
  );
}
