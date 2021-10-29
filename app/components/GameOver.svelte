<script lang="ts">
	import * as SocialShare from "nativescript-social-share";

	export let score: number;

	function shareScore() {
		SocialShare.shareText(`Ich habe ${score} Punkte im Zugverspätung Higher Lower Game erreicht. Schaffst du es meinen Score zu übertreffen?
		https://play.google.com/store/apps/details?id=com.merzlabs.traindelayhl`);
	}

</script>

<page>
	<flexboxLayout class="darken" flexDirection="column" alignItems="center" justifyContent="center" flexWrap="wrap">
		<label class="title" textWrap="{true}">Dein Ergebnis</label>
		<label class="score" textWrap="{true}">{score} Punkte</label>
		
		{#if score >= 5}
			<button text="Score teilen" on:tap="{shareScore}" />
		{/if}

		{#if score == 0}
			<!-- TODO think if want to use feedback gifs https://github.com/bradmartin/nativescript-gif  -->
			<!-- <gif:gif src="~/assets/bad.gif" alt="Sad result chihuaha falling down" /> -->
			<label class="subtitle emphasize" textWrap="{true}">Schwach!</label>
		{:else if score > 0 && score < 3}
			<label class="subtitle" textWrap="{true}">Wenigstens etwas!</label>
		{:else if score >= 3 && score < 10}
			<label class="subtitle" textWrap="{true}">Schon mal nicht schlecht</label>
		{:else if score >= 10 && score < 20}
			<label class="subtitle" textWrap="{true}">Oha! Das ist doch mal etwas</label>
		{:else if score >= 20 && score < 30}
			<label class="subtitle" textWrap="{true}">Richtiger Zug Mario du</label>
		{:else}
			<label class="subtitle" textWrap="{true}">Mach dich bereit für die Esports Liga!</label>
		{/if}

		<button on:tap>Neustart!</button>
	</flexboxLayout>
</page>

<style>
	page {
		background-image: url("~/assets/bahntafel.jpg") no-repeat center center fixed;
		background-size: cover;
	}

	.title {
		font-size: 35;
	}

	.score {
		font-size: 28;
	}

	.subtitle {
		font-size: 22;
	}

	.emphasize {
		font-weight: bold;
	}

	button {
		width: 98%;
		font-size: 20;
		margin-top: 25; 
	}
</style>
