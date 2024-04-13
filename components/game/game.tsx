'use client';

import React, { useEffect, useState } from 'react';
import { GameSheet } from './game-sheet';
import { Session } from '@/interfaces/session';
import { Sheet } from '@/interfaces/sheet';

interface GameProps {
  session: Session;
}

export const Game = ({session: initialSession}: GameProps) => {
  const [session, setSession] = useState(initialSession);
  const [twistedCount, setTwistedCount] = useState(0);

  useEffect(() => {
    const twisted = session.game.sheets.filter((sheet: Sheet) => sheet.display).length;
    setTwistedCount(twisted);
  }, [session.game.sheets])

  useEffect(() => {
    if (twistedCount === 2) {
      const twistedSheets = session.game.sheets.filter((sheet: Sheet) => sheet.display);

      if (twistedSheets[0].image.id === twistedSheets[1].image.id) {
        const updatedSession = session.game.sheets.map((sheet: Sheet) => {
          if (sheet.display) {
            return {
              ...sheet,
              display: false,
              checked: true
            }
          }
          return sheet;
        })
        setTwistedCount(0);
        setSession(
          {
            ...session,
            retries: session.retries + 1,
            game: {
              ...session.game,
              sheets: updatedSession
            }
          }
        );
      } else {
        setTimeout(() => {
          const updatedSession = session.game.sheets.map((sheet: Sheet) => {
            if (sheet.display) {
              return {
                ...sheet,
                display: false
              }
            }
            return sheet;
          })

          setTwistedCount(0);
          setSession(
            {
              ...session,
              retries: session.retries + 1,
              game: {
                ...session.game,
                sheets: updatedSession
              }
            }
          );
        }
          , 1500)
      }
    }
  }, [setSession, twistedCount, session, session.game.sheets])

  useEffect(() => {
    localStorage.setItem('memoTestSessions', JSON.stringify([session]));
  }, [session])

  const handleClick = (index: number) => {
    if (twistedCount < 2) {
      const updatedSession = session.game.sheets.map((sheet: Sheet, i: number) => {
        if (i === index) {
          return {
            ...sheet,
            display: !sheet.display
          }
        }
        return sheet;
      })

      setSession(
        {
          ...session,
          game: {
            ...session.game,
            sheets: updatedSession
          }
        }
      );
    }
  }

  return (
    <div className='flex flex-row flex-wrap gap-4'>
      {
        session?.game?.sheets?.map((sheet, index) => (
          <GameSheet
            key={sheet.key}
            image={sheet.image}
            order={sheet.key}
            display={
              sheet.checked
                ? true
                : sheet.display
                  ? true
                  : false
            }
            onClick={() => handleClick(index)} />
        ))
      }
    </div>
  )
}

