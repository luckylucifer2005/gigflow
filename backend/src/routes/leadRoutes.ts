import express from "express";
import { createLead, getLeads, getLeadById, updateLead, deleteLead } from "../controllers/leadController";
import { protect } from "../middlewares/auth";

const router = express.Router();

router.use(protect);

router.route("/").post(createLead).get(getLeads);
router.route("/:id").get(getLeadById).put(updateLead).delete(deleteLead);

export default router;
