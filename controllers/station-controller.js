import { accountsController } from "./accounts-controller.js";
import { stationStore } from "../models/station-store.js";
import { cityStore } from "../models/city-store.js";
import axios from "axios";

const apiKey = "56c1c127b3dd8b1ed7bc54e7e6cbd7b2";


export const stationController = {
  
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    
    const list = await cityStore.getCitiesByName(request.query.name || "Dublin");
    
    const city = await cityStore.getCityByName(request.query.name);

    const stations = await stationStore.getStationsByUserId(loggedInUser._id);

    let weatherResult = {};
    let weatherRequestUrlByApiId = {};
    let weatherRequestUrlByName = {};

    for (let station of stations) {
    weatherRequestUrlByApiId = `https://api.openweathermap.org/data/2.5/weather?id=${station.apiid}&units=metric&appid=${apiKey}`;
    weatherRequestUrlByName = `https://api.openweathermap.org/data/2.5/weather?id=${station.name}&units=metric&appid=${apiKey}`;
      
      try {
        weatherResult = await axios.get(weatherRequestUrlByApiId);
        }
      catch{
        weatherResult = await axios.get(weatherRequestUrlByName);
      }
      console.log("Requesting weather data from OpenWeatherMap API for Station " + station.name + " with API ID " + station.apiid);
      if (weatherResult.status == 200) {
        station.currentWeather = weatherResult.data;
        station.weatherCondition = weatherResult.data.weather[0];
      }
  
    }

    stations.sort((a, b) => a.name.localeCompare(b.name));

    try{
      console.log(`found city ${city.name} `);   
    }
    catch (error) {
      console.log(`City search is not found or undefined.}`);
    }

    const viewData = {
      title: "Station Dashboard",
      stations: stations,
      cities: list,
      city: city || "",
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      name: request.body.name,
      userid: loggedInUser._id,
      country: request.body.country,
      apiid: request.body.apiid,
      latitude: Number(request.body.latitude),
      longitude: Number(request.body.longitude),
    };

    console.log(`adding Station ${newStation.name}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },  

  async autoAddStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    console.log(`Auto adding Station for API ID: ${request.params.apiid}`);
    const cityDetails = await cityStore.getCityByApiId(request.params.apiid);
    const newStation = {
      name: cityDetails.name,
      userid: loggedInUser._id,
      country: cityDetails.country,
      apiid: cityDetails.id,
      latitude: Number(cityDetails.coord.lat),
      longitude: Number(cityDetails.coord.lon),
    };

    console.log(`Auto adding Station ${newStation.name}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },  


  async deleteStation(request, response) {
    const stationId = request.params.stationid;
    console.log(`Deleting Station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect(`/station/${stationId}/deleteallreports`);
  },

};
