import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import dayjs from "dayjs";

export const reportController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.stationid);
    const viewData = {
      title: "Station",
      station: station,
    };
    response.render("station-view", viewData);
  },

  async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.stationid);
    const newReport = {
      date: dayjs().format("YYYY-MM-DD HH:mm:ss.ss"),
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
    };
    console.log(`adding Report to Station ${station.name}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },

  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(request.params.reportid);
    response.redirect("/station/" + stationId);
  },

  async deleteReportsByStationId(request, response) {
    const stationId = request.params.stationid;
    console.log(`Deleting All reports from Station ${stationId}`);
    await reportStore.deleteReportsByStationId(stationId);
    response.redirect("/dashboard/");
  },

};
