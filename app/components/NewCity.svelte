<script lang="ts">
	import { expoIn, expoOut } from "svelte/easing";

	import fadeScale from "../aesthetic/fade-scale";
	import { showLicenseDialog } from "~/logic/ui";

	import { Decision } from "../typing/types";
	import type { DelayInfo } from "../typing/types";

	export let station: DelayInfo;
	export let chooseActive: boolean;

	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	function higher(node) {
		dispatch("message", { decision: Decision.HIGHER });
		chooseActive = false;
	}
	function lower(node) {
		dispatch("message", { decision: Decision.LOWER });
		chooseActive = false;
	}
</script>

<page height="45%"
	style="background-image: url('{station.photoUrl}') no-repeat center center fixed;"
>
	<flexboxLayout class="darken" flexDirection="column" alignItems="center" justifyContent="center" flexWrap="wrap">
		<label class="title" textWrap="{true}">{station.name}</label>
		
		{#if !chooseActive}
		<!-- transition:fadeScale={{
			delay: 75,
			duration: 500,
			easing: expoIn,
			baseScale: 0.5,
		}} -->
			<label class="term-volume__volume" textWrap="{true}">{station.delay}
			</label>
			<label class="time-description" textWrap="{true}">Minute(n) Verspätung gesamt
			</label>
		{:else}
				<!-- 			transition:fadeScale={{
					delay: 75,
					duration: 500,
					easing: expoOut,
					baseScale: 0.5,
				}} -->
			<button class="roundBtn" on:tap={higher}>Higher</button>
			<button class="roundBtn" on:tap={lower}>Lower</button>
		{/if}
		<button class="fab licenseBtn" text="" on:tap={showLicenseDialog(station)} />

		<!-- trying out cc button instead of always showing license because space and hard to do -->
		<!-- Spacer hack to move attribution down to bottom of flex container -->
		<!-- Bad solution moves titles because can't do absolute and flexbox -->
		<!-- <frame height="22.5%"></frame> -->
		<!-- <label class="attribution" alignSelf="flex-end">{station.photographer}</label> -->
		<!-- <label class="attribution" alignSelf="flex-end">{station.license}</label> -->
	</flexboxLayout>
</page>

<style>
	page {
		background-size: cover !important;
		flex-grow: 1;
		text-align: center;
	}

	.title {
		font-size: 35;
	}

	.term-volume__volume {
		font-size: 33;
		font-weight: 700;
		color: #fff989;
		opacity: 1;
		line-height: 0.75;
		margin-bottom: 10;
	}

	.time-description {
		font-size: 25;
	}

	/* .attribution {
		font-size: 9;
		color: #bebbbb;
	} */

	.roundBtn {
		color: #fff;
		background-color: transparent;

		/* TODO fix border colors */
		border-color: #fff;
		border-radius: 40;
		border-width: 1;
	}

	.roundBtn:hover {
		background-color: #fff;
		color: #333;
	}
</style>
