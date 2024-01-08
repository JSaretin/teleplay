<script lang="ts">
	import type { Plan, User } from '$lib/structure';
	import { onMount, setContext } from 'svelte';
	import '../app.css';
	import { writable, type Writable } from 'svelte/store';
	import { pb } from '$lib';

	const user: Writable<User> = writable();

	const plans: Plan[] = [
		{
			name: 'Basic',
			description: 'This plan allows you post up to 1,000 messages',
			price: 9.99,
			meta: {}
		},
		{
			name: 'Silver',
			description: 'This plan allows you post up to 1,000 messages',
			price: 39.99,
			meta: {}
		},
		{
			name: 'Gold',
			description: 'This plan allows you post up to 1,000 messages',
			price: 89.99,
			meta: {}
		}
	];

	onMount(async () => {
		try {
			const currentUser = await pb.collection('users').authRefresh();
			console.log(currentUser);
			if (currentUser !== undefined) {
				$user = currentUser;
			}
		} catch (e) {
			return;
		}
	});

	setContext('user', user);
	setContext('plans', plans);
</script>

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
					<a href="/" class="p-2 inline-block">Terms</a>
				</li>
			</ul>

			<ul
				class="flex justify-end gap-4 flex-1 text-white align-middle place-items-end text-sm ml-6"
			>
				<li class="flex-1">
					<button
						class="border-2 border-white hover:bg-white hover:text-telegram text-white p-1 rounded-2xl w-full"
						>Register</button
					>
				</li>
				<li class="flex-1">
					<button
						class="border-2 border-white hover:bg-telegram hover:text-white bg-white text-telegram p-1 rounded-2xl w-full"
						>Login</button
					>
				</li>
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
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec turpis ac risus.</p>
			</div>
			<div class="mb-4">
				<h4 class="text-xl font-bold mb-4">Quick Links</h4>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Services</a></li>
					<li><a href="#">Products</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
			<div class="mb-4">
				<h4 class="text-xl font-bold mb-4">Contact Us</h4>
				<p>Email: info@example.com</p>
				<p>Phone: +123 456 7890</p>
			</div>
			<div class="mb-4">
				<h4 class="text-xl font-bold mb-4">Follow Us</h4>
				<div class="flex space-x-4">
					<a href="#" class="text-white hover:text-gray-400">
						<i class="fab fa-facebook" />
					</a>
					<a href="#" class="text-white hover:text-gray-400">
						<i class="fab fa-twitter" />
					</a>
					<a href="#" class="text-white hover:text-gray-400">
						<i class="fab fa-instagram" />
					</a>
					<a href="#" class="text-white hover:text-gray-400">
						<i class="fab fa-linkedin" />
					</a>
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
