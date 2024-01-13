<script lang="ts">
	import { pb } from '$lib';
	export let email: string;
	let sent = false;
	const sendEmail = async () => {
		if (sent) return;
		sent = true;
		try {
			await pb.collection('users').requestVerification(email);
		} catch (e) {}
	};
</script>

<button on:click={sendEmail} class="text-green-500">resend email</button>
