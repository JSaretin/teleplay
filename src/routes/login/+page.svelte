<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib';
	import type { User } from '$lib/structure';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	const user: Writable<User> = getContext('user');

	let feedback: string | undefined;

	let email: string;
	let password: string;

	async function login() {
		feedback = undefined;
		try {
			const currentUser = await pb.collection('users').authWithPassword(email, password);
			console.log(currentUser);
			$user = currentUser;
			await goto('/dashboard');
		} catch (e: any) {
			feedback = e.message;
		}
	}

	onMount(async () => {
		if ($user !== undefined) await goto('/dashboard');
	});
</script>

<div class="w-full h-screen flex justify-center align-middle place-items-center">
	<div
		class="flex max-w-[300px] w-full bg-white rounded-2xl shadow-sm shadow-gray-400 flex-col gap-4 p-4 relative"
	>
		{#if feedback !== undefined}
			<div
				class="absolute text-sm rounded-md top-0 left-0 -translate-y-[115%] p-2 bg-red-400 bg-opacity-30 text-gray-900"
			>
				{feedback}
			</div>
		{/if}

		<label class="flex flex-col gap-2">
			email
			<input bind:value={email} type="text" class="bg-gray-100 p-1 rounded-md" />
		</label>
		<label class="flex flex-col gap-2">
			password
			<input bind:value={password} type="password" class="bg-gray-100 p-1 rounded-md" />
		</label>

		<button on:click={login} class="p-2 w-full rounded-md bg-blue-400 hover:bg-blue-500 text-white"
			>login</button
		>
		<div class="mt-4 text-sm text-gray-500">
			<p>Don't have an account? <a href="/register" class="text-blue-500">Register</a></p>
		</div>
	</div>
</div>
