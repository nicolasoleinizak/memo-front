'use client';

import Image from "next/image";

interface GameCardProps {
  title: string,
  imageUrl: string,
  onClick: () => void,
  played?: boolean,
}

export const GameCard = ({ title, imageUrl, onClick, played = false }: GameCardProps) => {
  return (
    <div
      className="w-[240px] h-[240px] relative rounded-md outline outline-4 overflow-hidden hover:shadow-lg hover:cursor-pointer outline-secondary-800"
      onClick={onClick}
    >
      <div className="absolute z-10 top-0 left-0 bg-slate-50 text-center w-full bg-secondary-800">
        <h3 className="text-primary-50">{title}</h3>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        width={240}
        height={240}
        className={`absolute z-0 top-0 left-0 ${played ? "filter grayscale" : ""} hover:brightness-125 transition-transform duration-300 hover:scale-105`}
      />
    </div>
  );
}