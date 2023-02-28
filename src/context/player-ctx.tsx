/** @format */
import { createContextId } from '@builder.io/qwik';

export const PlayerContext = createContextId<{ src: string; play: boolean }>('player-context');
