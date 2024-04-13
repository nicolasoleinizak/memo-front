"use client";

import { Game } from "@/components/game/game";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Session as SessionType } from '@/interfaces/session';

export default function Session() {

  const [session, setSession] = useState<SessionType|null>(null);
  const { sessionId } = useParams();

  useEffect(() => {
    const storageSessionsValue = localStorage.getItem('memoTestSessions');
    const storageSessions = storageSessionsValue ? JSON.parse(storageSessionsValue) : [];
  
    setSession(storageSessions?.find((session: any) => session.id === sessionId));
  }, [sessionId])

  return (
    <div>
      {
        session?.game &&
        <>
          <h2 className="mb-4">
            Now playing <span className="font-bold">{session.game.name}</span>
          </h2>
          <Game session={session} />
        </>
      }
      {
        !session?.game &&
        <p>No game found</p>
      }
    </div>
  )
}