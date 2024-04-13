'use client';
import { useState } from "react";
import { Image as ImageType } from "@/interfaces/image";
import Image from "next/image";

interface GameSheetProps {
  image: ImageType;
  order: number;
  display: boolean;
  onClick: () => void;
}

export const GameSheet = ({ image, order, display, onClick }: GameSheetProps) => {

  return (
    <div className="w-[200px] h-[200px] rounded-[20px] p-[2px] bg-primary-700">
      <div className="w-[196px] h-[196px] border-[10px] border-primary-600 relative rounded-[20px] bg-primary-700 shadow-inner">
        {
          display
            ?
            <div className="absolute top-0 left-0">
              <Image src={image.url} alt="game" width={200} height={200} className="w-full h-full object-cover rounded-lg" />
            </div>
            :
            <div className="absolute top-0 left-0 w-full h-[100%] bg-grey flex justify-end items-end p-2 text-lg" onClick={onClick}>
              <span>{order}</span>
            </div>
        }
      </div>
    </div>
  )
}