<script lang="ts">
	export let title: string;
</script>

<div class="flex border p-4 py-8 rounded-md border-telegram bg-white">
	<!-- <img src={First} alt="" class="w-[100px] aspect-square" /> -->
	<div class="flex flex-col text-gray-500">
		<h2 class="text-telegram text-2xl font-semibold mb-4">{title}</h2>
		<p class="text-lg">
			<slot />
		</p>
	</div>
</div>
