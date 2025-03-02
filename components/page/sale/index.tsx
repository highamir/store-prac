"use client";
import CardItem from "@/components/page/sale/card";
import Filterbar from "@/components/page/sale/filterbar";
import FilterPrice from "@/components/page/sale/filterprice";
import { useAppSelector } from "@/redux/app/hooks";
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

const imageList = [
  {
    id: 1,
    url: "/pic/1.jpg",
    price: 400,
    size: "xl",
    color: "red",
    style: "sport",
  },
  {
    id: 2,
    url: "/pic/2.jpg",
    price: 1000,
    size: "l",
    color: "green",
    style: "classic",
  },
  {
    id: 3,
    url: "/pic/3.webp",
    price: 1500,
    size: "xl",
    color: "red",
    style: "casual",
  },
  {
    id: 4,
    url: "/pic/4.webp",
    price: 256,
    size: "xs",
    color: "blue",
    style: "sport",
  },
  {
    id: 5,
    url: "/pic/5.jpg",
    price: 900,
    size: "l",
    color: "green",
    style: "classic",
  },
  {
    id: 6,
    url: "/pic/6.jpg",
    price: 565,
    size: "xs",
    color: "red",
    style: "casual",
  },
  {
    id: 7,
    url: "/pic/7.jpg",
    price: 685,
    size: "l",
    color: "blue",
    style: "sport",
  },
  {
    id: 8,
    url: "/pic/8.webp",
    price: 800,
    size: "l",
    color: "green",
    style: "classic",
  },
  {
    id: 9,
    url: "/pic/9.jpg",
    price: 760,
    size: "xl",
    color: "red",
    style: "casual",
  },
];

export default function Sale() {
  const {priceRange,selectedSize,selectedStyle,selectedColor}=useAppSelector(state=>state.filter)

  const filteredImages = imageList.filter((item) => {
    return (
      item.price >= priceRange[0] &&
      item.price <= priceRange[1] &&
      (selectedSize ? item.size === selectedSize : true) &&
      (selectedColor ? item.color === selectedColor : true) &&
      (selectedStyle ? item.style === selectedStyle : true)
    );
  });
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
        {filteredImages.length?(filteredImages.map((item,index)=><CardItem key={index} price={item.price} url={item.url}/>)):null}
      </div>
    </div>
  );
}
