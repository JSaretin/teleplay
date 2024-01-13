<script lang="ts">
	import Expand from './Expand.svelte';

	const faqs: {
		question: string;
		ans: string;
	}[] = [
		{
			question: 'Is multiple target groups of the same types?',
			ans: 'No, depending on your current plan, your play can post to multiple public and private groups at once.'
		},
		{
			question: 'Can I use it to shill my crypto project?',
			ans: 'No, you can not use this software for shilling'
		},
		{
			question: 'Will the play continue if one of my group is restricted?',
			ans: 'Yes, if you are posting to multiple groupt and one of the group get deleted or restricted, the play will continue to post to your other groups without interuption.'
		},
		{
			question: 'Do I need to manually restart a play?',
			ans: 'Depend, you can set the play to auto restart or not when creating a new play.'
		},
		{
			question: 'Do I need to provide telegram accounts?',
			ans: "No, you don't need to provide any telegram account, everything is handle automatically"
		},
		{
			question: 'Can I monitor multiple groups at once?',
			ans: 'No, One play can only monitor one group then post to your target group. To monitor multiple groups, you can have multiple play monitor different group and post it to one target group. Then monitor the target group and have it post to your other groups.'
		},
		{
			question: "Can't find the answer to your question?",
			ans: 'No problem, use the live chat option to contact our live support and clerify your thoughts.'
		}
	];

	let expandFaq: number | undefined;

	const setFaq = (faq: number) => {
		if (expandFaq === faq) {
			expandFaq = undefined;
			return;
		}
		expandFaq = faq;
	};
</script>

<div id="faqs" class="max-w-7xl w-full mx-auto p-4 py-20">
	<h2 class="text-center mb-10 text-3xl font-bold text-gray-900">Fequently Asked Questions</h2>
	<div class=" flex flex-col gap-4 max-w-2xl mx-auto">
		{#each faqs as faq, _}
			<div class="p-4 shadow-sm shadow-telegram rounded-2xl">
				<button
					on:click={() => {
						setFaq(_);
					}}
					class="w-full text-xl flex justify-between text-gray-900"
					>{faq.question} <Expand isExpand={expandFaq === _} /></button
				>
				{#if expandFaq === _}
					<p class="text-lg mt-6 text-gray-600">
						{faq.ans}
					</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
