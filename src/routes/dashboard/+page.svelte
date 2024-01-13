<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { pb } from '$lib';
	import CreateTask from '$lib/CreateTask.svelte';
	import RenderTask from '$lib/RenderTask.svelte';
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

	$: createTask = $page.url.hash == '#newtask';

	async function gotoHash(hash: string) {
		if ($page.url.hash == `#${hash}`) return;
		const url = new URL($page.url);
		url.hash = hash;
		await goto(url.href);
	}

	async function hideCreateTask() {
		await gotoHash('');
	}
	async function showCreateTask() {
		await gotoHash('newtask');
	}
</script>

{#if createTask}
	<CreateTask
		on:newtask={async (event) => {
			tasks = [event.detail, ...tasks];
			await hideCreateTask();
		}}
		on:click={hideCreateTask}
	/>
{:else if $user !== undefined}
	<div class="mx-auto flex-1 p-6">
		<div class="flex flex-col gap-4">
			<h2 class="font-bold text-3xl text-gray-900 mb-10">User Stats</h2>
			<div class="flex w-full flex-wrap gap-4 lg:gap-6">
				<div
					class="rounded-2xl lg:max-w-[300px] lg:aspect-video bg-white p-6 flex flex-col justify-between align-middle place-items-center overflow-hidden shadow-sm shadow-gray-300 flex-1"
				>
					<div class="text-center">
						<p class="text-gray-400">Current Plan</p>
						<h2 class="text-3xl text-gray-900">{$user.plan?.name || 'None'}</h2>
					</div>
					<a
						href="/#plans"
						class=" w-full text-center mt-6 text-green-500 border border-green-500 hover:bg-green-500 hover:text-white p-2 rounded-md"
						>Upgrade Plan</a
					>
				</div>

				<div
					class="rounded-2xl lg:max-w-[300px] lg:aspect-video bg-white p-6 flex flex-col justify-between align-middle place-items-center overflow-hidden shadow-sm shadow-gray-300 flex-1"
				>
					<div class="text-center">
						<p class="text-gray-400">Custom Plays</p>
						<h2 class="text-3xl text-gray-900">{tasks.length}</h2>
					</div>
					<button
						on:click={showCreateTask}
						class=" w-full mt-6 text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white p-2 rounded-md"
						>Create Play</button
					>
				</div>

				<div
					class="rounded-2xl lg:max-w-[300px] lg:aspect-video bg-white p-6 flex flex-col justify-between align-middle place-items-center overflow-hidden shadow-sm shadow-gray-300 w-full"
				>
					<div class="text-center">
						<p class="text-gray-400">Created Plays</p>
						<h2 class="text-3xl text-gray-900">{tasks.length}</h2>
					</div>
					<button
						on:click={showCreateTask}
						class=" w-full mt-6 text-telegram border border-telegram hover:bg-telegram hover:text-white p-2 rounded-md"
						>Create Play</button
					>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-4 my-20">
			<h2 class="font-bold text-3xl text-gray-900 mb-10">Running Instances</h2>
			{#if tasks.length == 0}
				<div class="flex bg-white shadow-sm shadow-gray-300 p-4 rounded-md">
					<p class="italic text-center text-gray-500 w-full">no service running</p>
				</div>
			{:else}
				<div class="w-full flex flex-col gap-3">
					{#each tasks as task (task.id)}
						<RenderTask {task} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}
