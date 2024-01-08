<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib';
	import type { User } from '$lib/structure';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const loading: Writable<boolean> = getContext('loading');
	const user: Writable<User> = getContext('user');

	let feedback: string | undefined;

	let email: string;
	let password: string;
	let passwordConfirm: string;

	let created: boolean;
	let creating = false;

	async function register() {
		if (creating) return;
		creating = true;
		feedback = undefined;
		const userEmail = email.toLowerCase();
		const collection = pb.collection('users');
		try {
			await collection.create({
				email: userEmail,
				password,
				passwordConfirm
			});
			await collection.requestVerification(userEmail);
			created = true;
		} catch (e: any) {
			feedback = e.message;
		}
		creating = false;
	}

	let checkedAuth = false;
	$: if (!checkedAuth && !$loading && $user !== undefined) {
		checkedAuth = true;
		goto('/dashboard');
	}
</script>

<div class="w-full h-screen flex justify-center align-middle place-items-center">
	{#if created}
		<div class="max-w-[300px] p-4 shadow-sm shadow-telegram">
			<p>
				Your account has been created, check your email for confirmation link to verify your account
				and <a href="/login" class="text-telegram">login</a>
			</p>
		</div>
	{:else}
		<form
			on:submit|preventDefault={register}
			class="flex max-w-[300px] w-full bg-white rounded-2xl shadow-sm shadow-gray-400 flex-col gap-4 p-4 relative"
		>
			{#if feedback !== undefined}
				<div
					class="absolute text-sm rounded-md top-0 left-0 -translate-y-[115%] p-2 bg-red-400 bg-opacity-30 text-gray-900 w-full"
				>
					{feedback}
				</div>
			{/if}
			<label class="flex flex-col gap-2">
				email
				<input required bind:value={email} type="email" class="bg-gray-100 p-1 rounded-md" />
			</label>
			<label class="flex flex-col gap-2">
				password
				<input required bind:value={password} type="password" class="bg-gray-100 p-1 rounded-md" />
			</label>
			<label class="flex flex-col gap-2">
				confirm password
				<input
					required
					bind:value={passwordConfirm}
					type="password"
					class="bg-gray-100 p-1 rounded-md"
				/>
			</label>

			<button
				disabled={creating}
				type="submit"
				class="p-2 w-full rounded-md bg-yellow-400 hover:bg-yellow-500 text-white"
				>{creating ? 'Creating' : 'Register'}</button
			>

			<div class="mt-4 text-sm text-gray-500">
				<p>Already have an account? <a href="/login" class="text-blue-500">Login</a></p>
			</div>
		</form>
	{/if}
</div>
