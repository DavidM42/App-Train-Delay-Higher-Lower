<script lang="ts">
	import { showLicenseDialog } from '~/logic/ui';

	import type { DelayInfo } from "../typing/types";
	export let station: DelayInfo;
</script>

<page height="45%"
	style="background-image: url('~/assets/station-images/{station.photoName}') no-repeat center center fixed;"
>
	<flexboxLayout class="darken" flexDirection="column" alignItems="center" justifyContent="center" flexWrap="wrap">
		<label class="title" textWrap="{true}">{station.name}</label>
		<label class="term-volume__volume" textWrap="{true}">{station.delay}</label>
		<label class="time-description" textWrap="{true}">Minute(n) Verspätung gesamt</label>
		<button class="fab licenseBtn" text="" on:tap={showLicenseDialog(station)} />
		<!-- testing out license button alert combo instead of always showing it -->
		
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
</style>
