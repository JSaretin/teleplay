<div
	class="w-full h-[700px] flex justify-center align-middle place-items-center font-Lato bg-gradient-to-br to-gray-900 from-telegram"
>
	<div class="max-w-4xl w-full mx-auto p-6">
		<div class="max-w-4xl w-full border-l-2 p-6">
			<h1 class="text-5xl font-semibold text-white leading-tight">
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

<div class="max-w-4xl w-full mx-auto p-6 font-Lato">
	<div class="grid grid-cols-2 py-6 gap-4 text-telegram">
		<!-- advantages -->
		<div class="p-4 border-2 border-telegram rounded-md">
			<p>Post to multiple groups at once</p>
		</div>
		<div class="p-4 border-2 border-telegram rounded-md">
			<p>Set the theme of the accounts, types of names, usernames, pictures and language</p>
		</div>

		<div class="p-4 border-2 border-telegram rounded-md">
			<p>Monitor and post live or past messages to multiple groups at once</p>
		</div>

		<div class="p-4 border-2 border-telegram rounded-md">
			<p>
				Replace content on new massge, you can replace links in message with your own and other
				target word your like
			</p>
		</div>
	</div>

	<div class="w-full grid lg:grid-cols-3 gap-4 py-6">
		<!-- Plan Section -->
		{#each Array(3).fill(null) as plan, _}
			<div
				class="rounded-md overflow-hidden shadow-md bg-white backdrop-blur-lg backdrop-filter bg-opacity-20"
			>
				<h3
					class="text-2xl text-center uppercase bg-gray-500 text-white p-3 backdrop-blur-md backdrop-filter bg-opacity-50"
				>
					Silver Plan
				</h3>

				<div class="p-6">
					<div class="my-4">
						<p class="text-2xl text-center font-bold text-gray-700">$200/month</p>

						<div class="text-gray-600 mt-4">
							<div class="flex justify-between items-center mb-2">
								<span class="font-semibold">Max groups</span>
								<span class="text-gray-800">5</span>
							</div>
							<div class="flex justify-between items-center mb-2">
								<span class="font-semibold">Allowed Groups</span>
								<span class="text-gray-800">Public/Private</span>
							</div>
							<div class="flex justify-between items-center mb-2">
								<span class="font-semibold">Post Live message</span>
								<span class="text-red-500">No</span>
							</div>
							<div class="flex justify-between items-center mb-2">
								<span class="font-semibold">Post Past message</span>
								<span class="text-green-500">Yes</span>
							</div>
							<div class="flex justify-between items-center mb-2">
								<span class="font-semibold">Customer Support</span>
								<span class="text-yellow-500">24/7</span>
							</div>
						</div>
					</div>

					<p class="text-gray-700 leading-relaxed mb-4">
						Enjoy the Silver Plan with a maximum of 5 groups, flexibility in group privacy settings,
						and the ability to post past messages. Our customer support is available 24/7 to assist
						you.
					</p>

					<button class="w-full p-3 rounded-md bg-green-500 text-white text-lg">Order Now</button>
				</div>
			</div>
		{/each}
	</div>
</div>
