import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("reports");


export const reportStore = {
  async getAllReport() {
    await db.read();
    return db.data.reports;
  },

  async addReport(stationId, report) {
    await db.read();
    report._id = v4();
    report.stationid = stationId;
    db.data.reports.push(report);
    await db.write();
    return report;
  },

  async getReportsByStationId(id) {
    await db.read();
    return db.data.reports.filter((report) => report.stationid === id);
  },

  async getReportById(id) {
    await db.read();
    return db.data.reports.find((report) => report._id === id);
  },

  async deleteReport(id) {
    await db.read();
    const index = db.data.reports.findIndex((report) => report._id === id);
    db.data.reports.splice(index, 1);
    await db.write();
  },
  
  async deleteReportsByStationId(id) {
    await db.read();
    const listToDelete = db.data.reports.filter((report) => report.stationid === id);
    for (let rep in listToDelete) {
        db.data.reports.splice(rep._id, 1);
    }
    await db.write();
  },

  async deleteAllReport() {
    db.data.reports = [];
    await db.write();
  },

  async updateReport(report, updatedReport) {
    report.code = updatedReport.code;
    report.temperature = updatedReport.temperature;
    report.windSpeed = updatedReportTrack.windSpeed;
    report.windDirection = updatedReportTrack.windDirection;
    report.pressure = updatedReportTrack.pressure;
    await db.write();
  },
};
