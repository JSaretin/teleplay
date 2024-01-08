<script lang="ts">
	import RenderPlans from '$lib/Plans/RenderPlans.svelte';
	import First from '$lib/illustrate/first.png';
</script>

<div
	class="w-full lg:h-[700px] flex justify-center align-middle place-items-center font-Lato bg-gradient-to-br to-gray-900 from-telegram"
>
	<div class="max-w-4xl w-full mx-auto p-6">
		<div class="max-w-4xl w-full lg:border-l-2 p-6">
			<h1 class="text-5xl font-semibold text-white lg:leading-tight">
				Create hype for your brand and keep your Telegram groups busy
			</h1>
			<p class="text-white mt-3">
				TelePlay allow you to create drama-like script and have them repost to your group or monitor
				a target group and post their live (or past) message to your groups(s)
			</p>
			<a
				href="/dashboard"
				class="border-2 max-w-[250px] w-full text-center border-white hover:border-telegram text-white hover:bg-telegram inline-block mt-6 p-3 rounded-md text-sm"
				>Trend Your Brand</a
			>
		</div>
	</div>
</div>

<div
	class="min-h-screen from-gray-50 to-gray-100 bg-gradient-to-br flex justify-center align-middle place-items-center"
>
	<!-- <div class="">
		<h1 class="text-3xl mb-6 text-telegram">About TelePlay</h1>

		<p class="text-xl text-gray-600">
			TelePlay is an advanced software designed to revolutionize your Telegram group management
			experience. With a range of powerful features, TelePlay empowers users to create dynamic and
			engaging group interactions.
		</p>
	</div> -->

	<div class="max-w-4xl w-full mx-auto p-4 py-20">
		<p class="text-2xl font-bold text-telegram">Key Features:</p>
		<!-- advantages -->
		<ul class="grid lg:grid-cols-2 w-full gap-4 text-gray-700 py-6">
			<li class="flex border p-4 rounded-md border-gray-200 bg-white">
				<!-- <img src={First} alt="" class="w-[100px] aspect-square" /> -->
				<div class="flex flex-col">
					<strong class="text-telegram text-lg">Group Monitoring:</strong> TelePlay seamlessly monitors
					both private and public groups, providing users with versatile control over their chosen communities.
				</div>
			</li>

			<li class="flex border p-4 rounded-md border-gray-200 bg-white">
				<!-- <img src={First} alt="" class="w-[100px] aspect-square" /> -->
				<div class="flex flex-col">
					<strong class="text-telegram text-lg">Group Posting:</strong> Users can effortlessly post messages
					to either private or public groups, tailoring their communication strategy to specific audience
					segments.
				</div>
			</li>

			<li class="flex border p-4 rounded-md border-gray-200 bg-white">
				<!-- <img src={First} alt="" class="w-[100px] aspect-square" /> -->
				<div class="flex flex-col">
					<strong class="text-telegram text-lg">Message Replacement:</strong> TelePlay enables users
					to replace specific words in live messages, including links, allowing for real-time content
					customization.
				</div>
			</li>

			<li class="flex border p-4 rounded-md border-gray-200 bg-white">
				<!-- <img src={First} alt="" class="w-[100px] aspect-square" /> -->
				<div class="flex flex-col">
					<strong class="text-telegram text-lg">Live or Post Messages:</strong> Users have the flexibility
					to choose between live message posting and scheduled post messages, ensuring timely and strategic
					communication.
				</div>
			</li>

			<li class="flex border p-4 rounded-md border-gray-200 bg-white">
				<!-- <img src={First} alt="" class="w-[100px] aspect-square" /> -->
				<div class="flex flex-col">
					<strong class="text-telegram text-lg">Anti-Spam Detection:</strong> TelePlay incorporates advanced
					anti-spam message detection mechanisms, maintaining the integrity and quality of group conversations.
				</div>
			</li>

			<li class="flex border p-4 rounded-md border-gray-200 bg-white">
				<!-- <img src={First} alt="" class="w-[100px] aspect-square" /> -->
				<div class="flex flex-col">
					<strong class="text-telegram text-lg">Multi-Group Posting:</strong> TelePlay facilitates simultaneous
					posting to multiple groups, optimizing efficiency and extending the reach of your messages
					across various communities at once.
				</div>
			</li>
			<!-- Add more features as needed -->
		</ul>
	</div>
</div>

<div class="min-h-screen bg-white">
	<div class="max-w-4xl w-full mx-auto p-4 py-20">
		<p class="text-4xl font-bold text-telegram">Plans:</p>
		<div class="w-full grid lg:grid-cols-3 gap-4 py-6">
			<RenderPlans />
		</div>
	</div>
</div>
