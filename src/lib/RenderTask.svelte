<script lang="ts">
	export let task: any;

	let showDetail = false;
	function toggleDetail() {
		showDetail = !showDetail;
	}

	const playType = (task.data.is_live || 'auto') as 'past' | 'live' | 'auto';
</script>

<!-- {JSON.stringify(task)} -->
<div
	class="flex flex-col justify-between overflow-hidden rounded-2xl shadow-sm shadow-gray-300 hover:shadow-telegram"
>
	<button on:click={toggleDetail} class="flex bg-white flex-col gap-1 justify-between p-4">
		<div class="flex w-full justify-between">
			<p class="text-gray-900 font-bold text-lg">
				#{task.id}
			</p>

			<div class="flex bg-orange-500 p-1 rounded-md text-white">
				<span>{task.status === 0 ? 'pending' : task.status === 1 ? 'running' : 'stopped'}</span>
			</div>
		</div>

		<div class="flex w-full justify-between">
			<div class="text-gray-600">Created At</div>

			<div class="flex p-1 rounded-md text-gray-900">
				<span>{task.created}</span>
			</div>
		</div>
	</button>
	{#if showDetail}
		<div
			class="border-t border-gray-300 bg-white text-lg flex flex-col gap-2 w-full p-4 text-gray-600 [&_p]:font-bold [&_p]:text-gray-900"
		>
			<div class="flex justify-between">
				Play Type
				<span
					class={'text-center text-white w-[100px] rounded-md ' +
						(playType === 'past'
							? 'bg-orange-400'
							: playType === 'auto'
							? 'bg-blue-400'
							: 'bg-green-400')}
				>
					{playType}
				</span>
			</div>

			{#if playType === 'past'}
				<div class="flex justify-between">
					Start Date
					<p>{new Date(task.data.from_date).toLocaleString()}</p>
				</div>
			{:else if playType === 'live'}
				<div class="flex justify-between">
					Default Wait
					<p>{task.data.wait_time || 0} Seconds</p>
				</div>
			{/if}

			<div class="flex justify-between">
				From Group
				<p>@{task.data.from_group}</p>
			</div>
			<div class="flex justify-between">
				Share To Groups
				<div class="flex flex-col">
					{#each task.data.to_groups as group, _}
						<p>@{group}</p>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
