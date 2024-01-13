<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import { goto } from '$app/navigation';
	import Close from './Payment/Icons/Close.svelte';
	import type { Writable } from 'svelte/store';
	import type { User } from './structure';
	import { pb } from '$lib';

	const user: Writable<User> = getContext('user');

	const emitter = createEventDispatcher();

	let isLive: 'past' | 'live';
	let postToGroups: string[] = [];

	let currentGroup: string;
	let fromGroup: string;
	let fromDate: string;
	let waitSeconds: string;

	function addGroup() {
		// if (currentGroup === undefined || Boolean(currentGroup.replaceAll(' ', ''))) return;
		postToGroups = [...postToGroups, currentGroup];
		currentGroup = '';
	}

	async function createTask() {
		if ($user.plan?.id === undefined) {
			await goto('/#plans');
			return;
		}

		let data: any = {
			from_group: fromGroup,
			to_groups: postToGroups,
			is_live: isLive
		};

		if (isLive === 'past') {
			data = { ...data, from_date: new Date(fromDate).getTime(), max_wait: waitSeconds };
		} else {
			data = { ...data, wait_time: waitSeconds };
		}

		try {
			const newTask = await pb.collection('tasks').create({
				user: $user.id,
				data
			});
			emitter('newtask', newTask);
		} catch (e) {
		}
	}

	$: showError = isLive === 'past' && new Date().getTime() <= new Date(fromDate).getTime();
</script>

<div class="max-w-4xl w-full h-full mx-auto bg-white p-4">
	<h2 class="mb-10 text-3xl font-bold text-gray-900">Create Play</h2>
	<div class="">
		<div class="gap-4 flex flex-col w-full h-fit">
			<div class="flex flex-col">
				From Group
				<input
					type="text"
					bind:value={fromGroup}
					class="p-2 rounded-md bg-gray-100 shadow-sm shadow-gray-300"
					placeholder="@awesomegroup"
				/>
			</div>
			<div class="flex flex-col">
				Monitor Type
				<select class="p-2 rounded-md" bind:value={isLive}>
					<option value="live">Live Messages</option>
					<option value="past">Past Messages</option>
				</select>
			</div>

			{#if isLive === 'past'}
				<div class="flex flex-col">
					From Date
					<input
						type="datetime-local"
						bind:value={fromDate}
						class={'p-2 rounded-md bg-gray-100 shadow-sm shadow-gray-300 w-full ' +
							(showError ? 'border-2 border-red-500' : '')}
					/>
				</div>
				<div class="flex flex-col">
					Max Wait Time (in seconds)
					<input
						bind:value={waitSeconds}
						type="text"
						inputmode="decimal"
						placeholder="600"
						class="p-2 rounded-md bg-gray-100 shadow-sm shadow-gray-300"
					/>
				</div>
			{:else}
				<div class="flex flex-col">
					Wait Time (in seconds)
					<input
						bind:value={waitSeconds}
						type="text"
						inputmode="decimal"
						placeholder="20"
						class="p-2 rounded-md bg-gray-100 shadow-sm shadow-gray-300"
					/>
				</div>
			{/if}

			<div class="">
				Post To
				<ul class="text-gray-600">
					{#each postToGroups as group, _}
						<li>{group}</li>
					{/each}
				</ul>
				<div class="flex rounded-md overflow-hidden">
					<input
						type="text"
						class="flex-1 bg-gray-100 shadow-sm shadow-gray-300 p-2"
						bind:value={currentGroup}
					/>
					<button on:click={addGroup} class="bg-blue-500 text-white px-6">add</button>
				</div>
			</div>

			<button
				disabled={showError}
				on:click={createTask}
				class="bg-green-500 mt-8 p-2 rounded-md text-white">create task</button
			>
		</div>
	</div>
</div>
