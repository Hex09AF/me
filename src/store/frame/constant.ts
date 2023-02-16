const TOTAL_TIME = 50;
const TOTAL_FRAME = 4;
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
	REST: {
		start: SECOND_PER_FRAME * 2,
		finish: SECOND_PER_FRAME * 3,
		name: 'Stretch nyan'
	},
	CREDIT: {
		start: SECOND_PER_FRAME * 3,
		finish: SECOND_PER_FRAME * 4,
		name: 'Credit'
	}
};

type KeyFrameInfo = keyof typeof FRAME_INFO;

export { FRAME_INFO, TOTAL_TIME, TOTAL_FRAME, SECOND_PER_FRAME, KeyFrameInfo };
