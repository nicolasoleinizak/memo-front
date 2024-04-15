"use client";

import { GameResultCard } from "@/components/game-result-card";
import { useEffect, useState } from "react";

export default function Stats() {

  const [finishedSessions, setFinishedSessions] = useState<any[]>([]);

  const sortAndSetFinishedSessions = (sessions: any[]) => {
    const sortedSessions = sessions.sort((a, b) => {
      return b.finishedAt - a.finishedAt;
    });

    setFinishedSessions(sortedSessions);
  }

  useEffect(() => {
    const storageFinishedSessionsValue = localStorage.getItem('memoTestFinishedSessions') || '[]';
    const storageFinishedSessions = storageFinishedSessionsValue ? JSON.parse(storageFinishedSessionsValue) : [];

    sortAndSetFinishedSessions(storageFinishedSessions);
  }, []);

  return (
    <div>
      <h2>Your statistics</h2>
      {
        finishedSessions.length > 0 &&
        <div>
          <h3>Your last game</h3>
            <GameResultCard
              title={finishedSessions[0]?.memoTest.name}
              imageUrl={finishedSessions[0]?.memoTest.images[0]?.url}
              score={finishedSessions[0]?.score}
            />
        </div>
      }
      {
        finishedSessions.length > 1 &&
        <div>
          <hr className="my-5"/>
          <h3>Your previous games</h3>
          <div className="flex flex-wrap my-2">
            {
              finishedSessions.slice(1).map((session, index) => (
                <GameResultCard
                  key={index}
                  title={session?.memoTest.name}
                  imageUrl={session?.memoTest.images[0]?.url}
                  score={session?.score}
                />
              ))
            }
          </div>
        </div>
      }
      {
        finishedSessions.length === 0 &&
        <div>
          <p>You haven&apos;t played any games yet</p>
        </div>
      }
      <div>

      </div>
    </div>
  );
}