<script lang="ts">
	import { fade } from 'svelte/transition';

	let {
		activeTime = $bindable({ timeframe: 'Daily' }),
		timeframe,
		activeCard = $bindable('')
	} = $props();

	function setActiveTime(time: string) {
		activeTime.timeframe = time;
		activeCard = '';
	}
</script>

<div
	transition:fade
	class="max-w-max-card-profile-mobile bg-navy-900 rounded-mobile md:max-w-max-card-profile-tablet lg:max-w-max-card-profile-desktop w-full md:col-span-3 lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:gap-10"
>
	<div
		class="rounded-mobile lg:min-h-min-card-profile-details-desktop mb-[1px] flex items-center gap-6 bg-purple-600 px-400 py-410 lg:flex-col lg:items-start lg:gap-10 lg:p-400"
	>
		<div>
			<img
				src="/image-jeremy.png"
				alt="profile-jeremy"
				class="lg:h-profile-image-desktop lg:w-profile-image-desktop h-16 w-16 rounded-full border-2 border-white"
			/>
		</div>
		<div>
			<span class="text-preset-6 text-navy-200 pb-100 lg:pb-0">Report for</span>
			<h1 class="text-preset-4 lg:max-w-max-card-profile-name-desktop lg:text-preset-2 text-white">
				Jeremy Robson
			</h1>
		</div>
	</div>
	<div
		class="flex flex-row items-center justify-evenly py-300 md:justify-center md:gap-18 lg:flex-col lg:items-start lg:gap-5 lg:p-400 lg:pt-5"
	>
		{#each timeframe as time}
			<button
				class="text-preset-regar cursor-pointer text-purple-500"
				class:text-white={time === activeTime.timeframe}
				onclick={() => setActiveTime(time)}>{time}</button
			>
		{/each}
	</div>
</div>
