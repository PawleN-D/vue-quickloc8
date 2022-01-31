<template>
  <div class="main">
    <h3>Your Available Taxis</h3>
    <div class="flex">
      <!-- Map Display here -->
      <div class="map-holder bt-5">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import coordinates from "../data/vehicleCoordinates.json"

export default {
  data() {
    return {
      loading: false,
      location: "",
      center: [0, 0],
      map: {},
    };
  },

  mounted() {
    this.createMap()
  },

  methods: {
    async createMap() {
      console.log
      try {
        mapboxgl.accessToken = "pk.eyJ1IjoicGF3bGUtZCIsImEiOiJja3l6d3EycnUwMGVuMnducXV1dzMwZzV3In0.QNL3mW_7UNjoW6Vzbwd3iw";
        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center:  [0, 0],
          zoom: 2,
        });
        let geocoder =  new MapboxGeocoder({
          accessToken: "pk.eyJ1IjoicGF3bGUtZCIsImEiOiJja3l6d3EycnUwMGVuMnducXV1dzMwZzV3In0.QNL3mW_7UNjoW6Vzbwd3iw",
          mapboxgl: mapboxgl,
          marker: true,
        });

  this.map.addControl(geocoder);

  geocoder.on("result", (e) => {
    const marker = new mapboxgl.Marker({
      draggable: true,
      color: "#D80739",
    })
    .setLngLat(e.result.center)
    .addTo(this.map);
    this.center = e.result.center;
    marker.on("dragend", (e) => {
        this.center = Object.values(e.target.getLngLat());
      });
    });

      } catch (error) {
        console.log("map error", error);        
      }
    }
  },
   async getLocation() {
      try {
        this.loading = true;
        // const response = await axios.get(
        //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
        // );
        const response = coordinates;
        console.log(response);
        this.loading = false;
        // this.location = response.data.features[0].place_name;
        this.location = response.data.features[0].place_name;
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
    copyLocation() {
      if (this.location) {
        navigator.clipboard.writeText(this.location);
        alert("Location Copied")
      }
      return;
    },
}
</script>

<style scoped>
.main {
  margin: 5px;
}

.mapboxgl-ctrl-geocoder--input {
    font: inherit;
    width: 59%;
    border: 0;
    background-color: red;
    margin: 0;
    height: 50px;
    color: #404040;
    color: rgba(0, 0, 0, 0.75);
    padding: 6px 45px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.map-holder {
  width: 100%;
}
#map {
  height: 80vh;
}



</style>