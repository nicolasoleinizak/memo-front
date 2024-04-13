"use client";

import { useEffect, useState } from "react";
import { Session as SessionType } from "@/interfaces/session";
import IconButton from "../IconButton";
import { ArrowRightIcon } from "../icons/arrow-right-icon";
import Image from "next/image";

export const PendingSessionReminder = ({ className }: { className?: string }) => {
  const [session, setSession] = useState<SessionType | null>(null);

  useEffect(() => {
    const session = localStorage.getItem("memoTestSessions");
    if (session) {
      setSession(JSON.parse(session)[0]);
    }
  }, []);

  return (
    <div className={` ${className}`}>
      {
        session &&
        <div className="bg-primary rounded-lg p-3 text-primary-50 flex gap-4 items-center shadow">
          <div className="rounded-md overflow-hidden">
            <Image src={session.game.sheets[0].image.url} width={60} height={60} alt="Alert icon" />
          </div>
          <div>
            <p>You have an ongoing game: {session?.game.name}</p>
            <p>Do you want to continue it?</p>
          </div>
          <IconButton
            onClick={() => {
              window.location.href = `/games/play/${session.id}`;
            }}
          >
            <ArrowRightIcon />
          </IconButton>
        </div>
      }
    </div>
  );
}