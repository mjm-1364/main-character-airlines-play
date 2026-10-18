# Main Character Airlines: upload package

This folder is the complete game, ready to upload to a game website or your own web host.

## What's inside

| File | What it is |
|---|---|
| `index.html` | The game |
| `platform.js` | Hooks for connecting a game portal's SDK or an analytics service |
| `voices/` | 78 recorded voice lines (MP3) |
| `music/` | The background music (`theme.mp3`); without it the game makes its own |
| `privacy.html` | Privacy policy page, for portals and app stores that ask for a URL |
| `icon.svg` | App icon |
| `store-images/` | PNG covers, screenshots and icon for game sites and app stores (not loaded by the game) |
| `manifest.webmanifest` | Lets players add the game to their phone's home screen |

## Before you publish

1. **Contact email and date.** The contact address is mc.airlines@outlook.com, in `index.html` (search for `CONTACT_EMAIL`) and `privacy.html`. Update the "Last updated" date in `privacy.html` whenever the policy changes.
2. **Name check.** A web search found no game, airline or brand called "Main Character Airlines", but that isn't a trademark search. Before spending on marketing, search the USPTO trademark database (computer game software), the App Store, Google Play, CrazyGames and Poki, and check that a domain is free.
3. **Store images.** `store-images/` has PNG covers (1920x1080, 800x1200, 800x800), phone screenshots (1080x1920), desktop screenshots (1920x1080) and a 512x512 icon. Each site lists its own required sizes, so check them when you upload; to make new ones after changing the game, run `node capture.mjs` in the source folder (needs Microsoft Edge).
4. **Real devices.** Play it on an iPhone and a cheap Android phone. Check that sound starts after the first tap.

## Trying it on your computer

The game loads its voice and music files, which browsers block when you open `index.html` straight from a folder. Run a small local web server in this folder instead, for example:

```
python -m http.server 8000
```

then open http://localhost:8000 in your browser.

## Connecting a game portal

Open `platform.js`. It lists every hook the game calls (loading finished, gameplay start and stop, run end, analytics events) with commented examples for CrazyGames and Poki. Add the portal's SDK `<script>` tag to `index.html` above `platform.js`, then fill in the hooks.

For ads, call `window.JetpackersGame.pause()` and `window.JetpackersGame.mute(true)` when an ad starts, and `mute(false)` and `resume()` when it ends.

## Places, purchases and ads

Players pick a place (the world they fly through) in the Locker under Places. Places change only the look and music; gap sizes, speed and hit boxes are identical everywhere, so nothing bought makes the game easier.

| Kind | Places | How players get them |
|---|---|---|
| Free | Powder Peak | Always open |
| Earned | Golden Hour (120 coins), Red-Eye Flight (400 coins) | Lifetime coin total |
| Character worlds | Iron District (Chad), Desert Fest (Kaylee), Financial District (Bradley), Neon Arcade City (Kevin), Vinyl & Brew Street (Dustin), City Marathon (Jess) | World pack purchase, $1.99 each. A pack also opens all of that character's coin-priced items (not challenge rewards). Any world can be tried for one run after a rewarded ad. |
| Limited time | Spring Break Beach (Mar–Apr), Summer Nights (Jun–Aug), Spooky Peak (Oct), Holiday Lights (Dec–Jan) | Free to use during the season; scoring 20 with it during the season keeps it forever |

The game-over screen also offers two rewarded ads, each once per run: **Keep going** (revives the player with the obstacle cleared) and **Double coins** (doubles the coins the run added).

To take real payments and show real ads, fill in `purchase` and `showRewardedAd` in `platform.js`. Until then, Buy shows a "store not connected" screen with a test unlock, and "Try 1 run free" shows a 3-second placeholder.

## What still needs a server

Progress is saved on the player's device only. Before selling coins or items, you'll need player accounts or cloud saves, and purchases checked by a server, so progress can't be lost or edited. Until then, players can move progress between devices with the save code in Settings.

## Credits and licenses

- Fonts: Luckiest Guy by Astigmatic (Apache License 2.0); Nunito by Vernon Adams, Cyreal and Jacques Le Bailly (SIL Open Font License 1.1). Included in `fonts/` with their license files, so the game loads nothing from other sites.
- Voices: generated with the Kokoro text-to-speech model by hexgrad (Apache License 2.0), using kokoro-onnx (MIT License).
- Music: "Head in the Sand (seamless loop)" by congusbongus, released under CC0 1.0 (public domain) on OpenGameArt.org: https://opengameart.org/node/49048. Credit isn't required, but it's given in the game's Credits screen. The composer asks to be told when your game is finished; you can comment on that page.
- Sound effects and fallback music: generated in the game's code.
