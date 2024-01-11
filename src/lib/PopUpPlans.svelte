<script>
	import RenderPlans from './Plans/RenderPlans.svelte';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="fixed py-20 inset-0 z-30 bg-white bg-opacity-90 overflow-y-scroll"
	on:click|self
	on:keydown
	on:keypress
>
	<div class="h-fit max-w-4xl w-full p-4 gap-4 mx-auto grid lg:grid-cols-3">
		<RenderPlans />
	</div>
</div>
