"use client";

import React from "react";
import { Slider } from "@heroui/react";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { setPriceRange } from "@/redux/features/filters/filter-slice";

export default function FilterPrice() {
  const dispatch = useAppDispatch();
  const priceRange = useAppSelector((state) => state.filter.priceRange);

  return (
    <Slider
      className="max-w-md"
      value={priceRange}
      onChange={(newValue) => dispatch(setPriceRange(newValue as [number, number]))}
      formatOptions={{ style: "currency", currency: "USD" }}
      label="Price Range"
      maxValue={1200}
      minValue={0}
      step={50}
    />
  );
}
