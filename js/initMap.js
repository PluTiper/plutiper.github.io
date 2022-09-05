// Initialize the map with custom options
const map = L.map('map', {
    crs: L.CRS.Simple, // https://leafletjs.com/examples/crs-simple/crs-simple.html
    zoom: 3,
    minZoom: 3,
    maxZoom: 6,
    center: [50, 50],
    maxBounds: [
        //N   //E                                   N
        [200, 250], // North east corner          W   E
        [-100, -150] // South west corner           S
        //S   //W
    ],
    maxBoundsViscosity: 1.0, // Completely prevents dragging outside maxBounds
    doubleClickZoom: false,
    attributionControl: false, // Watermark
    zoomControl: false // Zoom buttons
});
$('#map').hide(); // Has to be hidden AFTER the map has been initialized, otherwise centering doesn't work properly

const bounds = [[0, 0], [100, 100]];
let mapImage = L.imageOverlay('', bounds).addTo(map); // Add an empty image overlay to the map

let markersLayer = new L.layerGroup(); // Create an empty layer group for storing markers

function setMap(chosenMap) {
    switch(chosenMap) {
        // Change image overlay image to the layout of the chosen map
        case 'de_dust2':
            mapImage.setUrl('maps/de_dust2.svg');
            break;
        case 'de_mirage':
            // https://readtldr.gg/simpleradar
            mapImage.setUrl('https://i.imgur.com/expih2Z.png');
            break;
        case 'de_cache':
            mapImage.setUrl('maps/de_cache.svg');
            break;
        default:
            alert('Something went wrong while setting the map');
            break;
    }
    markersLayer.clearLayers(); // Remove all the previously added markers
    addMarkers(chosenMap); // Add markers to the map
    toggleMap(); // Show the map and overlay, and hide the map selection
}

// Console log coordinates of clicked position for adding new lineups
map.on('click', function(e) {
    console.log(`clicked at x == ${e.latlng.lat}, y == ${e.latlng.lng}`);
});