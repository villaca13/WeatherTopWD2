import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import dayjs from "dayjs";
import axios from "axios";

const apiKey = "56c1c127b3dd8b1ed7bc54e7e6cbd7b2";


export const reportController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.stationid);
    let newReport = {};
    let report = {};

    const weatherRequestUrlByApiId = `https://api.openweathermap.org/data/2.5/weather?id=${station.apiid}&units=metric&appid=${apiKey}`;
    const weatherRequestUrlByName = `https://api.openweathermap.org/data/2.5/weather?id=${station.name}&units=metric&appid=${apiKey}`;
    const forecastRequestUrlByApiId = `https://api.openweathermap.org/data/2.5/forecast?id=${station.apiid}&units=metric&appid=${apiKey}`;
    const forecastRequestUrlByName =  `https://api.openweathermap.org/data/2.5/forecast?id=${station.name}&units=metric&appid=${apiKey}`;

    let weatherResult = {};
    let forecastResult = {};
    
    try {
      weatherResult = await axios.get(weatherRequestUrlByApiId);
      forecastResult = await axios.get(forecastRequestUrlByApiId);
      }
    catch{
      weatherResult = await axios.get(weatherRequestUrlByName);
      forecastResult = await axios.get(forecastRequestUrlByName);
      }
    
    //console.log(forecastResult.data);
    //console.log(weatherResult.data);
    console.log("Requesting weather data from OpenWeatherMap API for Station " + station.name + " with API ID " + station.apiid);

    if (weatherResult.status == 200) {
      const currentWeather = weatherResult.data;
      newReport.date = dayjs().format("YYYY-MM-DD HH:mm:ss.ss");
      newReport.code = currentWeather.weather[0].id;
      newReport.temperature = currentWeather.main.temp;
      newReport.windSpeed = currentWeather.wind.speed;
      newReport.pressure = currentWeather.main.pressure;
      newReport.windDirection = currentWeather.wind.deg;
    }

    if (forecastResult.status == 200) {
      report.tempTrend = [];
      report.trendLabels = [];
      const trends = forecastResult.data.list;
      for (let i=0; i<10; i++) {
        report.tempTrend.push(trends[i].main.temp);
        report.trendLabels.push(trends[i].dt_txt);
      }
    }
    //console.log(report);
    const viewData = {
      title: "Station",
      station: station,
      reading: report,
      currentWeather: weatherResult.data,
      weatherCondition: weatherResult.data.weather[0],
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

    const weatherRequestUrlByApiId = `https://api.openweathermap.org/data/2.5/weather?id=${station.apiid}&units=metric&appid=${apiKey}`;
    const weatherRequestUrlByName = `https://api.openweathermap.org/data/2.5/weather?id=${station.name}&units=metric&appid=${apiKey}`;
    
    let weatherResult = "";
    
    try {
      weatherResult = await axios.get(weatherRequestUrlByApiId);
      }
    catch{
      weatherResult = await axios.get(weatherRequestUrlByName);
      }
    
    console.log("Requesting weather data from OpenWeatherMap API for Station " + station.name + " with API ID " + station.apiid);

    if (weatherResult.status == 200) {
      const currentWeather = weatherResult.data;
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
