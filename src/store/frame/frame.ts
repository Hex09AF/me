import { linear } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { derived } from 'svelte/store';
import { FRAME_INFO, TOTAL_TIME } from './constant';

function createFrameSecond() {
	const { subscribe, set, update } = tweened(0, {
		duration: TOTAL_TIME * 1000,
		easing: linear
	});

	const scenceAr = Object.keys(FRAME_INFO);
	const timePerScence = TOTAL_TIME / scenceAr.length;
	const ratio = 1 / timePerScence;

	return {
		subscribe,
		set,
		update,
		scaleInfo(second: number, index: number) {
			return Math.max(0, Math.min(second - timePerScence * index, timePerScence)) * ratio;
		},
		handleClickProgress(index: number, calSec: number) {
			const curSec = index * timePerScence + calSec;
			set(curSec, {
				duration: 0
			});
			set(TOTAL_TIME, {
				duration: (TOTAL_TIME - curSec) * 1000,
				easing: linear
			});
		}
	};
}

export const frameSecond = createFrameSecond();

export const frame = derived(frameSecond, ($frameSecond) => {
	const frameKeys = Object.keys(FRAME_INFO);

	for (const key of frameKeys) {
		const frame = FRAME_INFO[key as keyof typeof FRAME_INFO];
		if ($frameSecond <= frame.finish) {
			return frame.name;
		}
	}

	return FRAME_INFO.INTRO.name;
});
