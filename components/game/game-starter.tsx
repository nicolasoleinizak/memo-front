'use client';

import { Session } from "@/interfaces/session";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export const GameStarter = ({ session }: {session: Session | null}) => {
    const router = useRouter();
    
    useEffect(() => {
        if (session?.id || session?.id == null) {
            localStorage.setItem('memoTestSessions', JSON.stringify([session]));
            router.push(`/games/play/${session?.id}`);
        }
    }, [session, router]);

    return (<></>);
};