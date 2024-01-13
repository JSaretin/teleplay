<script lang="ts">
	import type { Plan, User } from '$lib/structure';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const user: Writable<User | undefined> = getContext('user');
	const plans: Writable<Plan[]> = getContext('plans');
</script>

{#each $plans as plan, _}
	<div class="rounded-2xl p-6 overflow-hidden shadow-md shadow-gray-300 bg-white lg:max-w-[350px]">
		<div class="flex align-middle place-items-center">
			<h3
				class="text-xl uppercase text-gray-900 font-bold p-3 backdrop-blur-md backdrop-filter bg-opacity-90"
			>
				{plan.name}
			</h3>
			{#if plan.recomend}
				<span class="bg-gray-900 text-white rounded-full h-fit px-4 font-bold">Recomended</span>
			{/if}
		</div>

		<div class="flex flex-col gap-4">
			<p class="text-3xl text-center font-bold text-gray-900">
				<span class="text-4xl">$</span>{plan.price}<span class="text-sm font-normal"
					>/ per month</span
				>
			</p>

			<p class="text-center text-gray-600 flex-1 leading-relaxed mb-4">
				{@html plan.description}
			</p>

			{#if $user !== undefined}
				<a
					href={`/subscribe-${$user.id}-${plan.id}`}
					class="w-full inline-block text-center text-xl p-3 rounded-2xl border-gray-900 border-2 hover:bg-gray-900 text-gray-900 hover:text-white"
					>subscribe</a
				>
			{:else}
				<a
					href={`/login?next=/#plans`}
					class="w-full inline-block text-center text-xl p-3 rounded-2xl border-gray-900 border-2 hover:bg-gray-900 text-gray-900 hover:text-white"
					>subscribe</a
				>
			{/if}
		</div>
	</div>
{/each}
