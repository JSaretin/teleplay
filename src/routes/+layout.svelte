<script lang="ts">
	import type { Plan, User } from '$lib/structure';
	import { onMount, setContext } from 'svelte';
	import '../app.css';
	import { writable, type Writable } from 'svelte/store';
	import { pb } from '$lib';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import MobileBugger from '$lib/MobileBugger.svelte';

	export let data: { plans: Plan[] };

	const user: Writable<User | undefined> = writable();
	const plans: Writable<Plan[]> = writable(data.plans);
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
			if (pb.authStore.token && pb.authStore.isValid) {
				const collection = pb.collection('users');
				$user = (<unknown>(await collection.authRefresh()).record) as User;
			}
		} catch (e) {
			pb.authStore.clear();
			return;
		}

		$loading = false;
	});

	let deferredInstallEvent: any;

	onMount(() => {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			deferredInstallEvent = e;
		});
	});

	async function handleInstall() {
		deferredInstallEvent.prompt();
		let choice = await deferredInstallEvent.userChoice;
		if (choice.outcome === 'accepted') {
			// User accepted to install the application
		} else {
			// User dismissed the prompt
		}
		deferredInstallEvent = undefined;
	}

	let menuIsOpen = false;

	function toggleMenu() {
		menuIsOpen = !menuIsOpen;
	}
</script>

<svelte:head>
	<title>TelePlay | Create Group Drama</title>
</svelte:head>

{#if deferredInstallEvent}
	<div
		class="sm:hidden bg-opacity-90 backdrop-blur-sm bg-telegram rounded-t-2xl z-50 fixed bottom-0 flex flex-col justify-center align-middle left-0 w-full p-4"
	>
		<p class="text-white text-lg italic text-center mb-2">
			install app for easy access and management
		</p>
		<button class="rounded-md p-2 text-white bg-green-400" on:click={handleInstall}>Install</button>
	</div>
{/if}

<div
	class="sticky z-50 top-0 left-0 bg-opacity-90 backdrop-blur-sm w-full bg-telegram font-lato shadow-md shadow-white"
>
	<div
		class="max-w-7xl w-full mx-auto flex py-4 px-6 justify-between align-middle place-items-center"
	>
		<a href="/" class="flex-1">
			<h1 class="text-white uppercase font-bold text-2xl">TelePlay</h1></a
		>

		<MobileBugger bind:isOpen={menuIsOpen} on:click={toggleMenu} />
		<div class={'flex-[2] hidden lg:flex'}>
			<ul class="flex justify-around flex-1 text-white font-semibold h-fit">
				<li>
					<a href="/" class="p-2 inline-block">Home</a>
				</li>
				<li>
					<a href="/#about" class="p-2 inline-block">About</a>
				</li>
				<li>
					<a href="/#plans" class="p-2 inline-block">Plans</a>
				</li>
				<li>
					<a href="/#faqs" class="p-2 inline-block">Faqs</a>
				</li>
			</ul>

			<div class="max-w-sm w-full flex justify-end">
				<div
					class="flex max-w-[300px] w-full gap-6 [&_*]:w-1/2 [&_*]:border-2 [&_*]:border-white [&_*]:rounded-2xl [&_*]:text-center [&_*:hover]:bg-white [&_*:hover]:text-telegram [&_*]:flex [&_*]:justify-center [&_*]:align-middle [&_*]:place-items-center [&_*]:text-white"
				>
					{#if $user !== undefined}
						<a href="/dashboard">Dasboard</a>
						<button on:click|preventDefault={logout} class="hover:bg-yellow-500">Logout</button>
					{:else}
						<a href="/register">Register</a>
						<a href="/login">Login</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
<slot />

{#if !$page.url.pathname.includes('dashboard')}
	<footer class="bg-gray-800 text-white p-8">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div class="mb-4">
					<h4 class="text-xl font-bold mb-4">About Us</h4>
					<p>
						TelePlay is an advanced software designed to revolutionize your Telegram group
						management experience.
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
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
	:global(*, input, button) {
		font-family: theme(fontFamily.Lato);
	}
</style>
