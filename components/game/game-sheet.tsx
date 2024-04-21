'use client';
import { useEffect, useRef, useState } from "react";
import { Image as ImageType } from "@/interfaces/image";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import "./game-sheet.css";

interface GameSheetProps {
  image: ImageType;
  order: number;
  display: boolean;
  checked: boolean;
  onClick: () => void;
}

const rotations = ["-rotate-1", "-rotate-2", "rotate-1", "rotate-2"];

export const GameSheet = ({ image, order, display: initialDisplay, checked, onClick }: GameSheetProps) => {
  const [display, setDisplay] = useState(initialDisplay);
  const [rotationAnimation, setRotationAnimation] = useState("");
  const [successAnimation, setSuccessAnimation] = useState("");

  let randomRotation = useRef(rotations[Math.floor(Math.random() * rotations.length)]);

  useEffect(() => {
    setRotationAnimation("shrinkX");
    setTimeout(() => {
      setDisplay(initialDisplay);
      setRotationAnimation("growX");
    }, 400);
    setTimeout(() => {
      setRotationAnimation("");
    }, 800);
  }, [initialDisplay])

  useEffect(() => {
    if (checked) {
      setSuccessAnimation("bright");
    }
  }, [checked]);

  return (
    <div className={`w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] ${randomRotation.current} ${successAnimation} hover:cursor-pointer`}>
      <div className={`${rotationAnimation} p-[2px] bg-primary-700 rounded-[12px] sm:rounded-[16px] md:rounded-[20px]`}>
        <div className="game-sheet-horizontal-gradient absolute w-[120px h-[120px]] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] top-0 left-0 sm:rounded-[16px] md:rounded-[20px]"></div>
        <div className="game-sheet-vertical-gradient absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] top-0 left-0 rounded-[12px] sm:rounded-[16px] md:rounded-[20px]"></div>
        <div
          className="w-full h-[116px] sm:h-[146px] md:h-[196px] border-[7px] sm:border-[9px] md:border-[10px] border-primary-600 relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] bg-primary-700 shadow-inner">
          {
            display
              ?
              <div className="absolute top-0 left-0">
                <Image src={image.url} alt="game" width={200} height={200} className="w-full h-full object-cover rounded-lg brightness-1" />
              </div>
              :
              <div className="absolute top-0 left-0 w-full h-[100%] bg-grey flex justify-end items-end pb-3 pr-4 text-lg font-bold" onClick={onClick}>
                <span>{order}</span>
              </div>
          }
          <div className="game-sheet-back-gradient-horizontal absolute w-full h-[103px] sm:h-[128px] md:h-[177px] top-0 left-0 rounded-[6px] sm:rounded-[8px] md:rounded-[11px]"></div>
          <div className="game-sheet-back-gradient-vertical absolute w-full h-[103px] sm:h-[128px] md:h-[177px] top-0 left-0 rounded-[6px] sm:rounded-[8px] md:rounded-[11px]"></div>
        </div>
      </div>
    </div>
  )
}