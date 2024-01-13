<script lang="ts">
	import Close from './Icons/Close.svelte';
</script>

<div class="lg:max-w-[500px] w-full rounded-2xl p-4 bg-white shadow-sm lg:shadow-telegram relative">
	<button class="absolute top-0 right-0 p-2 fill-red-500" on:click>
		<Close />
	</button>
	<h2 class="text-2xl mb-4 text-telegram"><slot name="title" /></h2>
	<div class="max-h-[600px] overflow-y-scroll">
		<slot />
	</div>
</div>
