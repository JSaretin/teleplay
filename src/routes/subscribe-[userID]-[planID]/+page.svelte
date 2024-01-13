<script lang="ts">
	import { page } from '$app/stores';

	export let data: any;
</script>

<h2 class="mb-10 text-gray-900 text-3xl font-bold">Select Coin</h2>

<div class="w-full text-gray-600 flex flex-col gap-2 bg-inherit">
	{#each data.coins as coin, _}
		<a
			href={$page.url.pathname +
				($page.url.pathname.endsWith('/') ? '' : '/') +
				'confirm-payment-' +
				coin.ticker}
			class="w-full"
		>
			<div
				class="flex group w-full justify-between shadow-sm shadow-gray-300 align-middle place-items-center hover:bg-green-400 p-4 bg-inherit transition-colors duration-150 cursor-pointer ease-in rounded-md hover:text-white"
			>
				<span class="whitespace-nowrap"
					>{coin.coin}
					<span class="font-bold"> ({coin.symbol.toUpperCase()})</span></span
				>
				<div class="flex gap-4">
					<span class="text-gray-400 group-hover:text-inherit"
						>({coin.ticker.split('-')[0].toUpperCase()})</span
					>
					<img class="w-6 aspect-square" src={coin.logo} alt="" />
				</div>
			</div>
		</a>
	{/each}
</div>
