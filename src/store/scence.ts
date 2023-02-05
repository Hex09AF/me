import { writable } from 'svelte/store';

const SCENCE = {
	INTRO: 'Intro',
	TECH: 'Learning',
	REST: 'Stretch nyan',
	ANIME: 'Watching anime',
	CREDIT: 'Credit'
};

export const currentScence = writable(SCENCE.INTRO);

export { SCENCE };
