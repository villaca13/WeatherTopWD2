import { accountsController } from "./accounts-controller.js";
import { stationStore } from "../models/station-store.js";
import { cityStore } from "../models/city-store.js";


export const stationController = {
  
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    
    const list = await cityStore.getCitiesByName(request.query.name || "Dublin");
    
    const city = await cityStore.getCityByName(request.query.name);

    try{
      console.log(`found city ${city.name} `);   
    }
    catch (error) {
      console.log(`City search is not found or undefined.}`);
    }

    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getStationsByUserId(loggedInUser._id),
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
