// https://leafletjs.com/examples/custom-icons/

// Icons for landing position
const landIconNormal = L.icon({iconUrl: 'icons/land.svg', iconSize: [38, 38]});
const landIconBig = L.icon({iconUrl: 'icons/land.svg', iconSize: [57, 57]});

// Icons for smoke grenades
const smokeIconNormal = L.icon({iconUrl: './icons/smoke.svg', iconSize: [15.45, 34.15]});
const smokeIconBig = L.icon({iconUrl: './icons/smoke.svg', iconSize: [23.175, 51.225]});

// Icons for flashbangs
const flashIconNormal = L.icon({iconUrl: './icons/flash.svg', iconSize: [37.75, 44.9]});
const flashIconBig = L.icon({iconUrl: './icons/flash.svg', iconSize: [56.625, 67.35]});

// Icons for molotovs
const molotovIconNormal = L.icon({iconUrl: './icons/molotov.svg', iconSize: [24.9, 36.7]});
const molotovIconBig = L.icon({iconUrl: './icons/molotov.svg', iconSize: [37.35, 55.05]});

// Icons for high explosive grenades
const heGrenadeIconNormal = L.icon({iconUrl: './icons/heGrenade.svg', iconSize: [26.1, 34.75]});
const heGrenadeIconBig = L.icon({iconUrl: './icons/heGrenade.svg', iconSize: [39.15, 52.11]});

// Makeshift dictionary for assigning the correct icons for each grenade type
const iconDict = {
    'smoke': [smokeIconNormal, smokeIconBig], 
    'flash': [flashIconNormal, flashIconBig], 
    'molotov': [molotovIconNormal, molotovIconBig], 
    'heGrenade': [heGrenadeIconNormal, heGrenadeIconBig]
}