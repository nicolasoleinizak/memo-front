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
    <div className={`w-[200px] h-[200px] ${randomRotation.current} ${successAnimation}`}>
      <div className={`${rotationAnimation} p-[2px] bg-primary-700 rounded-[20px]`}>
        <div className="game-sheet-horizontal-gradient absolute w-[200px] h-[200px] top-0 left-0 rounded-[20px]"></div>
        <div className="game-sheet-vertical-gradient absolute w-[200px] h-[200px] top-0 left-0 rounded-[20px]"></div>
        <div
          className="w-full h-[196px] border-[10px] border-primary-600 relative rounded-[20px] bg-primary-700 shadow-inner">
          {
            display
              ?
              <div className="absolute top-0 left-0">
                <Image src={image.url} alt="game" width={200} height={200} className="w-full h-full object-cover rounded-lg brightness-1" />
              </div>
              :
              <div className="absolute top-0 left-0 w-full h-[100%] bg-grey flex justify-end items-end p-2 text-lg" onClick={onClick}>
                <span>{order}</span>
              </div>
          }
        </div>
      </div>
    </div>
  )
}