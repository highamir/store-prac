import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";

type CardItemPropsType = { url: string,price:number };

export default function CardItem({ url,price }: CardItemPropsType) {
  return (
    <Card  className="relative rounded-lg border border-gray-200 shadow-sm">
      {/* Product Image */}
      <div className="relative w-full h-[650px] overflow-hidden">
        <Image
          src={url}
          alt="Product"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="w-full h-full "
        />

        {/* "New" Tag (Top Left) */}
        <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
          New
        </span>

        {/* Heart Icon (Top Right) */}
        <Button className="absolute flex justify-center top-2 right-2 bg-white p-1 rounded-full shadow" isIconOnly>
          <Icon icon="mynaui:heart" width="20" height="20" className="text-gray-600" />
        </Button>
      </div>

      {/* Product Info */}
      <CardBody className="p-4">
        <h3 className="text-gray-900 font-semibold">Highwaist Jeans</h3>
        <p className="text-gray-500 text-sm">Armani</p>
        <p className="text-gray-900 font-bold mt-1">{price}</p>
      </CardBody>
    </Card>
  );
}
