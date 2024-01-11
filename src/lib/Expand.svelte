<script lang="ts">
	export let isExpand: boolean;
</script>

{#if isExpand}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-red-500 w-6 h-6">
		<path
			fill-rule="evenodd"
			d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
			clip-rule="evenodd"
		/>
	</svg>
{:else}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-telegram w-6 h-6">
		<path
			fill-rule="evenodd"
			d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
			clip-rule="evenodd"
		/>
	</svg>
{/if}
