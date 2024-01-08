<script lang="ts">
	import { pb } from '$lib';
	import CreateTask from '$lib/CreateTask.svelte';
	import RenderPlans from '$lib/Plans/RenderPlans.svelte';
	import PopUpPlans from '$lib/PopUpPlans.svelte';
	import type { User } from '$lib/structure';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const user: Writable<User> = getContext('user');
	let tasks: any = [];
	let loadedTasks = false;

	$: if (!loadedTasks && $user !== undefined) {
		loadedTasks = true;
		setTimeout(async () => {
			try {
				tasks = await pb.collection('tasks').getFullList({ filter: `user="${$user.id}"` });
			} catch (e) {}
		});
	}

	let createTask: boolean;

	function hideCreateTask() {
		createTask = false;
	}
	function showCreateTask() {
		createTask = true;
	}

	let showPlans = false;

	function displayShowPlan() {
		showPlans = true;
	}
</script>

{#if showPlans}
	<PopUpPlans
		on:click={() => {
			showPlans = false;
		}}
	/>
{/if}

{#if createTask}
	<CreateTask
		on:newtask={(event) => {
			tasks = [event.detail, ...tasks];
			hideCreateTask();
		}}
		on:showplan={displayShowPlan}
		on:click={hideCreateTask}
	/>
{/if}

{#if $user !== undefined}
	<div class="flex flex-col gap-4">
		<h2 class="uppercase bg-telegram p-2 rounded-md text-white font-medium">Stats</h2>
		<div class="grid lg:grid-cols-2 gap-4 text-sm text-gray-500">
			<div
				class="rounded-2xl p-4 flex justify-between align-middle place-items-center overflow-hidden shadow-sm shadow-telegram"
			>
				<div class="">
					<h2>Current Plan</h2>
					<p class="text-3xl text-telegram">{$user.plan?.name || 'None'}</p>
				</div>
				<button
					on:click={displayShowPlan}
					class="text-green-500 border border-green-500 hover:bg-green-500 hover:text-white p-1 rounded-md"
					>upgrade</button
				>
			</div>
			<div
				class="rounded-2xl p-4 flex justify-between align-middle place-items-center overflow-hidden shadow-sm shadow-telegram"
			>
				<div class="">
					<h2>Active Instances</h2>
					<p class="text-3xl text-telegram">{tasks.length}</p>
				</div>
				<button
					class="text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white p-1 rounded-md"
					on:click={showCreateTask}>start play</button
				>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-4 mt-8">
		<h2 class="uppercase bg-telegram p-2 rounded-md text-white font-medium">Running Services</h2>
		{#if tasks.length == 0}
			<div class="flex bg-gray-200 p-4 rounded-md">
				<p class="italic text-center text-gray-500">no service running</p>
			</div>
		{:else}
			<div class="w-full flex flex-col gap-3">
				{#each tasks as task (task.id)}
					<button
						class="flex flex-col gap-1 border border-telegram justify-between bg-white p-2 rounded-md shadow-sm shadow-telegram"
					>
						<div class="flex w-full justify-between">
							<div class="text-telegram">
								#{task.id}
							</div>

							<div class="flex bg-orange-500 p-1 rounded-md text-sm text-white">
								<span
									>{task.status === 0 ? 'pending' : task.status === 1 ? 'running' : 'stopped'}</span
								>
							</div>
						</div>

						<div class="flex w-full justify-between">
							<div class="text-telegram">
								<!-- {task.id} -->
							</div>

							<div class="flex p-1 rounded-md text-sm text-gray-700">
								<span>{task.created}</span>
							</div>
						</div>
					</button>
				{/each}
			</div>
		{/if}
	</div>
{/if}
