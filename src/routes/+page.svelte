<script lang="ts">
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import TrackingCard from '$lib/components/TrackingCard.svelte';
	import type { Trackers } from '$lib/interface/trackers';
	import { onMount } from 'svelte';

	let trackers: Trackers[] = $state([]) as Trackers[];
	const timeframe = ['Daily', 'Weekly', 'Monthly'];

	let activeTime = $state({
		timeframe: timeframe[0]
	});
	let activeCard = $state('') as string;

	onMount(async () => {
		const res = await fetch('/data/data.json');
		trackers = await res.json();
	});
</script>

<div
	class="font-family-regular bg-navy-950 flex min-h-screen w-full items-center justify-center text-white"
>
	<div
		class="md:max-w-max-container-tablet lg:max-w-max-container-desktop my-1001 grid w-full grid-cols-1 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2"
	>
		<ProfileCard bind:activeTime {timeframe} bind:activeCard />
		{#each trackers as tracker}
			<TrackingCard {tracker} bind:activeTime bind:activeCard />
		{/each}
	</div>
</div>
