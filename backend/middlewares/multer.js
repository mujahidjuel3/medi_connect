import express from "express";
import multer from "multer";
import { addDoctor } from "../controllers/adminController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // temp folder

router.post("/add-doctor", upload.single("image"), addDoctor);

export default router;
