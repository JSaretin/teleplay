<ul class="w-full text-gray-600 flex flex-col gap-2 bg-inherit text-sm px-2">
	<li
		class="flex justify-between align-middle place-items-center hover:bg-telegram p-2 bg-inherit transition-colors duration-150 cursor-pointer ease-in rounded-md hover:text-white"
	>
		Bitcoin <img
			class="w-6 aspect-square"
			src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=002"
			alt=""
		/>
	</li>
	<li
		class="flex justify-between align-middle place-items-center hover:bg-telegram p-2 bg-inherit transition-colors duration-150 cursor-pointer ease-in rounded-md hover:text-white"
		on:click={async () => {
			const req = await fetch('/gateway', { method: 'POST' });
			const res = await req.json();
			console.log(res);
		}}
	>
		Ethereum <img
			class="w-6 aspect-square"
			src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002"
			alt=""
		/>
	</li>
	<li
		class="flex justify-between align-middle place-items-center hover:bg-telegram p-2 bg-inherit transition-colors duration-150 cursor-pointer ease-in rounded-md hover:text-white"
	>
		Binance Coin <img
			class="w-6 aspect-square"
			src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=002"
			alt=""
		/>
	</li>
	<li
		class="flex justify-between align-middle place-items-center hover:bg-telegram p-2 bg-inherit transition-colors duration-150 cursor-pointer ease-in rounded-md hover:text-white"
	>
		Matic <img
			class="w-6 aspect-square"
			src="https://cryptologos.cc/logos/matic-network-matic-logo.svg?v=002"
			alt=""
		/>
	</li>
	<li
		class="flex justify-between align-middle place-items-center hover:bg-telegram p-2 bg-inherit transition-colors duration-150 cursor-pointer ease-in rounded-md hover:text-white"
	>
		Tether <img
			class="w-6 aspect-square"
			src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=002"
			alt=""
		/>
	</li>
	<li
		class="flex justify-between align-middle place-items-center hover:bg-telegram p-2 bg-inherit transition-colors duration-150 cursor-pointer ease-in rounded-md hover:text-white"
	>
		Litecoin <img
			class="w-6 aspect-square"
			src="https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=002"
			alt=""
		/>
	</li>
</ul>
<!-- 
<ul class="flex w-full mt-4 justify-between rounded-md border border-telegram overflow-hidden">
	<li class="text-telegram flex-1 p-1 hover:bg-telegram hover:text-white">Coin</li>
	<li class="text-telegram flex-1 p-1 hover:bg-telegram hover:text-white">ERC20</li>
	<li class="text-telegram flex-1 p-1 hover:bg-telegram hover:text-white">BEP20</li>
	<li class="text-telegram flex-1 p-1 hover:bg-telegram hover:text-white">TRC20</li>
</ul> -->
