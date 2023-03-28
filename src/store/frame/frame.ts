import { linear } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { derived } from 'svelte/store';
import { FRAME_INFO, TOTAL_TIME } from './constant';

function createFrameSecond() {
	const { subscribe, set, update } = tweened(0, {
		duration: TOTAL_TIME * 1000,
		easing: linear
	});

	return {
		subscribe,
		set,
		update,
		scaleInfo(second: number, sceneTime: number, preTime: number) {
			return Math.max(0, Math.min(second - preTime, sceneTime)) * (1 / sceneTime);
		},
		handleClickProgress(curSec: number) {
			set(curSec, {
				duration: 0
			});
			// set(TOTAL_TIME, {
			// 	duration: (TOTAL_TIME - curSec) * 1000,
			// 	easing: linear
			// });
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
