<script>
	import RenderPlans from './Plans/RenderPlans.svelte';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="fixed inset-0 z-30 bg-white bg-opacity-90" on:click|self on:keydown on:keypress>
	<div class="max-w-4xl w-full p-4 gap-4 mx-auto grid grid-cols-3">
		<RenderPlans />
	</div>
</div>
