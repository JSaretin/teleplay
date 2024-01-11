<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Plan, User } from '$lib/structure';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const user: Writable<User> = getContext('user');
	const plans: Writable<Plan[]> = getContext('plans');

	const showDeposit: (a: number) => void = getContext('showDeposit');

	async function deposit(plan: Plan) {
		if ($user === undefined) {
			await goto('/login');
			return;
		}
		showDeposit(plan.price);
	}
</script>

{#each $plans as plan, _}
	<div class="rounded-md overflow-hidden shadow-md shadow-gray-300 bg-white">
		<h3
			class="text-2xl text-center uppercase bg-gray-600 text-white p-3 backdrop-blur-md backdrop-filter bg-opacity-90"
		>
			{plan.name}
		</h3>

		<div class="p-6">
			<div class="my-4">
				<p class="text-2xl text-center font-bold text-gray-700">${plan.price}/month</p>
			</div>

			<p class="text-gray-700 leading-relaxed mb-4">
				{@html plan.description}
			</p>

			<button
				on:click={async () => {
					await deposit(plan);
				}}
				class="w-full p-3 rounded-md bg-telegram text-white text-lg">subscribe</button
			>
		</div>
	</div>
{/each}
