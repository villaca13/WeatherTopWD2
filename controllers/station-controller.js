import { stationStore } from "../models/station-store.js";

export const stationController = {
  async index(request, response) {
    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getAllStations(),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
  async addStation(request, response) {
    const newStation = {
      title: request.body.title,
    };
    console.log(`adding station ${newStation.title}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },
};
