export default function wait(waitTime: number) {
	return new Promise<void>((res) => {
		setTimeout(() => {
			res();
		}, waitTime);
	});
}
