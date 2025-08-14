import express from "express";
import { addDoctor, loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// Single image upload field name হতে হবে "image" (Frontend form এর সাথে match)
router.post("/add-doctor", upload.single("image"), addDoctor);
router.post("/login", loginAdmin);

export default router;
