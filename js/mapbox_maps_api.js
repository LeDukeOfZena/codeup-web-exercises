import { keys } from "../keys.js";


const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url= ``;
    const options = {


    }
    options :
}
//MAIN
(async () => {

    mapboxgl.accessToken = keys.mapbox
    const map = new mapboxgl.Map({
        container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
})();