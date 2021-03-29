<script lang="ts">
	import Highscore from "../logic/Highscore";

	export let win: boolean;
	export let loss: boolean;
	export let score: number;
</script>

<page height="5%">
	<flexboxLayout class:win class:loss justifyContent="center" alignItems="center">
		<label class="scoreInfo score" class:win class:loss>Score: {score}</label>
		{#if loss}
			<image class="versus-block loss" src="~/assets/cross.svg"/>
		{:else if win}
			<image class="versus-block win" src="~/assets/tick.svg"/>
		{:else}
			<label class="versus-block vs">vs</label>
		{/if}
		<label class="scoreInfo highscore" class:win class:loss>Highscore: {Highscore.highscore}</label>
	</flexboxLayout>
</page>

<style>
	.versus-block {
		height: 45;
		width: 45;
	}

	.scoreInfo.win, .scoreInfo.loss {
		color: #fff;
	}

	.versus-block.vs {
		background-color: #fff;
		color: #000;
		border-radius: 15;
		font-size: 22.5;
		text-align: center;
	}

	.score {
		margin-right: 20%;
	}

	.highscore {
		margin-left: 20%;
	}

		/* Color whole element with right color */
		.loss {
		background-color: #c75555;
	}

	.win {
		background-color: #59ac51;
	}

	/* And do the tick/cross image but as png because nativescript no svg */
	.versus-block.loss {
		background-image: url('~/assets/cross.png');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center;
	}

	.versus-block.win {
		background-image: url('~/assets/tick.png');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center;
	}

	/* TODO animations and stuff */

	/* .versus-block {
		position: absolute;
		border-radius: 50%;
		background: #fff;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: table;
		text-transform: uppercase;
		overflow: hidden;
	}

	.versus-block__text {
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		color: #000;
		font-size: 20;
		font-weight: 700;
	} */

	/* .versus-block__overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	} */

	/* .versus-block__icon {
		background-repeat: no-repeat;
		height: 25;
		left: 50%;
		position: absolute;
		top: 50%;
		opacity: 0;
		transition: opacity 0.3s linear;
		transition-delay: 0s;
		transition-delay: 0.5s;
		transform-origin: center center;
		transform: translate(-50%, -50%);
		width: 25;
	} */

	/* animation */
	/* .versus-block.loss .versus-block__icon,
	.versus-block.win .versus-block__icon {
		height: 25;
		width: 25;
		opacity: 1; */
		/* animation-fill-mode: forwards;
		animation: pop-in 0.3s cubic-bezier(0.24, -0.17, 0.45, 1.99) 0.5s; */
	/* } */

	/* .win,.loss {
		animation: pop-out 0.2s ease-out 1.2s;
		animation-fill-mode: none;
		animation-fill-mode: forwards;
	} */
</style>
