import { allowedCoins, coins } from '$lib/payment';

export const load = async () => {
	return {
		coins: allowedCoins.map((k) => {
			return {
				...coins[k],
				ticker: k.replace('/', '-')
			};
		})
	};
};
