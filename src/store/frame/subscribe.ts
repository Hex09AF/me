import { writable } from 'svelte/store';
import { LSKey } from '../../declares/interfaces/local-storage';
import { LSService } from '../../utils/local-storage';

function createIsSubscribe() {
	const { subscribe, set, update } = writable(
		LSService.getInstance().getKey(LSKey.IsSubscribe) === 'true' ? true : false
	);

	subscribe((value) => {
		LSService.getInstance().setKey(LSKey.IsSubscribe, value + '');
	});

	return {
		subscribe,
		set,
		update,
		subscribed() {
			update((isSubscribe) => !isSubscribe);
		}
	};
}

export const isSubscribe = createIsSubscribe();
