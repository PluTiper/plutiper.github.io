// https://www.npmjs.com/package/public-google-sheets-parser
const spreadSheetID = '1sYULbY9FQ3vcG12ir19uQmyms2oCgzHTprKE-YrcsRc';
const parser = new PublicGoogleSheetsParser();

function addMarkers(chosenMap) {
  
    // TODO: Stop parsing the spreadsheet over and over,
    // create an array that stores all the parsed sheets and then check if chosenMap is in said array
    // and only parse if it isn't

    parser.parse(spreadSheetID, chosenMap).then((items) => {
        items.forEach(lineup => {
            // Organize the parsed data
            const type = lineup.type;
            const name = lineup.name;
            const standPos = [lineup.standX, lineup.standY];
            const landPos = [lineup.landX, lineup.landY];
            const standPosImg = `https://i.imgur.com/${lineup.standPos}.png`;
            const throwPosImg = `https://i.imgur.com/${lineup.throwPos}.png`;
            const videoLink = `https://www.youtube.com/embed/${lineup.video}`;
            const instructions = lineup.instructions;
            const ticks = lineup.ticks;

            // Retrieve the correct icon from the icon dictionary
            const iconNormal = iconDict[type][0];
            const iconBig = iconDict[type][1];

            // Create markers at standing and landing positions using the correct icons
            const standMarker = L.marker(standPos, {icon: iconNormal});
            const landMarker = L.marker(landPos, {icon: landIconNormal});

            // Popup content
            const popupContent = `
            <div class="grid-container">
                <div class="grid-item">
                    <img src="${standPosImg}" onclick="fullscreenImage(this);">
                </div>
                <div class="grid-item">
                    <img src="${throwPosImg}" onclick="fullscreenImage(this);">
                </div>
                <div class="grid-item">
                    <iframe allow="fullscreen;" src="${videoLink}"></iframe>
                </div>
                <div class="grid-item">
                    <h2>${name}</h2>
                    <h6>(${ticks} ticks)</h6>
                    <p>${instructions}</p>
                </div>
            </div>
            `;

            // Group standing and landing markers and add them to the marker layer
            const markerGroup = L.featureGroup([standMarker, landMarker])
                .bindPopup(popupContent, {maxWidth: 'auto', closeButton: false})
                .addTo(markersLayer);

            // Add classes to icons for filtering
            L.DomUtil.addClass(standMarker._icon, type);
            L.DomUtil.addClass(landMarker._icon, type);

            // On mouse-over marker group, change to the big version of the icons
            markerGroup.on('mouseover', () => {
                standMarker.setIcon(iconBig);
                landMarker.setIcon(landIconBig);
            });
            
            // When the cursor is taken off of the marker group, change back to the normal version of the icon
            markerGroup.on('mouseout', () => {
                standMarker.setIcon(iconNormal);
                landMarker.setIcon(landIconNormal);

                // After changing icons classes disappear, so they need to be re-added
                L.DomUtil.addClass(standMarker._icon, type);
                L.DomUtil.addClass(landMarker._icon, type);
            });
        });
        // Filter markers
        filterMarkers('smoke');
        filterMarkers('flash');
        filterMarkers('molotov');
        filterMarkers('heGrenade');
    });
    markersLayer.addTo(map); // Add the marker layer to the map
}