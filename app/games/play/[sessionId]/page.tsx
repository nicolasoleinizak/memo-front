"use client";

import { Game } from "@/components/game/game";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Session as SessionType } from '@/interfaces/session';
import IconButton from "@/components/IconButton";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { useSpring,animated } from "@react-spring/web";

export default function Session() {

  const router = useRouter();

  const [session, setSession] = useState<SessionType|null>(null);
  const [finished, setFinished] = useState<boolean>(false);
  const { sessionId } = useParams();

  const containerAnimationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 }
  });

  useEffect(() => {
    const storageSessionsValue = localStorage.getItem('memoTestSessions');
    const storageSessions = storageSessionsValue ? JSON.parse(storageSessionsValue) : [];
  
    setSession(storageSessions?.find((session: any) => session.id === sessionId));
  }, [sessionId])

  const handleFinish = async (finishedSession: SessionType) => {
    await fetch('/api/session', {
      method: 'PATCH',
      body: JSON.stringify({
        id: sessionId,
        retries: finishedSession.retries
      })
    })
    .then(res => res.json())
    .then(({data: {endGameSession}}) => {
      storeSession(endGameSession);
      cleanCurrentSession();
    })
    .catch((error) => {
      console.error(error);
      cleanCurrentSession();
    });
  }

  const storeSession = async (finishedSession: SessionType) => {
    try {
      const storageFinishedSessionsValue = localStorage.getItem('memoTestFinishedSessions') || '[]';
      const storageFinishedSessions = storageFinishedSessionsValue ? JSON.parse(storageFinishedSessionsValue) : [];
    
      const updatedFinishedSessions = [
        ...storageFinishedSessions,
        {
          ...finishedSession,
          finishedAt: new Date().getTime()
        }
      ];
    
      localStorage.setItem('memoTestFinishedSessions', JSON.stringify(updatedFinishedSessions));
    } catch (error) {
      console.error(error);
    }
  }
  
  const cleanCurrentSession = () => {
    const storageSessionsValue = localStorage.getItem('memoTestSessions');
    const storageSessions = storageSessionsValue ? JSON.parse(storageSessionsValue) : [];
  
    const updatedSessions = storageSessions.filter((session: any) => session.id !== sessionId);
  
    localStorage.setItem('memoTestSessions', JSON.stringify(updatedSessions));
    setFinished(true);
  }

  return (
    <div className="relative">
      {
        session?.game &&
        <div>
          <h2 className="mb-4">
            Now playing <span className="font-bold">{session.game.name}</span>
          </h2>
          <Game session={session} onFinish={handleFinish}/>
        </div>
      }
      {
        !session?.game &&
        <p>Sorry, there was a problem trying to load the game.</p>
      }
      {
        finished &&
        <animated.div className="fixed w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center pointer" style={containerAnimationProps}>
          <div className=" w-3/4 h-auto rounded-lg bg-primary-950/95 text-primary-50 shadow p-5 py-10 flex flex-col justify-center items-center gap-2">
            <p className="text-3xl">Great job! You finished the game. </p>
            <div className="flex items-center gap-2">
              <p className="text-xl">Let&apos;s see your results? </p>
              <IconButton onClick={() => router.push('/stats')}>
                <ArrowRightIcon />
              </IconButton>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl">Go back home? </p>
              <IconButton onClick={() => router.push('/')} className="rotate-180">
                <ArrowRightIcon/>
              </IconButton>
            </div>
          </div>
        </animated.div>
      }
    </div>
  )
}