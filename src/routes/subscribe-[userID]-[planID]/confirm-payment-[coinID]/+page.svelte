<script lang="ts">
	import Question from '$lib/illustrate/Question.svelte';
	import CopyData from '$lib/CopyData.svelte';
	export let data: any;
</script>

<h2 class="mb-10 text-gray-900 text-3xl font-bold">Pay For Your Order</h2>

<div class="relative flex flex-col gap-4">
	<p class="text-gray-600">
		Scan the QR code, or copy and paste the payment details into your wallet. Your plan will
		automatically update once payment is received.
	</p>
	<div class="flex flex-col justify-center align-middle place-items-center w-full gap-2 my-6">
		<div
			class="w-[150px] aspect-square mx-auto shadow-sm shadow-gray-300 rounded-md overflow-hidden"
		>
			<img
				class="object-cover w-full aspect-square"
				src={`data:image/png;base64,${data.qr_code}`}
				alt="QR Code"
			/>
		</div>
		<!-- <p class="flex align-middle place-items-center text-blue-500 font-semibold gap-2">
			How to pay with crypto <span class="inline-block w-6 aspect-square fill-none stroke-blue-500"
				><Question /></span
			>
		</p> -->
	</div>
	<div class="border-t flex flex-col gap-4 py-4 text-sm [&_p]:text-gray-600">
		<div class="flex flex-col font-bold gap-2">
			Amount
			<div
				class="flex bg-gray-100 rounded-md py-1 px-4 overflow-hidden align-middle place-items-center"
			>
				<p class="flex-1">{data.price} {data.symbol.toUpperCase()}</p>
				<div class="flex gap-2 text-gray-600">
					<CopyData text={data.price} />
				</div>
			</div>
		</div>

		<div class="flex flex-col font-bold gap-2">
			Address
			<div
				class="flex bg-gray-100 rounded-md py-1 px-4 overflow-hidden align-middle place-items-center"
			>
				<p class="flex-1">
					{data.address_in.slice(0, 15)}(...){data.address_in.slice(-15)}
				</p>
				<div class="flex gap-2 text-gray-600">
					<CopyData text={data.address_in} />
				</div>
			</div>
		</div>
	</div>
</div>
