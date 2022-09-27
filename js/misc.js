function toggleMap() {
    $('.mapSelector').toggle();
    $('#map').toggle();
    $('.overlay').toggle();
}

// If utility type is checked, show the marker, else hide it
function filterMarkers(utilityType) {
    if ($(`#${utilityType}`).is(':checked')) {
        $(`.${utilityType}`).show();
    } else {
        $(`.${utilityType}`).hide();
    }
}

// Hide map and overlay, and fullscreen the clicked image
function fullscreenImage(element) {
    $('#map').toggle();
    $('.overlay').toggle();
    $('#expandedImage').toggle();
    // Changes src attribute to the src of clicked element
    document.getElementById('image').setAttribute('src', element.getAttribute('src'));
    document.getElementById('image').requestFullscreen(); // Makes the image fullscreen
}

// Show map and overlay, and exit fullscreen
function hideElement() {
    $('#map').toggle();
    $('.overlay').toggle();
    $('#expandedImage').toggle();
    document.exitFullscreen();
}

// CSGO is mostly played with 100% saturation (usually vibrance GUI or nvidia control panel),
// so the whole page needs to be unsaturated by 50% when opened from the steam in game web browser
if (window.navigator.userAgent.includes('Valve')) {
    document.body.classList.toggle('unSaturate');
}