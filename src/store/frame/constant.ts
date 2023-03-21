const TOTAL_TIME = 50;
const TOTAL_FRAME = 3;
const SECOND_PER_FRAME = TOTAL_TIME / TOTAL_FRAME;

const FRAME_INFO = {
	INTRO: {
		start: 0,
		finish: SECOND_PER_FRAME,
		name: 'Intro'
	},
	LEARNING: {
		start: SECOND_PER_FRAME,
		finish: SECOND_PER_FRAME * 2,
		name: 'Learning'
	},
	CREDIT: {
		start: SECOND_PER_FRAME * 2,
		finish: SECOND_PER_FRAME * 3,
		name: 'Credit'
	}
};

type KeyFrameInfo = keyof typeof FRAME_INFO;

export type { KeyFrameInfo };

export { FRAME_INFO, TOTAL_TIME, TOTAL_FRAME, SECOND_PER_FRAME };
