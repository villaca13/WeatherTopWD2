import express from "express";
import { stationController } from "./controllers/station-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { reportController } from "./controllers/report-controller.js";

export const router = express.Router();

router.get("/", stationController.index);
router.get("/dashboard", stationController.index);
router.get("/about", aboutController.index);
router.post("/dashboard/addStation", stationController.addStation);
router.get("/station/:id", reportController.index);
router.post("/station/:id/addreport", reportController.addReport);

