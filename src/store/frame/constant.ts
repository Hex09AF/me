const TOTAL_TIME = 62;

const FRAME_INFO = {
	INTRO: {
		sceneTime: 7,
		start: 0,
		finish: 7,
		name: 'Intro'
	},
	ABOUT: {
		sceneTime: 20,
		start: 7,
		finish: 27,
		name: 'About me'
	},
	LEARNING: {
		sceneTime: 15,
		start: 27,
		finish: 42,
		name: 'Learning'
	},
	CREDIT: {
		sceneTime: 20,
		start: 42,
		finish: 62,
		name: 'Credit'
	}
};

type KeyFrameInfo = keyof typeof FRAME_INFO;

export type { KeyFrameInfo };

export { FRAME_INFO, TOTAL_TIME };
