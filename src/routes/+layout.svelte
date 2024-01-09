<script lang="ts">
	import type { Plan, User } from '$lib/structure';
	import { onMount, setContext } from 'svelte';
	import '../app.css';
	import { writable, type Writable } from 'svelte/store';
	import { pb } from '$lib';
	import { goto } from '$app/navigation';
	import GenerateDeposit from '$lib/Payment/GenerateDeposit.svelte';
	import { env } from '$env/dynamic/public';
	import { page } from '$app/stores';

	const user: Writable<User | undefined> = writable();
	const plans: Writable<Plan[]> = writable([]);
	const loading: Writable<boolean> = writable(true);

	setContext('user', user);
	setContext('plans', plans);
	setContext('loading', loading);

	function setPlan() {
		if ($user === undefined) return;
		$user.plan = $plans.filter((p) => p.id == $user!.current_plan).shift() || {};
	}

	let updatedPlan = false;

	$: if (!updatedPlan && $user !== undefined) {
		updatedPlan = true;
		setPlan();
	}

	async function logout() {
		pb.authStore.clear();
		$user = undefined;
		await goto('/');
	}

	onMount(async () => {
		try {
			$plans = await pb.collection('plans').getFullList();
		} catch {}
		try {
			if (pb.authStore.token && pb.authStore.isValid) {
				const collection = pb.collection('users');
				$user = (<unknown>(await collection.authRefresh()).record) as User;
			}
		} catch (e) {
			return;
		}

		$loading = false;
	});

	let wantToDeposit: boolean = false;
	let amount: number;

	const hideDeposit = async () => {
		wantToDeposit = false;
	};

	function showDeposit(value: number) {
		amount = value;
		wantToDeposit = true;
	}
	setContext('showDeposit', showDeposit);

	const siteErcAddress = env.PUBLIC_SITE_ADDRESS;
</script>

{#if wantToDeposit}
	<GenerateDeposit
		{amount}
		on:click={hideDeposit}
		address={{
			bep20: siteErcAddress,
			erc20: siteErcAddress,
			eth: siteErcAddress,
			polygon: siteErcAddress
		}}
		allowedCoins={[
			'eth',
			'erc20/usdt',
			'bep20/usdt',
			'erc20/busd',
			'bep20/busd',
			'erc20/usdc',
			'bep20/usdc',
			'erc20/tusd',
			'bep20/bnb',
			'bep20/cake',
			'bep20/btcb',
			'bep20/dai',
			'bep20/ltc',
			'polygon/matic'
		]}
	/>
{/if}

<div class="w-full bg-telegram font-lato border-b-2 border-white">
	<div
		class="max-w-4xl w-full mx-auto flex py-4 px-6 justify-between align-middle place-items-center"
	>
		<a href="/" class="flex-1"> <h1 class="text-white uppercase font-bold">TelePlay</h1></a>
		<div class="flex-[2] hidden lg:flex">
			<ul class="flex justify-between flex-1 text-white text-sm h-fit">
				<li>
					<a href="/" class="p-2 inline-block">Home</a>
				</li>
				<li>
					<a href="/" class="p-2 inline-block">About</a>
				</li>
				<li>
					<a href="/" class="p-2 inline-block">How to Use</a>
				</li>
				<li>
					<a href="/terms" class="p-2 inline-block">Terms</a>
				</li>
			</ul>

			<ul
				class="flex justify-end gap-4 flex-1 text-white align-middle place-items-end text-sm ml-6"
			>
				{#if $user !== undefined}
					<li class="">
						<a
							href="/dashboard"
							class="border-2 inline-block text-center border-white hover:bg-white hover:text-telegram text-white p-1 px-4 rounded-2xl"
							>Dasboard</a
						>
					</li>
					<li class="">
						<button
							on:click={logout}
							class="border-2 inline-block text-center border-red-200 hover:bg-red-200 hover:text-telegram text-red-200 p-1 px-4 rounded-2xl"
							>Logout</button
						>
					</li>
				{:else}
					<li class="flex-1">
						<a
							href="/register"
							class="border-2 inline-block text-center border-white hover:bg-white hover:text-telegram text-white p-1 rounded-2xl w-full"
							>Register</a
						>
					</li>
					<li class="flex-1">
						<a
							href="/login"
							class="border-2 inline-block text-center border-white hover:bg-telegram hover:text-white bg-white text-telegram p-1 rounded-2xl w-full"
							>Login</a
						>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</div>
<slot />

<footer class="bg-gray-800 text-white p-8">
	<div class="max-w-6xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="mb-4">
				<h4 class="text-xl font-bold mb-4">About Us</h4>
				<p>
					TelePlay is an advanced software designed to revolutionize your Telegram group management
					experience.
				</p>
			</div>
			<div class="mb-4">
				<h4 class="text-xl font-bold mb-4">Quick Links</h4>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/terms">Terms</a></li>
				</ul>
			</div>
			<div class="mb-4">
				<h4 class="text-xl font-bold mb-4">Contact Us</h4>
				<p>Email: support@{$page.url.hostname}</p>
			</div>
			<div class="mb-4">
				<h4 class="text-xl font-bold mb-4">Follow Us</h4>
				<div class="flex space-x-4">
					<!-- socials -->
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
	:global(*, input, button) {
		font-family: theme(fontFamily.Lato);
	}
</style>
