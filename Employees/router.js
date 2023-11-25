import { Router } from "express";
import * as controller from "./controller.js"

const router=Router();

router.route("/add").post(controller.addData);
router.route("/get").get(controller.getData);
router.route("/detail/:id").get(controller.detailData);
router.route("/remove/:id").delete(controller.removeData);

export default router;