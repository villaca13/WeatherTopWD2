import { v4 } from "uuid";
import { findMinMax, initStore } from "../utils/store-utils.js";
import { reportStore } from "./report-store.js";

const db = initStore("stations");

export const stationStore = {
  async getAllStations() {
    await db.read();
    return db.data.stations;
  },

  async addStation(station) {
    await db.read();
    station._id = v4();
    db.data.stations.push(station);
    await db.write();
    return station;
  },

  async getStationById(id) {
    await db.read();
    let list = db.data.stations.find((station) => station._id === id);
    list.reports = await reportStore.getReportsByStationId(list._id );
    list.temperatureMinMax = findMinMax(list.reports, 'temperature');  
    //console.log(list.temperatureMinMax);  
    list.windSpeedMinMax = findMinMax(list.reports, 'windSpeed');  
    list.pressureMinMax = findMinMax(list.reports, 'pressure');
    return list;
  },

  async getStationsByUserId(userid) {
    await db.read();
    let stations = db.data.stations.filter((station) => station.userid === userid);
    for (let station of stations) {
      station.temperatureMinMax = findMinMax(await reportStore.getReportsByStationId(station._id ), 'temperature');  
      station.windSpeedMinMax = findMinMax(await reportStore.getReportsByStationId(station._id ), 'windSpeed');  
      station.pressureMinMax = findMinMax(await reportStore.getReportsByStationId(station._id ), 'pressure');    
    }
    return stations ;
  },
  
  async deleteStationById(id) {
    await db.read();
    const index = db.data.stations.findIndex((station) => station._id === id);
    db.data.stations.splice(index, 1);
    await db.write();
  },

  async deleteAllStations() {
    db.data.stations = [];
    await db.write();
  },
};
