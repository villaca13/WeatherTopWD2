import { cityStore } from "../models/city-store.js";

export const cityListController = {
async getAllCities(request, response) {
    const list = await cityStore.getAllCities();
    const viewData = {
      city: list,
    };
    console.log("loading city list");
    response.render("dashboard-view", viewData);
  },

};