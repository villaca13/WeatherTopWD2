import { initStore } from "../utils/store-utils.js";

const db = initStore("city.list");


export const cityStore = {
  async getAllCities() {
    await db.read();
    return db.data.cities;
  },

  async getCityById(id) {
    await db.read();
    const list = db.data.cities.find((city) => city.id === id);
    return list;
  },

  async getCityByName(name) {
    await db.read();
    const list = db.data.cities.find((city) => city.name === name);
    return list;
  },

  async getCitiesByCountry(country) {
    await db.read();
    return db.data.cities.filter((city) => city.country === country);
  },

};
