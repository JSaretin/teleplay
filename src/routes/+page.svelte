<script lang="ts">
	import RenderPlans from '$lib/Plans/RenderPlans.svelte';
	import Question from '$lib/illustrate/Question.svelte';
	import Star from '$lib/illustrate/Star.svelte';
	import Fire from '$lib/illustrate/fire.svelte';

	import Solo from '$lib/illustrate/images/solo.jpg';
	import Connect from '$lib/illustrate/images/connect.jpg';
	import Rate from '$lib/illustrate/images/rate.jpg';
	import Testimonials from '$lib/Testimonials.svelte';
	import Hero from '$lib/Hero.svelte';
	import Faqs from '$lib/Faqs.svelte';
</script>

<Hero />

<div
	class="max-w-7xl text-lg text-gray-600 flex flex-col lg:flex-row gap-4 w-full mx-auto p-4 py-10"
>
	<div class="flex flex-col max-w-lg w-full px-6 py-8 rounded-md gap-4 shadow-sm shadow-gray-300">
		<h3
			class="flex text-2xl justify-between align-middle place-items-center font-bold text-gray-900"
		>
			Quickly Answer FAQS <div class="w-10 text-blue-600"><Question /></div>
		</h3>
		<p>
			Ask common questions related to your buisness and answer them by real humans which will create
			confident in other users to also ask question or learn from the ones asked and answered
		</p>
	</div>

	<div class="flex flex-col max-w-lg w-full px-6 py-8 rounded-md gap-4 shadow-sm shadow-gray-300">
		<h3
			class="flex text-2xl justify-between align-middle place-items-center font-bold text-gray-900"
		>
			Create Project Hype <div class="w-10 text-red-500"><Fire /></div>
		</h3>
		<p>
			Want to hype your crypto project, show user how to create an account for a website? No
			problem! With Teleplay, you can do both and more.
		</p>
	</div>

	<div class="flex flex-col max-w-lg w-full px-6 py-8 rounded-md gap-4 shadow-sm shadow-gray-300">
		<h3
			class="flex text-2xl justify-between align-middle place-items-center font-bold text-gray-900"
		>
			Boost Product Rating <div class="w-10 text-yellow-500"><Star /></div>
		</h3>
		<p>
			Humans like what others like. Create favoritism for your brand or shower praise on a
			particular product to boost users' interest in it.
		</p>
	</div>
</div>

<div class="max-w-7xl text-lg text-gray-600 flex flex-col gap-8 w-full mx-auto p-4 py-10">
	<div
		class="p-6 flex flex-col lg:flex-row w-full justify-around align-middle place-items-center max-w-6xl mx-auto gap-20"
	>
		<img src={Solo} alt="" class="w-[300px] object-cover aspect-square rounded-full" />
		<div class="flex flex-col max-w-2xl">
			<h3 class="text-center lg:text-left text-2xl text-gray-900 font-bold mb-4">Play Creation</h3>
			<p>
				You don't have to be awake 24/7 to answer questions about your project, create simple play
				and have it on repeate to keep your members engaged at all time regardless of their country.
			</p>
		</div>
	</div>

	<div
		class="p-6 flex flex-col lg:flex-row-reverse w-full justify-around align-middle place-items-center max-w-6xl mx-auto gap-20"
	>
		<img src={Connect} alt="" class="w-[300px] object-cover aspect-square rounded-full" />
		<div class="flex flex-col max-w-2xl">
			<h3 class="text-center lg:text-left text-2xl text-gray-900 font-bold mb-4">
				Mirrow group conversation
			</h3>
			<p>
				See a group around your nich and wish your group could be active like that? Don't worry, you
				can monitor your favourite group and replicate their past or live conversations in your
				group while replacing specific words in the message
			</p>
			<div class="w-full lg:justify-start justify-center flex mt-6">
				<button class="p-2 px-6 text-base font-semibold bg-telegram text-white rounded-full"
					>Get Started</button
				>
			</div>
		</div>
	</div>

	<div
		class="p-6 flex flex-col lg:flex-row w-full justify-around align-middle place-items-center max-w-6xl mx-auto gap-20"
	>
		<img src={Rate} alt="" class="w-[300px] aspect-square object-cover rounded-full" />
		<div class="flex flex-col max-w-2xl">
			<h3 class="text-center lg:text-left text-2xl text-gray-900 font-bold mb-4">
				Forwarded Private Message
			</h3>
			<p>
				Have your play actors forward their private messages to a general private group, where you
				can answer the questions without keeping track of multiple telegram accounts.
			</p>
		</div>
	</div>
</div>

<!-- <div class="bg-gradient-to-br flex justify-center align-middle place-items-center">
	<div class="max-w-7xl w-full mx-auto p-4 py-10 grid lg:grid-cols-3 gap-4 my-20">
		<Advantage title="Group Monitoring"
			>Teleplay can post to both private and public groups, providing users with versatile control
			over their chosen communities.</Advantage
		>
		<Advantage title="Group Posting"
			>Users can effortlessly post messages to either private or public groups, tailoring their
			communication strategy to specific audience segments.</Advantage
		>
		<Advantage title="Message Replacement"
			>TelePlay enables users to replace specific words in live messages, including links, allowing
			for real-time content customization.</Advantage
		>
		<Advantage title="Live or Past Messages"
			>Users have the flexibility to choose between live message posting and scheduled post
			messages, ensuring timely and strategic communication.</Advantage
		>
		<Advantage title="Anti-Spam Detection"
			>TelePlay incorporates advanced anti-spam message detection mechanisms, maintaining the
			integrity and quality of group conversations.</Advantage
		>
		<Advantage title="Multi-Group Posting"
			>TelePlay facilitates simultaneous posting to multiple groups, optimizing efficiency and
			extending the reach of your messages across various communities at once.</Advantage
		>
	</div>
</div> -->

<div class="max-w-7xl w-full mx-auto p-4 py-20">
	<h2 class="text-3xl font-bold text-gray-900 text-center mb-10">The Service We Offer</h2>
	<div class="w-full grid lg:grid-cols-3 gap-4 py-6">
		<RenderPlans />
	</div>
</div>

<Testimonials />

<Faqs />
