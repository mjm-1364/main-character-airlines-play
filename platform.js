// Connects Main Character Airlines to a game portal or analytics service.
// This file loads before the game. The game calls each hook below when it exists,
// and runs fine with all of them left empty.
//
// The game also exposes window.JetpackersGame with pause(), resume() and mute(true|false),
// for a portal SDK to call around ads.

// testMode: true shows stand-in ad and store screens for trying things out. Keep it false in
// anything players see: with no ad or store hook connected, those buttons are simply hidden
// and character worlds unlock with coins.
window.JetpackersConfig = { testMode: false };

window.JetpackersHooks = {
  // The game has loaded and is ready to play.
  loadingFinished() {},

  // The player started flying (first tap of a run, or resumed from pause).
  gameplayStart() {},

  // The player crashed, paused, or switched away.
  gameplayStop() {},

  // A run ended. stats = { score, coins, best }
  runEnd(stats) {},

  // Every analytics event: session_start, run_start, run_end, tutorial_done,
  // challenge_complete, unlock, pause, run_quit, theme_equip, theme_trial_start,
  // theme_trial_run, theme_trial_cancel, season_collect, purchase_start,
  // purchase_complete, purchase_cancel. run_start and run_end include the place (theme).
  track(name, props) {},

  // Optional. Buy a character world pack. sku is 'bundle-chad', 'bundle-kaylee', 'bundle-bradley',
  // 'bundle-kevin', 'bundle-dustin' or 'bundle-jess'. Return a promise of true when payment succeeds.
  // Leave it undefined and the game shows a "store not connected" screen with a test unlock.
  // purchase(sku, price) { return Promise.resolve(false); },

  // Optional. Show a rewarded video ad. placement is one of:
  //   'continue'     - "Keep going" after a crash (once per run)
  //   'double_coins' - "Double coins" on the game-over screen (once per run)
  //   'place_trial'  - "Try 1 run free" for a character world in the Locker
  // Return a promise of true when the player watched it to the end.
  // Leave it undefined and the game shows a 3-second placeholder instead.
  // showRewardedAd(placement) { return Promise.resolve(false); },
};

// Example for CrazyGames (add their SDK <script> tag to index.html first, and check
// their current documentation for exact names):
//
//   loadingFinished() { window.CrazyGames.SDK.game.loadingStop(); },
//   gameplayStart()   { window.CrazyGames.SDK.game.gameplayStart(); },
//   gameplayStop()    { window.CrazyGames.SDK.game.gameplayStop(); },
//
// Example for Poki:
//
//   loadingFinished() { PokiSDK.gameLoadingFinished(); },
//   gameplayStart()   { PokiSDK.gameplayStart(); },
//   gameplayStop()    { PokiSDK.gameplayStop(); },
