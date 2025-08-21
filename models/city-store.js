import { initStore } from "../utils/store-utils.js";

const db = initStore("city.list");


export const cityStore = {
  async getAllCities() {
    await db.read();
    return db.data.cities;
  },

  async getCityById(id) {
    await db.read();
    const list = db.data.cities.find((city) =>  city.id == id);
    return list;
  },

  async getCityByName(name) {
    await db.read();
    const list = db.data.cities.find((city) => city.name === name);
    return list;
  },

  async getCitiesByName(name) {
    await db.read();
    const list = db.data.cities.filter((city) => String(city.name).slice(0,name.length).toLowerCase() === String(name).toLowerCase());
    return list;
  },

  async getCityByApiId(apiId) {
    await db.read();
    const list = db.data.cities.find((city) => parseInt(city.id) === parseInt(apiId));
    return list;
  },


};
