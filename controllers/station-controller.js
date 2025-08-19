import { accountsController } from "./accounts-controller.js";
import { stationStore } from "../models/station-store.js";


export const stationController = {
  
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getStationsByUserId(loggedInUser._id),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      name: request.body.name,
      userid: loggedInUser._id,
      latitude: Number(request.body.latitude),
      longitude: Number(request.body.longitude),
    };

    console.log(`adding Station ${newStation.name}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  }, 
  
  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },
};
