<script>
	import VideoTutorial from './VideoTutorial.svelte';
	import Chat from '$lib/illustrate/images/chat.png';

	import Right from './illustrate/Right.svelte';
</script>

<div
	class="w-full min-h-[600px] flex justify-center align-middle place-items-center font-Lato bg-gradient-to-br to-gray-900 from-telegram py-10"
>
	<div
		class="max-w-7xl flex-col lg:flex-row flex w-full mx-auto p-4 gap-6 justify-between place-items-center align-middle"
	>
		<div class="mb-6 lg:mb-0 max-w-xl lg:pl-6 w-full lg:border-l-2">
			<h1 class="text-5xl font-semibold text-white lg:leading-tight">
				Keep your buisness alive by keeping your telegram community active.
			</h1>
			<p class="text-white mt-4">
				Teleplay allows you to keep your telegram community active by creating a drama-like
				interaction that stimulate real user to take part in group activities and boost your product
				engagement.
			</p>
			<a
				href="/register"
				class="border-2 group max-w-[250px] flex align-middle place-items-center justify-between w-full text-center border-white hover:border-telegram text-white hover:bg-telegram mt-8 p-4 rounded-2xl text-xl"
				>Trend Your Brand <Right /></a
			>
		</div>

		<VideoTutorial />
	</div>
</div>
