const DEFAULT_LAT = 35.68035;
const DEFAULT_LNG = 139.766838;
const DEFAULT_ZOOM = 10;

const landmarks = [
    {
        lat: 35.5040292,
        lng: 139.766838,
        name: "Tokyo",
    },
    {
        lat: 51.500958,
        lng: -0.126339,
        name: "London",
    },
    {
        lat: 0,
        lng: 0,
        name: "the abyss",
    },
];

const DEFAULT_LOC = landmarks[0];

let registeredSelect = false;

const updateLandMarksList = (map) => {
    const elm = document.getElementById("landmarks");
    if (!elm) {
        console.error("Invalid HTML, landmarks select not found");
        return;
    }
    if (!registeredSelect) {
        elm.onchange = (e) => {
            const value = e.target.value;
            const location = landmarks[value];
            map.setCenter(location);
        };
        registeredSelect = true;
    }

    landmarks.forEach((item, idx) => {
        const option = document.createElement("option");
        option.value = idx;
        option.textContent = item.name;
        elm.append(option);
    });
};

/**
 * Moves the map to display over a specified location
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToLocation(map) {
    const lat = document.getElementById("x")?.value || DEFAULT_LAT;
    const lng = document.getElementById("y")?.value || DEFAULT_LNG;
    const zoom = document.getElementById("zoom-level")?.value || DEFAULT_ZOOM;
    console.log(lat);
    map.setCenter({ lat, lng });
    map.setZoom(zoom || DEFAULT_ZOOM);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
    apikey: window.apikey,
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map
var map = new H.Map(document.getElementById("map"), defaultLayers.vector.normal.map, {
    center: { lat: 0, lng: 0 },
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1,
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener("resize", () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
    moveMapToLocation(map);
    updateLandMarksList(map);
};

const updateaPos = () => {
    moveMapToLocation(map);
};

const resetPos = () => {
    console.log("Reset postion");
    map.setCenter({ lat: DEFAULT_LAT, lng: DEFAULT_LNG });
    map.setZoom(16);
};
