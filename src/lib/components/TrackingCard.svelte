<script lang="ts">
	import type { TimeKey } from '$lib/interface/trackers';
	import { fade } from 'svelte/transition';

	let {
		activeTime = $bindable({ timeframe: 'Daily' }),
		tracker,
		activeCard = $bindable('')
	} = $props();
	let previousLabel = {
		daily: 'Yesterday',
		weekly: 'Last Week',
		monthly: 'Last Month'
	};
</script>

<div
	transition:fade
	class="max-w-max-card-mobile rounded-mobile md:max-w-max-card-tablet lg:max-w-max-card-desktop grid w-full place-items-center text-white"
>
	<div
		style={`--bg-head-card: ${tracker.color}`}
		class="rounded-mobile min-h-max-height-profile-mobile relative col-start-1 h-full w-full overflow-hidden bg-[var(--bg-head-card)]"
	>
		<img src={tracker.image} alt="icon-work" class="absolute right-5 bottom-1 object-contain" />
	</div>
	<div
		class={`rounded-mobile ${activeCard === tracker.title ? 'bg-navy-800' : 'bg-navy-900'} z-5 col-start-1 -mt-8 w-full px-300 py-340 md:p-300 lg:p-400`}
		class:md:py-[24px]={tracker.timeframes[activeTime.timeframe.toLowerCase() as TimeKey].current >
			99}
		class:md:px-[8px]={tracker.timeframes[activeTime.timeframe.toLowerCase() as TimeKey].current >
			99}
	>
		<div class="mb-100 flex justify-between lg:mb-300">
			<h2 class="text-preset-medium">{tracker.title}</h2>
			<button onclick={() => (activeCard = tracker.title)}>
				<img src="/icon-ellipsis.svg" alt="icon-ellipsis" class="h-1.5 w-5 cursor-pointer" />
			</button>
		</div>
		<div class="flex items-center justify-between md:flex-col lg:items-start">
			<h1 class="text-preset-3 md:text-preset-1 lg:mb-100">
				{tracker.timeframes[activeTime.timeframe.toLowerCase() as TimeKey].current}hrs
			</h1>
			<p class="text-preset-6 text-navy-200">
				{previousLabel[activeTime.timeframe.toLowerCase() as TimeKey]} - {tracker.timeframes[
					activeTime.timeframe.toLowerCase() as TimeKey
				].previous}hrs
			</p>
		</div>
	</div>
</div>
