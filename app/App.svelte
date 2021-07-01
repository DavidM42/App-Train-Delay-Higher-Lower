<script lang="typescript">
  import { StackLayout } from "@nativescript/core";
  import { FlexboxLayout } from "@nativescript/core";
  import { text } from "svelte/internal";
  import Theme from "@nativescript/theme";
  import {knownFolders} from "@nativescript/core/file-system";

  // Can force light or dark mode if wanted
  // https://docs.nativescript.org/ui/dark-mode
  // Theme.setMode(Theme.Light);

  import StationSelector from "./logic/StationSelector";
  import Highscore from "./logic/Highscore";
  import FirstStart from "./logic/FirstStart";
  import { Decision } from "./typing/types";

  let lastStation: DelayInfo = null;
  let newStation: DelayInfo = null;

  let failed = false;
  let score = 0;
  let win = false;
  let loss = false;
  let chooseActive = true;
  let selector: StationSelector = null;

  import Intro from "./components/Intro.svelte";
  import GameOver from "./components/GameOver.svelte";
  import LastCity from "./components/LastCity.svelte";
  import NewCity from "./components/NewCity.svelte";
  import VersusIcon from "./components/VersusIcon.svelte";

  import type { DelayInfo } from "./typing/types";
  import type { StationMapping } from "./typing/stations";

  const re_start = async () => {
    score = 0;
    failed = false;
    loss = false;
    win = false;

    const firstDelay = await selector.getNextStationArrivalDelay();
    const secondDelay = await selector.getNextStationArrivalDelay();

    if (!firstDelay || !secondDelay) {
      alert(
        "Nicht genügend Bahnhöfe mit Verspätungen konfiguriert für gerade!"
      );
      return;
    }

    lastStation = firstDelay;
    newStation = secondDelay;

    chooseActive = true;
  };

  const nextGuess = async () => {
    win = false;
    loss = false;

    const newCalc = await selector.getNextStationArrivalDelay();

    if (!newCalc) {
      alert(
        "Kein weiterer Bahnhof mit Verspätung konfiguriert für weitere Runde!"
      );
      return;
    }
    lastStation = newStation;

    newStation = newCalc;

    chooseActive = true;
  };

  const onmessage = (event) => {
    chooseActive = false;
    console.log(event);
    if (event.detail.decision === Decision.HIGHER) {
      const comparision = newStation.delay >= lastStation.delay;
      win = comparision;
      loss = !comparision;
    } else if (event.detail.decision === Decision.LOWER) {
      const comparision = newStation.delay <= lastStation.delay;
      win = comparision;
      loss = !comparision;
    }

    if (win) {
      score += 1;

      // if new highscore update it
      if (score > Highscore.highscore) {
        Highscore.highscore = score;
      }

      // nextGuess after 1s
      setTimeout(() => nextGuess(), 1000);
    } else {
      // send to failed screen after 2s
      setTimeout(() => (failed = true), 2000);
    }
  };

  const initialize = async () => {
    try {

      const appFolder = knownFolders.currentApp();
      const fileText = appFolder.getFile("assets/stations.json").readTextSync();
      const station: StationMapping = JSON.parse(fileText);
      selector = new StationSelector(station);
    } catch (e) {
      console.error(e);
      alert("Initialization station load failed");
    }
    re_start();
  };

  /* Initialize firstStart flag with saved flags */
  let isFirstStart = FirstStart.loadSavedFirstStart();
  const startedNow = (event) => {
    isFirstStart = false;
    FirstStart.saveFirstStarted();
  }

  initialize();
</script>


<page class="bg" actionBarHidden="true" statusBarStyle="dark" backgroundSpanUnderStatusBar="true">
  <actionBar flat="true" title="Zugverspätung Higher Lower" android.icon="res://icon" android.iconVisibility="always" />
  <flexboxLayout flexDirection="column" justifyContent="center">

    {#if isFirstStart}}
      <Intro on:tap={startedNow}/>
    {:else if failed}
      <GameOver {score} on:tap={re_start}/>
    {:else}
      {#if lastStation && newStation}}
        <LastCity bind:station={lastStation} />
        <VersusIcon bind:win bind:loss bind:score/>
        <NewCity 
          bind:station={newStation}
          bind:chooseActive
          on:message={onmessage}
        />
      {:else}
        <activityIndicator busy="{true}" width="100" height="100"/>
      {/if}
    {/if}
  </flexboxLayout>
</page>

<style>
</style>
