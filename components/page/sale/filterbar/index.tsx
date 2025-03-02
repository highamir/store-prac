"use client";
import React from "react";
import { Button, Select, SelectItem } from "@heroui/react";
import { useAppDispatch } from "@/redux/app/hooks";
import {
  setSelectedSize,
  setSelectedStyle,
  setSelectedColor,
  resetFilters
} from "@/redux/features/filters/filter-slice";
import FilterPrice from "../filterprice";

const size = ["sm", "m", "l", "xl"];
const style = ["casual", "classic", "sport"];
const color = ["red", "blue", "green"];

export default function Filterbar() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center my-11 py-5  items-center   ">
      <Select
        className="max-w-xl"
        label="STYLE"
        radius="none"
        variant="bordered"
        onSelectionChange={(keys) => {
          dispatch(setSelectedStyle(keys.currentKey ?? ""));
        }}
      >
        {style.map((item) => (
          <SelectItem key={item}>{item}</SelectItem>
        ))}
      </Select>
      <Select
        className="max-w-xl"
        label="SIZE"
        radius="none"
        variant="bordered"
        onSelectionChange={(keys) =>
          dispatch(setSelectedSize(keys.currentKey ?? ""))
        }
      >
        {size.map((item) => (
          <SelectItem key={item}>{item}</SelectItem>
        ))}
      </Select>
      <Select
        className="max-w-xl"
        label="COLOR"
        radius="none"
        variant="bordered"
        onSelectionChange={(keys) =>
          dispatch(setSelectedColor(keys.currentKey ?? ""))
        }
      >
        {color.map((item) => (
          <SelectItem key={item}>{item}</SelectItem>
        ))}
      </Select>
      <FilterPrice />

      <Button onPress={()=>dispatch(resetFilters())}>Reset</Button>


      {/* <Select
        className="max-w-xl"
        items={size}
        label="COLOR"
        radius="none"
        variant="bordered"

      >
        {(size) => <SelectItem>{size}</SelectItem>}
      </Select>
      <Select
        className="max-w-xl"
        items={color}
        label="SIZE"
        radius="none"
        variant="bordered"

      >
        {(color) => <SelectItem>{color}</SelectItem>}
      </Select> */}
    </div>
  );
}
