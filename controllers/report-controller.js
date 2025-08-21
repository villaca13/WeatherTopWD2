import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import dayjs from "dayjs";
import axios from "axios";

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

  async autoAddReport(request, response) {
    console.log("Auto rendering new report");
    const station = await stationStore.getStationById(request.params.stationid);
    let newReport = {};
    const weatherRequestUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dublin,Ireland&units=metric&appid=56c1c127b3dd8b1ed7bc54e7e6cbd7b2`
    const result = await axios.get(weatherRequestUrl);
    if (result.status == 200) {
      const currentWeather = result.data;
      newReport.date = dayjs().format("YYYY-MM-DD HH:mm:ss.ss");
      newReport.code = currentWeather.weather[0].id;
      newReport.temperature = currentWeather.main.temp;
      newReport.windSpeed = currentWeather.wind.speed;
      newReport.pressure = currentWeather.main.pressure;
      newReport.windDirection = currentWeather.wind.deg;
    }
    
    console.log(`auto adding Report to Station ${station.name}`);
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
