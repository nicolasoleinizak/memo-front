'use client';

import Image from "next/image";

interface GameResultCardProps {
  title: string,
  imageUrl: string,
  score: number,
}

export const GameResultCard = ({ title, imageUrl, score }: GameResultCardProps) => {
  return (
    <div
      className={`w-[150px] h-[150px] m-3 relative rounded-md border border-[4px] overflow-hidden hover:shadow-lg border-primary-800`}
    >
      <div className="absolute z-10 top-0 left-0 bg-slate-50 text-center w-full bg-primary-800">
        <h3 className="text-primary-50 text-base">{title}</h3>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        width={150}
        height={150}
        className="absolute z-0 top-0 left-0"
      />
      <div className="absolute w-full h-[150px] z-50 flex justify-center items-center">
        <div
          className={`
            w-[70px] h-[70px] rounded-[35px] flex justify-center items-center text-primary-50 font-bold text-xl
            ${score < 20 ? "bg-score-0/80" : score < 40 ? "bg-score-20/80" : score < 60 ? "bg-score-40/80" : score < 80 ? "bg-score-60/80" : "bg-score-80/80"}
          `}
        >
          {score.toFixed(0)}%
        </div>
      </div>
    </div>
  );
}