<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { pb } from '$lib';
	import type { User } from '$lib/structure';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const user: Writable<User> = getContext('user');
	const loading: Writable<boolean> = getContext('loading');

	const checkAuth = async () => {
		if ($user === undefined) {
			await goto(`/login?next=${$page.url.pathname}`);
			return;
		}

		try {
			await pb.collection('users').subscribe($user.id, async (data) => {
				$user = { ...$user, ...data.record };
			});
		} catch (e) {}
	};

	let checkedAuth = false;
	$: if (!checkedAuth && !$loading) {
		checkedAuth = true;
		checkAuth();
	}
</script>

<div class="max-w-4xl w-full mx-auto bg-white relative min-h-[100vh] overflow-hidden p-4">
	{#if $loading}
		<div class="w-full h-[100vh] flex justify-center align-middle place-items-center">
			loading...
		</div>
	{:else}
		<slot />
	{/if}
</div>
