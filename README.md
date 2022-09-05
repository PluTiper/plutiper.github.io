
# CSGO maps with lineups

---

#### Libraries used:

 - [Leaflet](https://leafletjs.com/)
 - [Public Google Sheets Parser](https://www.npmjs.com/package/public-google-sheets-parser)
 - [jQuery](https://jquery.com/)
---
Data for lineups is stored in a Google Sheets [spreadsheet](https://docs.google.com/spreadsheets/d/1sYULbY9FQ3vcG12ir19uQmyms2oCgzHTprKE-YrcsRc) which is then parsed and added to a leaflet map.

For the map layouts I first used [Simple Radar](https://readtldr.gg/simpleradar), but later realized that vector maps would look better, so I traced Simple Radar's layouts in [Inkscape](https://inkscape.org/). The vector versions aren't 100% accurate since I'm not yet familiar with Inkscape, but they're good enough for this purpose.

So far there are only 3 maps and not that many lineups, but I'm working on adding more of both.

This was inspired by [Odinh.design](https://github.com/Miss-placed) who made something [similar](https://declassified.netlify.app/) for CoD: Cold War.
