<script lang="ts">
	let messages: { name: string; msgs: string }[] = [
		{
			name: 'Jackson',
			msgs: 'Hello dear friend'
		}
	];

	function addMsg() {
		messages = [...messages, { name: 'New User', msgs: '' }];
	}
</script>

<div class="w-full h-[900px] flex-col bg-white flex p-6 gap-2">
	<div class="flex-1 overflow-y-scroll flex flex-col">
		{#each messages as msg, _}
			<div
				class={'flex flex-col shadow-sm relative p-4 shadow-gray-300 max-w-sm rounded-xl w-full ' +
					(_ % 2 !== 0 ? 'self-end' : 'self-start')}
			>
				<h1 class="text-xl text-gray-900 mb-4">{msg.name}</h1>
				<p
					contenteditable="true"
					placeholder="write your message"
					class="w-full h-fit resize-none rounded-2xl text-gray-600 border-none outline-none bg-inherit"
				>
					{msg.msgs}
				</p>
			</div>
		{/each}
	</div>
	<div class="w-full flex mt-4 j
	ustify-center align-middle place-items-center">
		<button on:click={addMsg} class=" bg-green-400 text-white p-2 rounded-md">Add Message</button>
	</div>
</div>
