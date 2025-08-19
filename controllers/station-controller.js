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
      title: request.body.title,
      userid: loggedInUser._id,
    };
    console.log(`adding Station ${newStation.title}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  }, 
};
