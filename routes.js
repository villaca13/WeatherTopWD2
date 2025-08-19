import express from "express";
import { accountsController } from './controllers/accounts-controller.js';
import { stationController } from "./controllers/station-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { reportController } from "./controllers/report-controller.js";

export const router = express.Router();

router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);

router.get("/dashboard", stationController.index);
router.post("/dashboard/addStation", stationController.addStation);
router.get("/station/:id", reportController.index);
router.post("/station/:id/addreport", reportController.addReport);
router.get("/about", aboutController.index);
