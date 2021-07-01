<script lang="ts">
</script>

<page>
	<flexboxLayout class="darken" flexDirection="column" alignItems="center" justifyContent="center" flexWrap="wrap">
		<!-- TODO improve design and text -->
		<label class="title" textWrap="{true}">Zugverspätung higher lower game</label>
		<label textWrap="{true}">Welcher Bahnhof sammelt gerade mehr summierte Verspätungs-Minuten mit seinen Ankünften?</label>
		<label textWrap="{true}">Eine spassige Method die Echtzeit Fahrplandaten der Bahn zu nutzen</label>
		<!-- Is on:tap everywhere on buttons not on:click on mobile -->
		<button on:tap>Go</button>
	</flexboxLayout>
</page>

<style>
	flexboxLayout {
		padding-left: 10;
		padding-right: 10;
	}

	.title {
		font-size: 35;
	}

	page {
		background-image: url("~/assets/bahntafel.jpg") no-repeat center center fixed;
		background-size: cover;
	}

	button {
		width: 98%;
		font-size: 20;
		margin-top: 25; 
	}
</style>
