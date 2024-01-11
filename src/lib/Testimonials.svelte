<script lang="ts">
	let container: HTMLDivElement;

	const comments: {
		name: string;
		message: string;
		position: string;
	}[] = [
		{
			message:
				'Teleplay has helped increase the number of quality messages we get on our website. It seems answering some of the basic problems that we thought users would encounter while using our product did help increase the knowledge of our main customers.',
			name: 'Sarah Thompson',
			position: 'Customer Support Specialist'
		},
		{
			message:
				'We were able to create hype for our project through Teleplay for our PinkSale launchpad, which helped us reach our hardcap. I am very pleased with how simple it is to create a play and have it run.',
			name: 'Alex Rodriguez',
			position: 'Marketing Manager'
		},
		{
			message:
				"I can't imagine how we can ever get things done without Teleplay. It lifts the weight off our back. We basically write the play once and have it run non-stop. It's like sending your wishlist to the universe on how you want your project to turn out.",
			name: 'David Harper',
			position: 'Project Manager'
		},
		{
			message:
				"We had a really good product but we didn't know how to explain it well to users, so we basically created a play to ask random questions that we knew our product could solve and replied accordingly. Our sales went up because of this. It's fascinating.",
			name: 'Emily Turner',
			position: 'Sales and Marketing Coordinator'
		},
		{
			message:
				'We use Teleplay to monitor live football conversations on different groups and replicate them in our group. Our group is super lively because we are basically replicating the content and suggestions of multiple groups in one.',
			name: 'Ryan Foster',
			position: 'Social Media Coordinator'
		}
	];
</script>

<div class="max-w-7xl w-full mx-auto p-4 py-10 mt-20">
	<h2 class="text-3xl text-center font-bold text-gray-900 mb-10">What Our Customer Say About Us</h2>

	<div class="w-full overflow-hidden flex flex-nowrap gap-4 group">
		{#each Array(2) as _}
			<div
				class="shrink-0 flex-1 flex gap-4 flex-nowrap py-4 px-2 animate-infinite-scroll group-hover:[animation-play-state:paused]"
			>
				{#each comments as comment, _}
					<div
						class="w-[350px] lg:w-[450px] p-6 gap-4 aspect-[2/1.5] lg:aspect-video bg-white shadow-sm shadow-telegram rounded-md shrink-0 flex flex-col"
					>
						<blockquote class="relative flex-1">
							<svg
								class="absolute -top-6 -start-5 h-16 w-16 text-gray-100"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
									fill="currentColor"
								/>
							</svg>

							<p class="absolute z-10 italic font-semibold text-gray-500">
								<em>{comment.message}</em>
							</p>
						</blockquote>
						<div class="">
							<h3 class="text-lg font-semibold text-gray-900">{comment.name}</h3>
							<p class="text-gray-500 text-xs">{comment.position}</p>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
