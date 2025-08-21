import express from "express";
import { accountsController } from './controllers/accounts-controller.js';
import { stationController } from "./controllers/station-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { reportController } from "./controllers/report-controller.js";
import { userDetailsController } from "./controllers/user-detail-controller.js";
import { cityListController } from "./controllers/city-list-controller.js";


export const router = express.Router();

router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);

router.get("/userdetails", userDetailsController.userDetails);
router.get("/userdetails/editdetails", userDetailsController.editUserDetails);
router.post("/userdetails/updatedetails", accountsController.updateUser);

router.get("/dashboard", stationController.index);
router.get("/dashboard/deletestation/:stationid", stationController.deleteStation);
router.post("/dashboard/addStation", stationController.addStation);

router.get("/station/:stationid", reportController.index);
router.post("/station/:stationid/addreport", reportController.addReport);
router.post("/station/:stationid/autoaddreport", reportController.autoAddReport);
router.get("/station/:stationid/deletereport/:reportid", reportController.deleteReport);
router.get("/station/:stationid/deleteallreports", reportController.deleteReportsByStationId);

router.get("/about", aboutController.index);

