const TOTAL_TIME = 42;
const TOTAL_FRAME = 3;
const SECOND_PER_FRAME = TOTAL_TIME / TOTAL_FRAME;

const FRAME_INFO = {
	INTRO: {
		sceneTime: 7,
		start: 0,
		finish: 7,
		name: 'Intro'
	},
	LEARNING: {
		sceneTime: 15,
		start: 7,
		finish: 22,
		name: 'Learning'
	},
	CREDIT: {
		sceneTime: 20,
		start: 22,
		finish: 42,
		name: 'Credit'
	}
};

type KeyFrameInfo = keyof typeof FRAME_INFO;

export type { KeyFrameInfo };

export { FRAME_INFO, TOTAL_TIME, TOTAL_FRAME, SECOND_PER_FRAME };
