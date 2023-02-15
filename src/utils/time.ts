function curTime() {
	return new Date();
}

export function chatTimeFormat() {
	const time = curTime();
	const hour = time.getHours();
	const min = (time.getMinutes() + '').padStart(2, '0');

	return `${hour > 12 ? hour - 12 : hour}:${min} ${hour >= 12 ? 'PM' : 'AM'}`;
}

export function videoTimeFormat(sec: number) {
	const floorSec = Math.floor(sec);
	const rMin = Math.floor(floorSec / 60);
	const rSec = ((floorSec % 60) + '').padStart(2, '0');
	return `${rMin}:${rSec}`;
}
