import driverControler from "./controler.js"
import express from "express"

const driverRouter = new express.Router();
driverRouter.get("/", driverControler.get3);
driverRouter.get("/init", driverControler.init);

export default driverRouter;